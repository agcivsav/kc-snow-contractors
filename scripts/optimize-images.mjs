import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const imagesDir = path.join(process.cwd(), "public", "images");
const MIN_BYTES = 500_000;

const galleryPngs = new Set([
  "321F-1.png",
  "321F-2.png",
  "512F.png",
  "521f.png",
  "case321F.png",
  "case521f.png",
  "skid1.png",
  "skid2.png",
  "skid3.png",
]);

async function optimizeFile(filename) {
  const inputPath = path.join(imagesDir, filename);
  const { size: inputBytes } = fs.statSync(inputPath);
  if (inputBytes < MIN_BYTES) return null;

  const metadata = await sharp(inputPath).metadata();
  const isGalleryPng = galleryPngs.has(filename);
  const maxWidth = isGalleryPng ? 1400 : 1920;
  const outputExt = filename.toLowerCase().endsWith(".png") ? ".jpg" : path.extname(filename);
  const outputName = path.basename(filename, path.extname(filename)) + outputExt;
  const outputPath = path.join(imagesDir, outputName);
  const tempPath = outputPath === inputPath ? path.join(imagesDir, `.tmp-${outputName}`) : outputPath;

  await sharp(inputPath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(tempPath);

  if (tempPath !== outputPath) {
    fs.renameSync(tempPath, outputPath);
  }

  const outputBytes = fs.statSync(outputPath).size;
  const removedOriginal = outputName !== filename;

  if (removedOriginal) {
    fs.unlinkSync(inputPath);
  }

  return {
    from: filename,
    to: outputName,
    inputBytes,
    outputBytes,
    dimensions: `${metadata.width}x${metadata.height}`,
    removedOriginal,
  };
}

const files = fs.readdirSync(imagesDir).filter((f) => /\.(png|jpe?g)$/i.test(f));
const results = [];

for (const file of files) {
  const result = await optimizeFile(file);
  if (result) results.push(result);
}

for (const result of results) {
  const saved = ((1 - result.outputBytes / result.inputBytes) * 100).toFixed(1);
  console.log(
    `${result.from} -> ${result.to} (${result.dimensions}): ${(result.inputBytes / 1e6).toFixed(2)}MB -> ${(result.outputBytes / 1e3).toFixed(0)}KB (${saved}% smaller)`,
  );
}

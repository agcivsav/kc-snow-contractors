type FormSuccessMessageProps = {
  title: string;
  message: string;
};

export function FormSuccessMessage({ title, message }: FormSuccessMessageProps) {
  return (
    <div
      className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
        <svg
          className="w-7 h-7 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  );
}

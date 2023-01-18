const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <span className="bg-red-900 rounded-lg py-1 px-2 text-xs text-center mt-2">
      {message}
    </span>
  );
};

export default ErrorMessage;

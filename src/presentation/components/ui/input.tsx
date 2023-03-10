import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  type?: string;
  formRegister?: UseFormRegisterReturn;
  className?: string;
}

const Input: React.FC<IProps> = ({
  label,
  placeholder,
  isError,
  errorMessage,
  id,
  type,
  className,
  formRegister,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        {...rest}
        {...formRegister}
        id={id}
        type={type}
        className={`bg-neutral-600 px-3 py-1 rounded-lg ${
          errorMessage ? "border border-red-100" : ""
        } ${className}`}
      />
      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default Input;

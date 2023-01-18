import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./errorMessage";

interface IProps extends React.ComponentPropsWithoutRef<"select"> {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  type?: string;
  options: ISelectOption[];
  formRegister: UseFormRegisterReturn;
}

const Select: React.FC<IProps> = ({
  label,
  placeholder,
  isError,
  errorMessage,
  id,
  options,
  formRegister,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <select
        placeholder={placeholder}
        {...rest}
        {...formRegister}
        id={id}
        className={`bg-neutral-600 p-2 rounded-lg ${
          errorMessage ? "border border-red-100" : ""
        }`}
      >
        {options.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>

      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default Select;

import { ISelectOption } from "@presentation/types/selectOption";
import { UseFormRegisterReturn } from "react-hook-form";
import ErrorMessage from "./ErrorMessage";

interface IProps extends React.ComponentPropsWithoutRef<"select"> {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  type?: string;
  options: string[] | ISelectOption[];
  toDisableOption?: string | ISelectOption;
  defaultOption?: string | ISelectOption;
  formRegister?: UseFormRegisterReturn;
}

const Select: React.FC<IProps> = ({
  label,
  placeholder,
  isError,
  errorMessage,
  id,
  options,
  formRegister,
  defaultOption,
  toDisableOption,
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
        className={`bg-neutral-600 p-2 rounded-lg w-full ${
          errorMessage ? "border border-red-100" : ""
        }`}
      >
        {!defaultOption && <option disabled selected value=""></option>}
        {options.map((item) =>
          typeof item === "string" ? (
            <option
              value={item}
              selected={item === defaultOption}
              disabled={toDisableOption === item}
            >
              {item}
            </option>
          ) : (
            <option
              value={item.value}
              selected={item.value === defaultOption}
              disabled={toDisableOption === item.value}
            >
              {item.label}
            </option>
          )
        )}
      </select>

      {errorMessage && <ErrorMessage message={errorMessage} />}
    </div>
  );
};

export default Select;

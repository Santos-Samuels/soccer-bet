interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  type?: string;
  options: ISelectOption[];
}

const Select: React.FC<IProps> = ({
  label,
  placeholder,
  isError,
  errorMessage,
  id,
  options,
  ...rest
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>{label}</label>
      <select
        placeholder={placeholder}
        {...rest}
        // {...formRegister}
        id={id}
        className="bg-neutral-600 p-2 rounded-lg"
      >
        {options.map((item) => (
          <option value={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;

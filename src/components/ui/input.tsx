interface IProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  type?: string;
  // formRegister: UseFormRegisterReturn;
}

const Input: React.FC<IProps> = ({
  label,
  placeholder,
  isError,
  errorMessage,
  id,
  type,
  ...rest
}) => {
  return (
    <div className="w-max flex flex-col">
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeholder}
        {...rest}
        // {...formRegister}
        id={id}
        type={type}
        className="bg-neutral-600 px-2 py-1 rounded-lg"
      />
    </div>
  );
};

export default Input;

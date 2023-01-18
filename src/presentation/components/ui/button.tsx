interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  type: "button" | "reset" | "submit" | undefined;
  text: string;
}

const Button: React.FC<IProps> = ({
  isError,
  errorMessage,
  id,
  type,
  text,
  ...rest
}) => {
  return (
    <div className="w-max flex flex-col">
      <button
        {...rest}
        id={id}
        type={type}
        className="bg-neutral-600 px-4 py-2 rounded-lg"
      >{text}</button>
    </div>
  );
};

export default Button;

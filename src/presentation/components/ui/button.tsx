import { BeatLoader } from "react-spinners";

interface IProps extends React.ComponentPropsWithoutRef<"button"> {
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  type: "button" | "reset" | "submit" | undefined;
  text: string;
  model?: "default" | "sm";
  isLoading?: boolean;
}

const Button: React.FC<IProps> = ({
  isError,
  errorMessage,
  id,
  type,
  text,
  model,
  isLoading,
  ...rest
}) => {
  return (
    <div className="w-100 flex flex-col">
      <button
        {...rest}
        id={id}
        type={type}
        disabled={isLoading}
        className={`bg-yellow-500 hover:bg-yellow-600 disabled:bg-yellow-600 transition ease-in-out delay-100 rounded-lg ${model === "sm" ? "py-0.5 px-2" : "py-2 px-4"}`}
      >{isLoading ? <BeatLoader color="#fff" size={model === "sm" ? 10 : undefined} /> : text}</button>
    </div>
  );
};

export default Button;

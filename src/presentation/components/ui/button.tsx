import { ClipLoader } from "react-spinners";

interface IProps
  extends React.ComponentPropsWithoutRef<"button">,
    React.PropsWithChildren {
  isError?: boolean;
  errorMessage?: string;
  id?: string;
  type: "button" | "reset" | "submit" | undefined;
  text?: string;
  model?: "default" | "sm";
  isLoading?: boolean;
  bold?: boolean;
}

const Button: React.FC<IProps> = ({
  isError,
  errorMessage,
  id,
  type,
  text,
  model,
  bold = true,
  isLoading,
  children,
  ...rest
}) => {
  return (
    <div className="w-100 flex flex-col items-center">
      {isLoading ? (
        <ClipLoader color="#fff" size={model === "sm" ? 18 : undefined} />
      ) : (
        <button
          {...rest}
          id={id}
          type={type}
          disabled={isLoading}
          className={`bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-700 transition ease-in-out delay-100 rounded-lg ${
            model === "sm" ? "py-0.5 px-2" : "py-2 px-4"
          } ${bold && model !== "sm" && "font-bold"}`}
        >
          {children ? children : text}
        </button>
      )}
    </div>
  );
};

export default Button;

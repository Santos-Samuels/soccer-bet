import { IInputUserLogin } from "@data/dto/input/user";
import AppFacade from "@infra/facade";
import { Button, Input } from "@presentation/components";
import ErrorMessage from "@presentation/components/ui/errorMessage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const { loginUser } = new AppFacade();

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputUserLogin>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (data: IInputUserLogin) => {
    setRequestError("");
    setIsLoading(true);

    try {
      const user = await loginUser().execute(data);
      localStorage.setItem("TOKEN", user.token!);

      reset();
      navigate("/");
    } catch (error) {
      const errorMessage = (error as Error).message;
      if (errorMessage) {
        setRequestError((error as Error).message);
        return;
      }

      setRequestError("Oops! Algo deu erro.");
    }

    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-neutral-800 rounded-xl py-5 px-8 my-3 flex flex-col gap-3 w-80"
      >
        <h1 className="text-center font-bold text-4xl mb-5">Login</h1>
        <Input
          formRegister={register("email", { required: "Campo obrigatório" })}
          type="email"
          placeholder="Email"
          errorMessage={errors.email?.message}
        />
        <Input
          formRegister={register("password", { required: "Campo obrigatório" })}
          type="password"
          placeholder="Senha"
          errorMessage={errors.password?.message}
        />

        <Button type="submit" text="Entrar" bold isLoading={isLoading} />
        {requestError && <ErrorMessage message={requestError} />}

        <p className="text-center mt-2">
          Não tem uma conta?{" "}
          <Link to="/register" className="text-yellow-500 font-bold">
            Registre-se
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;

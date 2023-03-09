import { IInputUser } from "@data/dto/input/user";
import AppFacade from "@infra/facade";
import { Button, Input } from "@presentation/components";
import ErrorMessage from "@presentation/components/ui/ErrorMessage";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const { createUser } = new AppFacade();

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputUser>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (data: IInputUser) => {
    setRequestError("");
    setIsLoading(true);
    
    if (data.password !== data.confirmPassword) {
      setRequestError("As senhas não coincidem.");
      setIsLoading(false);
      return
    }

    try {
      await createUser().execute(data);
      reset();
      navigate("/login");
    } catch (error) {
      setRequestError("Opps! Algo deu errado.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-neutral-800 rounded-xl py-5 px-8 my-3 flex flex-col gap-3 w-80"
      >
        <h1 className="text-center font-bold text-4xl mb-5">Registrar</h1>
        <Input
          id="name"
          formRegister={register("name", { required: "Informe o nome" })}
          type="text"
          placeholder="Nome"
          errorMessage={errors.name?.message}
        />
        <Input
          id="email"
          formRegister={register("email", { required: "Informe o email" })}
          type="email"
          placeholder="Email"
          errorMessage={errors.email?.message}
        />
        <Input
          id="password"
          formRegister={register("password", { required: "Informe a senha" })}
          type="password"
          placeholder="Senha"
          errorMessage={errors.password?.message}
        />
        <Input
          id="confirmPassword"
          formRegister={register("confirmPassword", {
            required: "Confirme a senha",
          })}
          type="password"
          placeholder="Confirmar Senha"
          errorMessage={errors.confirmPassword?.message}
        />

        <Button type="submit" text="Registrar-se" bold isLoading={isLoading} />
        {requestError && <ErrorMessage message={requestError} />}

        <p className="text-center mt-2">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-yellow-500 font-bold">
            Faça login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;

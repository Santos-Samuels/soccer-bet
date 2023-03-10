import { Button, Input, Select } from "..";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import AppFacade from "@infra/facade";
import { AppContext } from "@presentation/context";
import { IInputResultForm } from "@data/dto/input/result";
import { IMatch } from "@domain/model/match";
import { ISelectOption } from "@presentation/types/selectOption";
import { format } from "date-fns";
import ErrorMessage from "../ui/ErrorMessage";

const { createResult, updateUsersScore } = new AppFacade();

const ResultForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IInputResultForm>({ defaultValues: { matchId: "" } });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { matches, results, getResults } = useContext(AppContext);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: IInputResultForm) => {
    setIsLoading(true);
    try {
      const createdResult = await createResult().execute({
        hint: [data.hint1, data.hint2],
        matchId: data.matchId,
      });
      
      await updateUsersScore().execute(createdResult);

      reset();
      await getResults();
      
    } catch (error) {
      setErrorMessage("Erro no servidor.");
    }
    setIsLoading(false);
  };

  const formatSelectItems = () => {
    const matchItems: IMatch[] = matches.filter((match) => {
      if (!results.some((result) => result.matchId === match.id)) return match;
    });

    const selectItems: ISelectOption[] = matchItems.map((item) => {
      const date = new Date(item.date);
      return {
        value: item.id,
        label: `${item.team1} x ${item.team2} | ${format(date, "P")} • ${format(
          date,
          "HH:mm"
        )}`,
      };
    });

    if (selectItems.length > 0) {
      return selectItems;
    }

    return [];
  };

  const selectOptions = formatSelectItems();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-neutral-700 rounded-xl p-5 my-3"
    >
      <h1 className="font-semibold text-xl border-b border-neutral-600 pb-1">
        Adicionar Resultado
      </h1>

      {selectOptions.length > 0 ? (
        <div className="mt-5 flex justify-center flex-wrap flex-col md:flex-row gap-5">
          <div>
            <Select
              id="matchId"
              formRegister={register("matchId", {
                required: "Selecione uma Partida",
              })}
              label="Partida"
              options={selectOptions}
              errorMessage={errors.matchId?.message}
            />

            {errorMessage && (
              <div className="mt-1">
                <ErrorMessage message={errorMessage} />
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <p>Placar</p>

            <div className="flex gap-3 items-center">
              <Input
                id="hint1"
                formRegister={register("hint1", { required: true })}
                type="number"
                min="0"
                max="10"
                className="h-10"
              />

              <span className="text-center font-bold text-2xl grid">x</span>

              <Input
                id="hint2"
                formRegister={register("hint2", { required: true })}
                type="number"
                min="0"
                max="10"
                className="h-10"
              />
            </div>
            {(errors.hint1 || errors.hint2) && (
              <ErrorMessage message="Informe o placar" />
            )}
          </div>

          <div className="sm:mt-5">
            <Button type="submit" text="Adicionar" isLoading={isLoading} />
          </div>
        </div>
      ) : (
        <p className="mt-4">
          Todas as partidas cadastradas já possue resultados!
        </p>
      )}
    </form>
  );
};

export default ResultForm;

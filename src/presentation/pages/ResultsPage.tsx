import { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { PageContainer, ResultForm, ResultList } from "../components";
import { AppContext } from "@presentation/context";

const ResultsPage: React.FC = () => {
  const { getResults, user, isLoading } = useContext(AppContext);

  useEffect(() => {
    getResults();
  }, []);

  return (
    <PageContainer>
      {user?.isAdmin && (
        <div className="mb-8">
          <ResultForm />
        </div>
      )}

      <div className="border-b pb-1 border-gray-400 flex gap-5 justify-between items-end mb-8">
        <h1 className="text-xl md:text-3xl text-gray-400 font-bold">
          Resultados das Partidas
        </h1>
      </div>

      {!isLoading ? (
        <ResultList />
      ) : (
        <div className="mt-24 text-center">
          <BeatLoader color="#eab308" size={30} />
        </div>
      )}
    </PageContainer>
  );
};

export default ResultsPage;

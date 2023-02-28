import { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { MatchList, PageContainer } from "../components";
import MatchForm from "../components/match/MatchForm";
import { AppContext } from "@presentation/context";

const MatchesPage: React.FC = () => {
  const { matches, getMatches, user, isLoading } = useContext(AppContext);

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <PageContainer>
      {user?.isAdmin && (
        <div className="mb-8">
          <MatchForm />
        </div>
      )}

      <div className="border-b pb-1 border-gray-400 flex gap-5 justify-between items-end mb-8">
        <h1 className="text-xl md:text-3xl text-gray-400 font-bold">
          Partidas Configuradas
        </h1>
      </div>

      {!isLoading ? (
        <MatchList />
      ) : (
        <div className="mt-24 text-center">
          <BeatLoader color="#eab308" size={30} />
        </div>
      )}
    </PageContainer>
  );
};

export default MatchesPage;

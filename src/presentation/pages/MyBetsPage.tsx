import { BetList, Button, PageContainer } from "@presentation/components";
import BetForm from "@presentation/components/bet/BetForm";
import { AppContext } from "@presentation/context";
import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const MyBetsPage: React.FC = () => {
  const { currentMatch, getBets, isLoading, matches, bets } = useContext(AppContext);

  useEffect(() => {
    getBets();
  }, []);

  return (
    <PageContainer>
      {currentMatch && (
        <div className="mb-8">
          <BetForm />
        </div>
      )}

      <div className="border-b pb-1 border-gray-400 flex gap-5 justify-between items-end mb-8">
        <h1 className="text-xl md:text-3xl text-gray-400 font-bold">
          Minhas Apostas
        </h1>

        {!currentMatch && <Link to='/matches'>
          <Button type="button" text="Fazer Aposta" />
        </Link>}
      </div>

      {!isLoading ? (
        <BetList bets={bets} matches={matches} />
      ) : (
        <div className="mt-24 text-center">
          <BeatLoader color="#eab308" size={30} />
        </div>
      )}
    </PageContainer>
  );
};

export default MyBetsPage;

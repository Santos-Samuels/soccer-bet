import { IBet } from "@domain/model/bet";
import { IMatch } from "@domain/model/match";
import AppFacade from "@infra/facade";
import { BetList, PageContainer } from "@presentation/components";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

const appFacade = new AppFacade();

const MyBetsPage: React.FC = () => {
  const [bets, setBets] = useState<IBet[]>([]);
  const [matches, setMatches] = useState<IMatch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const matchesItems: IMatch[] = [];
      const betsResponse = await appFacade.listBets().execute();

      for (let i = 0; i < betsResponse.length; i++) {
        const item = betsResponse[i];
        const matchResponse = await appFacade.getMatch().execute(item.matchId);
        matchesItems.push(matchResponse);
      }

      setBets(betsResponse);
      setMatches(matchesItems);
    } catch (error) {
      setBets([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <PageContainer>
      <div className="border-b pb-1 border-gray-400 mb-8">
        <h1 className="text-xl md:text-3xl text-gray-400 font-bold">
          Minhas Apostas
        </h1>
      </div>

      {!isLoading && bets.length > 0 ? (
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

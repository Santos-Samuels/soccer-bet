import { IBet } from "@domain/model/bet";
import { IMatch } from "@domain/model/match";
import { IResult } from "@domain/model/result";
import { IUser } from "@domain/model/user";
import AppFacade from "@infra/facade";
import React, { Dispatch, PropsWithChildren, useEffect, useState } from "react";

interface IAppContext {
  user?: IUser;
  matches: IMatch[];
  bets: IBet[];
  results: IResult[];
  currentMatch?: IMatch;
  isLoading: boolean;
  getMatches: (activeLoad?: boolean) => Promise<void>;
  getBets: () => Promise<void>;
  getResults: () => Promise<void>;
  setUser: Dispatch<React.SetStateAction<IUser | undefined>>;
  setCurrentMatch: Dispatch<React.SetStateAction<IMatch | undefined>>;
}

export const AppContext = React.createContext({} as IAppContext);
const { listMatches, listBets, getUser, listResults } = new AppFacade();

export const AppProvider: React.FC<PropsWithChildren> = (props) => {
  const [user, setUser] = useState<IUser>();
  const [matches, setMatches] = useState<IMatch[]>([]);
  const [currentMatch, setCurrentMatch] = useState<IMatch>();
  const [bets, setBets] = useState<IBet[]>([]);
  const [results, setResults] = useState<IResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMatches = async (activeLoad = true) => {
    setIsLoading(activeLoad)
    try {
      const response = await listMatches().execute();
      setMatches(response);
    } catch (error) {
      setMatches([]);
    }
    setIsLoading(false)
  };

  const getBets = async () => {
    setIsLoading(true);
    try {
      const betsResponse = await listBets().execute();
      const matchesResponse = await listMatches().execute();

      const filteredMatches: IMatch[] = []

      betsResponse.forEach(bet => {
        const match = matchesResponse.find(match => match.id === bet.matchId)
        if (match) {
          filteredMatches.push(match)
        }
      })

      setMatches(filteredMatches)
      setBets(betsResponse);
    } catch (error) {
      setBets([]);
    }
    setIsLoading(false);
  };

  const getResults = async () => {
    setIsLoading(true)
    try {
      const resultResponse = await listResults().execute();
      const MatchResponse = await listMatches().execute();
      setResults(resultResponse);
      setMatches(MatchResponse);
    } catch (error) {
      setResults([]);
    }
    setIsLoading(false)
  };

  const getUserData = async () => {
    const id = localStorage.getItem("id");

    try {
      if (id) {
        const userData = await getUser().execute(id!);
        setUser(userData);
        return;
      }
    } catch (error) {}

    setUser(undefined);
  };

  useEffect(() => {
    getUserData()
  }, [])
  console.log(user);
  

  return (
    <AppContext.Provider
      value={{
        user,
        matches,
        bets,
        results,
        currentMatch,
        isLoading,
        getMatches,
        getBets,
        getResults,
        setUser,
        setCurrentMatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

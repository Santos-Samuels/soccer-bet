import { IBet } from "@domain/model/bet";
import { IMatch } from "@domain/model/match";
import { IResult } from "@domain/model/result";
import { IUser } from "@domain/model/user";
import AppFacade from "@infra/facade";
import React, { Dispatch, PropsWithChildren, useEffect, useState } from "react";

interface IAppContext {
  currentUser?: IUser;
  users: IUser[];
  matches: IMatch[];
  bets: IBet[];
  results: IResult[];
  currentMatch?: IMatch;
  isLoading: boolean;
  getMatches: (activeLoad?: boolean) => Promise<void>;
  getBets: () => Promise<void>;
  getResults: () => Promise<void>;
  setCurrentUser: Dispatch<React.SetStateAction<IUser | undefined>>;
  setCurrentMatch: Dispatch<React.SetStateAction<IMatch | undefined>>;
  getUsers: () => Promise<void>;
}

export const AppContext = React.createContext({} as IAppContext);
const { listMatches, listBets, getUser, listResults, listUsers } =
  new AppFacade();

export const AppProvider: React.FC<PropsWithChildren> = (props) => {
  const [currentUser, setCurrentUser] = useState<IUser>();
  const [users, setUsers] = useState<IUser[]>([]);
  const [matches, setMatches] = useState<IMatch[]>([]);
  const [currentMatch, setCurrentMatch] = useState<IMatch>();
  const [bets, setBets] = useState<IBet[]>([]);
  const [results, setResults] = useState<IResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMatches = async (activeLoad = true) => {
    setIsLoading(activeLoad);
    try {
      const response = await listMatches().execute();
      setMatches(response);
    } catch (error) {
      setMatches([]);
    }
    setIsLoading(false);
  };

  const getBets = async () => {
    setIsLoading(true);
    try {
      const betsResponse = await listBets().execute();
      const matchesResponse = await listMatches().execute();
      const resultsResponse = await listResults().execute();

      const filteredMatches: IMatch[] = [];

      betsResponse.forEach((bet) => {
        const match = matchesResponse.find((match) => match.id === bet.matchId);

        if (match) {
          filteredMatches.push(match);
        }
      });

      setMatches(filteredMatches);
      setResults(resultsResponse);
      setBets(betsResponse);
    } catch (error) {
      setBets([]);
    }
    setIsLoading(false);
  };

  const getResults = async () => {
    setIsLoading(true);
    try {
      const resultResponse = await listResults().execute();
      const MatchResponse = await listMatches().execute();
      setResults(resultResponse);
      setMatches(MatchResponse);
    } catch (error) {
      setResults([]);
    }
    setIsLoading(false);
  };

  const getUserData = async () => {
    const id = localStorage.getItem("id");

    try {
      if (id) {
        const userData = await getUser().execute(id!);
        setCurrentUser(userData);
        return;
      }
    } catch (error) {}

    setCurrentUser(undefined);
  };

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await listUsers().execute();

      response.sort((a, b) => {
        if (a.score > b.score) {
          return -1;
        }
        if (a.score < b.score) {
          return 1;
        }
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });

      setUsers(response);
    } catch (error) {
      setUsers([]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        currentUser,
        matches,
        bets,
        results,
        currentMatch,
        isLoading,
        users,
        getMatches,
        getBets,
        getResults,
        setCurrentUser,
        setCurrentMatch,
        getUsers,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

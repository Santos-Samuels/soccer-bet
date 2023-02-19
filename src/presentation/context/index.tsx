import { IBet } from "@domain/model/bet";
import { IMatch } from "@domain/model/match";
import { IUser } from "@domain/model/user";
import AppFacade from "@infra/facade";
import React, { Dispatch, PropsWithChildren, useEffect, useState } from "react";

interface IAppContext {
  user?: IUser;
  matches: IMatch[];
  bets: IBet[];
  currentMatch?: IMatch;
  isLoading: boolean;
  getMatches: (activeLoad?: boolean) => Promise<void>;
  getBets: () => Promise<void>;
  setUser: Dispatch<React.SetStateAction<IUser | undefined>>;
  setCurrentMatch: Dispatch<React.SetStateAction<IMatch | undefined>>;
}

export const AppContext = React.createContext({} as IAppContext);
const { listMatches, listBets, getUser } = new AppFacade();

export const AppProvider: React.FC<PropsWithChildren> = (props) => {
  const [user, setUser] = useState<IUser>();
  const [matches, setMatches] = useState<IMatch[]>([]);
  const [currentMatch, setCurrentMatch] = useState<IMatch>();
  const [bets, setBets] = useState<IBet[]>([]);
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
      setBets(betsResponse);
    } catch (error) {
      setBets([]);
    }
    setIsLoading(false);
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
        currentMatch,
        isLoading,
        getMatches,
        getBets,
        setUser,
        setCurrentMatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

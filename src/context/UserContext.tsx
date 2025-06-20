"use client";
import { getCurrentUser } from "@/services/auth";
import { IUser } from "@/types/user.types";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export interface IUserProviderValues {
  user: IUser | null;
  loading: boolean;
  setUser: (user: IUser | null) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

//Creating Context.
export const UserContext = createContext<IUserProviderValues | undefined>(undefined);

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleUser = async () => {
    const loginUser = await getCurrentUser();
    setUser(loginUser);
    setLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [loading]);

  const contextValue = {
    user,
    loading,
    setLoading,
    setUser,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;

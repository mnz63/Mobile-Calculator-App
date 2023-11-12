import React, { useContext, useState, SetStateAction, Dispatch } from "react";
import { createContext } from "react";

type SetState<T> = Dispatch<SetStateAction<T>>;

export type ContextProps = {
  isLightTheme?: boolean;
  setIsLightTheme: SetState<any>;
};

const Context = createContext({} as ContextProps);

export function Provider({ children }: any) {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        setIsLightTheme,
        isLightTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useAdminContext() {
  return useContext(Context);
}

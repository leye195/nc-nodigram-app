import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";

type State = {
  isUserLoggedIn: boolean | null;
  logUserIn: Function;
  logUserOut: Function;
};

type AuthProviderType = {
  isLoggedIn: boolean | null;
  children: React.ReactNode;
};

export const AuthContext = createContext({} as State);

export const AuthProvider = ({ isLoggedIn, children }: AuthProviderType) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean | null>(
    () => isLoggedIn
  );

  const logUserIn = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "true");
      setIsUserLoggedIn(true);
    } catch (error) {
      console.log(error);
    }
  };
  const logUserOut = async () => {
    try {
      await AsyncStorage.setItem("isLoggedIn", "false");
      setIsUserLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ isUserLoggedIn, logUserIn, logUserOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useIsLoggedIn = () => {
  const { isUserLoggedIn: isLoggedIn } = useContext(AuthContext);
  return isLoggedIn;
};

export const useLogIn = () => {
  const { logUserIn } = useContext(AuthContext);
  return logUserIn;
};

export const useLogOut = () => {
  const { logUserOut } = useContext(AuthContext);
  return logUserOut;
};

/* import React, { useState } from "react";
import useLocalStorage from "../../common/LocalStorage";

const AuthContext = React.createContext([null, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("auth", null);
  return <AuthContext.Provider value={[auth, setAuth]}></AuthContext.Provider>;
};

export default AuthContext; */

import React, { useCallback, useContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
let AuthContext = React.createContext();
export const AuthProvider = ({children}) => {
  let [users, setUsers] = useLocalStorage("users", []);
  let addUser = useCallback((formData) => {
    setUsers([...users, formData]);
  });
  /**let deletUser = useCallback((id) => {
    let newUser = users.filter((item) => item.id !== id);
    setUsers(newUser);
  });
  let isIn = (id) => users?.some((item) => item.id === id);*/
  return (
    <AuthContext.Provider value={{ users, addUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export let useAuth = () => useContext(AuthContext);

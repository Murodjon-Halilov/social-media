import { createContext, useState } from "react";

export const MessageAndAuthContext = createContext({
  usersData: null,
  setUsersData: () => null,
});

export const MessageAndAuthProvider = ({ children }) => {
  const [usersData, setUsersData] = useState();

  const value = { usersData, setUsersData };

  return (
    <MessageAndAuthContext.Provider value={value}>
      {children}
    </MessageAndAuthContext.Provider>
  );
};

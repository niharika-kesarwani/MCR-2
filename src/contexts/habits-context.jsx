/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  return <HabitsContext.Provider value={{}}>{children}</HabitsContext.Provider>;
};

export const useHabits = () => useContext(HabitsContext);

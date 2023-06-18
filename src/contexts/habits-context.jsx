/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import { habitsReducer, initialHabits } from "../reducers/habits-reducer";

export const HabitsContext = createContext();

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useReducer(habitsReducer, initialHabits);

  return (
    <HabitsContext.Provider value={{ habits, setHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);

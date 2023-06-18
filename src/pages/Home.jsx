import { useEffect } from "react";
import { useHabits } from "../main";
import { habitsConstants } from "../constants/habits-constants";
import { HabitCard } from "../components/HabitCard";

export const Home = () => {
  const {
    habits: { habits, unArchivedHabits },
    setHabits,
  } = useHabits();
  const { GET_UNARCHIVED_HABITS } = habitsConstants;

  useEffect(() => {
    setHabits({ type: GET_UNARCHIVED_HABITS });
  }, [habits]);

  return (
    <div className="flex flex-col">
      <div className="m-5 self-end rounded-xl bg-primary p-4 hover:cursor-pointer hover:bg-secondary">
        <button className="font-bold uppercase">Create My Own</button>
      </div>
      <ul className="flex h-screen grow flex-wrap justify-evenly">
        {unArchivedHabits?.map((habit) => (
          <HabitCard habit={habit} key={habit?.id} />
        ))}
      </ul>
    </div>
  );
};

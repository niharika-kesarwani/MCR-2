import { useEffect } from "react";
import { useHabits } from "../main";
import { habitsConstants } from "../constants/habits-constants";
import { HabitCard } from "../components/HabitCard";

export const Archive = () => {
  const {
    habits: { habits, archivedHabits },
    setHabits,
  } = useHabits();
  const { GET_ARCHIVED_HABITS } = habitsConstants;

  useEffect(() => {
    setHabits({ type: GET_ARCHIVED_HABITS });
  }, [habits]);

  return (
    <div className="mt-24 flex h-screen grow flex-wrap justify-evenly">
      {archivedHabits?.map((item, index) => (
        <HabitCard key={index} habit={item} />
      ))}
    </div>
  );
};

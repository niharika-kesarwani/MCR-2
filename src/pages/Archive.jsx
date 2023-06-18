import { useEffect } from "react";
import { useHabits } from "../main";
import { habitsConstants } from "../constants/habits-constants";

export const Archive = () => {
  const {
    habits: { archivedHabits },
    setHabits,
  } = useHabits();
  const { GET_ARCHIVED_HABITS } = habitsConstants;

  useEffect(() => {
    setHabits({ type: GET_ARCHIVED_HABITS });
  }, []);

  return (
    <div>
      Archive
      {archivedHabits?.map((item) => (
        <p key={item}>{item.name}</p>
      ))}
    </div>
  );
};

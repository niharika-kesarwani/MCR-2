import { habitsConstants } from "../constants/habits-constants";
import { useHabits } from "../main";

/* eslint-disable react/prop-types */
export const HabitCard = ({ habit }) => {
  const { id, name, repeat, goal, time, start, archived } = habit;
  const { setHabits } = useHabits();
  const { SET_SHOW_DETAIL_MODAL, SET_IS_NEW_HABIT, SET_TO_EDIT_HABIT } =
    habitsConstants;

  return (
    <div
      key={id}
      className="bg-random m-2 flex h-40 w-80 items-center justify-center rounded-3xl bg-secondary text-3xl uppercase tracking-widest hover:scale-110 hover:cursor-pointer hover:bg-primary"
      onClick={() => {
        setHabits({ type: SET_SHOW_DETAIL_MODAL, payload: true });
        setHabits({ type: SET_IS_NEW_HABIT, payload: false });
        setHabits({ type: SET_TO_EDIT_HABIT, payload: habit });
      }}
    >
      {name}
    </div>
  );
};

import { useEffect } from "react";
import { useHabits } from "../main";
import { habitsConstants } from "../constants/habits-constants";
import { HabitCard } from "../components/HabitCard";
import { HabitDetailModal } from "../modal/HabitDetailModal";

export const Home = () => {
  const {
    habits: { habits, unArchivedHabits, showDetailModal },
    setHabits,
  } = useHabits();
  const { GET_UNARCHIVED_HABITS, SET_SHOW_DETAIL_MODAL, SET_IS_NEW_HABIT } =
    habitsConstants;

  useEffect(() => {
    setHabits({ type: GET_UNARCHIVED_HABITS });
  }, [habits]);

  return (
    <div className="relative flex flex-col">
      <div className="m-5 self-end rounded-xl bg-primary p-4 hover:cursor-pointer hover:bg-secondary">
        <button
          className="font-bold uppercase"
          onClick={() => {
            setHabits({ type: SET_SHOW_DETAIL_MODAL, payload: true });
            setHabits({ type: SET_IS_NEW_HABIT, payload: true });
          }}
        >
          Create My Own
        </button>
      </div>
      <ul className="flex h-screen grow flex-wrap justify-evenly">
        {unArchivedHabits?.map((habit) => (
          <HabitCard habit={habit} key={habit?.id} />
        ))}
      </ul>

      {showDetailModal && (
        <div
          className="bg- absolute inset-0 left-0 top-0 z-50 flex items-center justify-center bg-[black]/50"
          onClick={() =>
            setHabits({ type: SET_SHOW_DETAIL_MODAL, payload: false })
          }
        >
          <HabitDetailModal />
        </div>
      )}
    </div>
  );
};

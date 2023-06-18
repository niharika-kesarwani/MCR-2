/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  goals,
  habitsConstants,
  repeat,
  startDate,
  timeOfTheDay,
} from "../constants/habits-constants";
import { useHabits } from "../main";
import { v4 as uuid } from "uuid";

export const HabitDetailModal = () => {
  const {
    habits: { isNewHabit, toEditHabit },
    setHabits,
  } = useHabits();
  const { SET_SHOW_DETAIL_MODAL, ADD_NEW_HABIT, DELETE_HABIT, ADD_TO_ARCHIVE } =
    habitsConstants;

  const [newHabitDetails, setNewHabitDetails] = useState(
    isNewHabit
      ? {
          id: uuid(),
          name: "",
          repeat: repeat[0],
          goal: goals[0],
          time: timeOfTheDay[0],
          start: startDate[0],
          archived: false,
        }
      : toEditHabit
  );

  const formInputHandler = (e) => {
    setNewHabitDetails({ ...newHabitDetails, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = () => {
    setHabits({ type: SET_SHOW_DETAIL_MODAL, payload: false });
    setHabits({
      type: ADD_NEW_HABIT,
      payload: {
        ...newHabitDetails,
        goal: `${newHabitDetails.goal} ${newHabitDetails.repeat}`,
      },
    });
  };

  return (
    <div
      className="flex flex-col gap-y-3 rounded-2xl bg-[white] p-5"
      onClick={(e) => e.stopPropagation()}
    >
      <p className="text-xl font-bold uppercase tracking-wide">
        {isNewHabit ? "Add New Habit" : "Edit Habit"}
      </p>
      <form className="flex flex-col gap-y-3" onSubmit={formSubmitHandler}>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="name" className="font-bold">
            Name
          </label>
          <input
            type="text"
            className="border px-2 py-1"
            name="name"
            value={newHabitDetails.name}
            onChange={formInputHandler}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="font-bold" htmlFor="repeat">
            Repeat
          </label>
          <select
            onChange={formInputHandler}
            name="repeat"
            defaultValue={newHabitDetails.repeat}
          >
            {repeat?.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="font-bold" htmlFor="goal">
            Goal
          </label>
          <select
            onChange={formInputHandler}
            name="goal"
            defaultValue={newHabitDetails.goal}
          >
            {goals?.map((item) => (
              <option key={item} value={item}>
                {item} {newHabitDetails.repeat}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="font-bold" htmlFor="time">
            Time of the Day
          </label>
          <select
            onChange={formInputHandler}
            name="time"
            defaultValue={newHabitDetails.time}
          >
            {timeOfTheDay?.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-y-1">
          <label className="font-bold" htmlFor="start">
            Start Date
          </label>
          <select
            onChange={formInputHandler}
            name="start"
            defaultValue={newHabitDetails.start}
          >
            {startDate?.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <button
          onClick={() =>
            setHabits({ type: SET_SHOW_DETAIL_MODAL, payload: false })
          }
          className="rounded bg-primary hover:bg-secondary"
        >
          Discard
        </button>
        <button className="rounded bg-secondary hover:bg-primary" type="submit">
          Save
        </button>
        {!isNewHabit && (
          <div>
            <button
              className="rounded bg-primary hover:bg-secondary"
              onClick={() =>
                setHabits({ type: DELETE_HABIT, payload: toEditHabit })
              }
              type="submit"
            >
              Delete
            </button>
            <button
              className="rounded bg-secondary hover:bg-primary"
              onClick={() => setHabits({ type: ADD_TO_ARCHIVE })}
            >
              Archive
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

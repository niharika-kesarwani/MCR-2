/* eslint-disable react/prop-types */
export const HabitCard = ({ habit }) => {
  const { id, name, repeat, goal, time, start, archived } = habit;

  return (
    <div
      key={id}
      className="bg-random m-2 flex h-40 w-80 items-center justify-center rounded-3xl bg-secondary text-3xl uppercase tracking-widest hover:scale-110 hover:cursor-pointer hover:bg-primary"
    >
      {name}
    </div>
  );
};

import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className=" flex justify-evenly bg-secondary text-2xl font-bold uppercase">
      <NavLink
        to="/"
        className="flex w-screen justify-center py-5 hover:bg-primary"
      >
        Home
      </NavLink>
      <NavLink
        to="/archive"
        className="flex w-screen justify-center py-5 hover:bg-primary"
      >
        Archive
      </NavLink>
    </div>
  );
};

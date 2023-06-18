import { habitsConstants } from "../constants/habits-constants";
import { habitsData } from "../data/habits-data";

const { GET_ARCHIVED_HABITS, ARCHIVE_UNARCHIVE_HABIT } = habitsConstants;

export const habitsReducer = (state, action) => {
  switch (action.type) {
    case GET_ARCHIVED_HABITS:
      return {
        ...state,
        archivedHabits: state?.habits?.filter(({ archived }) => archived),
      };
    case ARCHIVE_UNARCHIVE_HABIT:
      return {
        ...state,
        habits: state?.habits?.map((item) =>
          item?.id === action?.payload?.id
            ? { ...item, archived: !item.archived }
            : item
        ),
      };
    default:
      return state;
  }
};

export const initialHabits = {
  habits: habitsData,
  archivedHabits: [],
};

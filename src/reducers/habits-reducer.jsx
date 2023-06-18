import { habitsConstants } from "../constants/habits-constants";
import { habitsData } from "../data/habits-data";

const { GET_ARCHIVED_HABITS, ARCHIVE_UNARCHIVE_HABIT, GET_UNARCHIVED_HABITS } =
  habitsConstants;

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
    case GET_UNARCHIVED_HABITS:
      return {
        ...state,
        unArchivedHabits: state?.habits?.filter(({ archived }) => !archived),
      };
    default:
      return state;
  }
};

export const initialHabits = {
  habits: habitsData,
  archivedHabits: habitsData?.filter(({ archived }) => archived),
  unArchivedHabits: habitsData?.filter(({ archived }) => !archived),
};

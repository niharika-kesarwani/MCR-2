import { habitsConstants } from "../constants/habits-constants";
import { habitsData } from "../data/habits-data";

const {
  GET_ARCHIVED_HABITS,
  ARCHIVE_UNARCHIVE_HABIT,
  GET_UNARCHIVED_HABITS,
  SET_SHOW_DETAIL_MODAL,
  ADD_NEW_HABIT,
  SET_IS_NEW_HABIT,
  DELETE_HABIT,
  SET_TO_EDIT_HABIT,
  ADD_TO_ARCHIVE,
} = habitsConstants;

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
    case SET_SHOW_DETAIL_MODAL:
      return { ...state, showDetailModal: action.payload };
    case ADD_NEW_HABIT:
      return {
        ...state,
        habits: state.isNewHabit
          ? [action?.payload, ...state.habits]
          : state?.habits?.map((item) =>
              item.id === action.payload.id ? action.payload : item
            ),
      };
    case SET_IS_NEW_HABIT:
      return { ...state, isNewHabit: action.payload };
    case DELETE_HABIT:
      return {
        ...state,
        habits: state?.habits?.filter(({ id }) => id !== action.payload.id),
      };
    case SET_TO_EDIT_HABIT:
      return {
        ...state,
        toEditHabit: action.payload,
      };
    case ADD_TO_ARCHIVE:
      return {
        ...state,
        habits: state?.habits?.map((item) =>
          item.id === state.toEditHabit.id ? { ...item, archived: true } : item
        ),
      };
    default:
      return state;
  }
};

export const initialHabits = {
  habits: habitsData,
  archivedHabits: habitsData?.filter(({ archived }) => archived),
  unArchivedHabits: habitsData?.filter(({ archived }) => !archived),
  showDetailModal: false,
  isNewHabit: false,
  toEditHabit: {},
};

import {
  repeat,
  goals,
  timeOfTheDay,
  startDate,
} from "../constants/habits-constants";

export const habitsData = [
  {
    id: 1,
    name: "Testing",
    repeat: repeat[0],
    goal: `${goals[0]} ${repeat[0]}`,
    time: timeOfTheDay[0],
    start: startDate[0],
    archived: false,
  },
  {
    id: 2,
    name: "Cleaning",
    repeat: repeat[1],
    goal: `${goals[1]} ${repeat[1]}`,
    time: timeOfTheDay[1],
    start: startDate[1],
    archived: true,
  },
  {
    id: 3,
    name: "Writing",
    repeat: repeat[2],
    goal: `${goals[2]} ${repeat[2]}`,
    time: timeOfTheDay[2],
    start: startDate[2],
    archived: false,
  },
];

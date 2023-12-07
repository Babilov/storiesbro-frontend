import { getRandomPlaces } from "./getRandomPlaces";

export const getDates = () => {
  let days = [];

  let i = 0;

  while (i < 14) {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + i);
    days = [
      ...days,
      {
        day:
          String(tomorrow.getDate()).padStart(2, "0") +
          "." +
          String(tomorrow.getMonth() + 1).padStart(2, "0"),
        places: 2,
      },
    ];
    i += 1;
  }
  return days;
};

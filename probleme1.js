let { openingHours, daysSelected } = require("./prb1data");

const stringTonumber = (value) => {
  return parseInt(value.split(":").join(""));
};

let hoursToAdd = { begin: "19:00", end: "23:30" };

const addopenHour = (days, addHour) => {
  for (const key in days) {
    if (!openingHours[key]) {
      openingHours = { ...openingHours, [key]: [] };
    }

    const checkCollision = openingHours[key].map((actualHour) => {
      const [addStart, addEnd] = Object.values(addHour).map((x) => {
        return stringTonumber(x);
      });

      const [existingStart, existingEnd] = Object.values(actualHour).map(
        (x) => {
          return stringTonumber(x);
        }
      );

      const beginInsideExistingHours =
        addStart >= existingStart && addStart <= existingEnd;
      const endInsideExistingHours =
        addEnd <= existingEnd && addEnd >= existingStart;

      if (beginInsideExistingHours || endInsideExistingHours) {
        return false;
      }
    });

    if (checkCollision.includes(false)) {
      return false;
    }

    if (days[key]) {
      openingHours = {
        ...openingHours,
        [key]: [...openingHours[key], addHour],
      };
    }

    openingHours[key].sort((a, b) => {
      const [first, second] = [a, b].map((x) => stringTonumber(x.begin));
      return first - second;
    });
  }

  return openingHours;
};

console.log(addopenHour(daysSelected, hoursToAdd));

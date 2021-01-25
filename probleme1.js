let { openingHours, daysSelected, hoursToAdd } = require("./prb1data");

const addopenHour = (days, addHour) => {
  for (const key in days) {
    
    if (!openingHours[key]) {
      openingHours = { ...openingHours, [key]: [] };
    }

    const checkCollision = openingHours[key].map((actualHour) => {

      const [addStart, addEnd] = Object.values(addHour).map((x) => {
        return parseInt(x.split(":").join(""));
      });

      const [existingStart, existingEnd] = Object.values(actualHour).map(
        (x) => {
          return parseInt(x.split(":").join(""));
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
      const [first, second] = [a, b].map((x) =>
        parseInt(x.begin.split(":").join(""))
      );
      return first - second;
    });
  }

  return openingHours;
};

console.log(addopenHour(daysSelected, hoursToAdd));

let openingHours = {
  monday: [
    { begin: "13:00", end: "18:00" },
    { begin: "10:00", end: "12:00" },
  ],
  tuesday: [
    { begin: "13:00", end: "18:00" },
    { begin: "10:00", end: "12:00" },
  ],
  wednesday: [
    { begin: "13:00", end: "18:00" },
    { begin: "10:00", end: "12:00" },
  ],
  thursday: [
    { begin: "13:00", end: "18:00" },
    { begin: "10:00", end: "12:00" },
  ],
  friday: [],
  saturday: [],
  sunday: [],
};

let daysSelected = {
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: true,
  friday: false,
  saturday: false,
  sunday: false,
};

module.exports = { openingHours, daysSelected };

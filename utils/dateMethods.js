const { MONTH_NAMES } = require("./constants");

// helper methods
const determineDateType = (date) => {
  const setDateType = (date) => {
    if (date.search("-") !== -1) return new Date(date);
    if (date.search(" ") !== -1) {
      const splitDate = decodeURI(date).split(" ");
      const dayYear = splitDate
        .filter((item) => Number.isInteger(parseInt(item)))
        .map((item) => parseInt(item));
      const day = dayYear.filter((item) => item <= 12)[0];
      const month = splitDate.filter(
        (item) => !Number.isInteger(parseInt(item))
      )[0];
      const monthIndex = MONTH_NAMES.indexOf(month);
      const year = dayYear.filter((item) => item >= 12)[0];
      return new Date(year, monthIndex, day);
    }
    if (new Date(parseInt(date)) !== "Invalid Date") {
      return new Date(parseInt(date));
    }
  };
  const setDefaultDate = () => {
    return new Date();
  };

  return date ? setDateType(date) : setDefaultDate();
};

validateDate = (date) => {
  const stringDate = date.toString();
  if (stringDate === "Invalid Date") throw stringDate;
};

exports.determineDateType = determineDateType;
exports.validateDate = validateDate;

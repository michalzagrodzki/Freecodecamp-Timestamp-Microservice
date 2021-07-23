const { MONTH_NAMES } = require("./constants");

// date validators
isDashDate = (date) => {
  return date.search("-") !== -1;
};
isLocaleDate = (date) => {
  return date.search(" ") !== -1;
};
isIntegerDate = (date) => {
  return new Date(parseInt(date)) !== "Invalid Date";
};

// date setters
const setDateFromDash = (date) => new Date(date);
const setDateFromLocale = (date) => {
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
};
const setDateFromInteger = (date) => new Date(parseInt(date));

// date public methods
const determineDateType = (date) => {
  const setDateType = (date) => {
    if (isDashDate(date)) return setDateFromDash(date);
    if (isLocaleDate(date)) return setDateFromLocale(date);
    if (isIntegerDate(date)) return setDateFromInteger(date);
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

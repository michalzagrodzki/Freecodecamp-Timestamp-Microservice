// helper methods
const determineDateType = (date) => {
  const setDateType = (date) => {
    if (date.search("-") !== -1) return new Date(date);
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

// display date details
exports.details = (req, res) => {
  try {
    const date = determineDateType(req.params.date);
    validateDate(date);

    const formattedDate = date.toGMTString();
    const unixDate = date.getTime();

    const response = {
      unix: unixDate,
      utc: formattedDate,
    };
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};

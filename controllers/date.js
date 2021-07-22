// display date details
exports.details = (req, res) => {
  try {
    const setDateType = (date) => {
      if (date.search("-") !== -1) return new Date(date);
      if (new Date(parseInt(date)) !== "Invalid Date") {
        return new Date(parseInt(date));
      }
    };
    const setDefaultDate = (date) => {
      return new Date(date);
    };
    const setDate = req.params.date
      ? setDateType(req.params.date)
      : setDefaultDate(req.params.date);
    const validatedDate = setDate.toString();
    if (validatedDate === "Invalid Date") throw validatedDate;

    const stringDate = setDate.toString();
    const formattedDate = stringDate.split("+")[0];

    const unixDate = setDate.getTime();
    const response = {
      unix: unixDate,
      utc: formattedDate,
    };
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};

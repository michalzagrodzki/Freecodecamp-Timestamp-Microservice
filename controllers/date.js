// display date details
exports.details = (req, res) => {
  try {
    const setDateType = (date) => {
      if (date.search("-") !== -1) return new Date(date);
      if (new Date(parseInt(date)) !== "Invalid Date") {
        return new Date(parseInt(date));
      }
    };
    const setDefaultDate = () => {
      return new Date();
    };
    const setDate = req.params.date
      ? setDateType(req.params.date)
      : setDefaultDate();
    const validatedDate = setDate.toString();
    if (validatedDate === "Invalid Date") throw validatedDate;

    const formattedDate = setDate.toGMTString();
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

// display date details
exports.details = (req, res) => {
  try {
    const setDate = req.params.date ? new Date(req.params.date) : new Date();
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

const { determineDateType, validateDate } = require("./../utils/dateMethods");

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

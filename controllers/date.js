// display date details
exports.details = (req, res) => {
  try {
    const validatedDate = new Date(req.params.date).toString();
    if (validatedDate === "Invalid Date") throw validatedDate;
    res.json({ date: new Date(req.params.date) });
  } catch (error) {
    res.json({ error: error });
  }
};

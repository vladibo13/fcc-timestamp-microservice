import asyncHandler from "../middlewares/async.middleware.js";

export const dateHandler = asyncHandler(async (req, res) => {
  const { date } = req.params;
  const newDate = new Date(date);

  if (isNaN(newDate.getTime())) {
    return res.status(400).json({ message: "Invalid Date" });
  }

  res.json({ unix: newDate.getTime(), utc: newDate.toUTCString() });
});

export const emptyHandler = asyncHandler(async (req, res) => {
  res.json({ unix: new Date().getTime(), utc: new Date().toUTCString() });
});

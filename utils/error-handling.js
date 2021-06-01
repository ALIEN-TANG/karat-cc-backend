function errorHandler(err, req, res, next) {
  console.error("ERROR STACK: ", err.stack);
  res.status(500).json({ error: { message: "Server Error", details: err } });
}

module.exports = { errorHandler };

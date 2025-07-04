const errorHandler = (err, req, res, next) => {
  console.error(err); // log interno

  res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error '
  });
  return
}

export default errorHandler;
function logErrors (err, req , res ,next ) {
  console.err(err);
  next(err);
}

function errorHandler (err, req , res  ) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  })
}

module.exports = {logErrors, errorHandler};

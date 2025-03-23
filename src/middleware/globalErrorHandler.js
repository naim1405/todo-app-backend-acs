const globalErrorHandler = (error, req, res, next) => {
  error.statusCode = error.statusCode | 500;
  error.status = error.status || "error";
  const node_env = process.env.NODE_ENV;
  if (node_env === "dev") {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
      stackTrace: error.stack,
      error: error,
    });
  } else if (node_env === "production") {
    if (error.isOperational) {
      res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message,
      });
    } else {
      res.status(500).json({
        status: "error",
        message: "Something wend wrong!",
      });
    }
  }
};
export default globalErrorHandler;

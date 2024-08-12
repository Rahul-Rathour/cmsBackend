export const handleValidationError = (message, statuscode) => {
    const error = new error(message);
    error.statusCode = statuscode;
    throw error;
};


export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        message
    });
};
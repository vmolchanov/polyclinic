const {ApiError} = require('../errors/api');

const errorMiddleware = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({
            type: 'error',
            data: {
                message: err.message,
                errors: err.errors
            }
        });
    }
    return res.status(500).json({type: 'error', data: 'Internal server error'});
};

module.exports.errorMiddleware = errorMiddleware;

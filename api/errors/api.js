class ApiError extends Error {
    constructor(status, message, errors) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static BadRequest(message, errors) {
        return new ApiError(400, message, errors);
    }

    static Unauthorized() {
        return new ApiError(401, 'User is not authorized');
    }

    static Forbidden() {
        return new ApiError(403, 'Access denied');
    }

    static NotFound() {
        return new ApiError(404, 'Not Found');
    }

    static Conflict(message, errors) {
        return new ApiError(409, message, errors);
    }

    static UnprocessableEntity(message, errors) {
        return new ApiError(422, message, errors);
    }
}

module.exports.ApiError = ApiError;

const createError = (message) => {
    return {
        error: true,
        message
    }
}

exports.createError = createError;
const validate = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validate({
                body: req.body,
                params: req.params,
                query: req.query
            });
            return next();
        } catch (error) {
            res.status(403).send({
                error: error.message
            });
        }
    }
}
export default validate;
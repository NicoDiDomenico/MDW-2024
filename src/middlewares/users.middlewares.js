export const formatMiddleware = (req, res, next) => {
    req.params.name = req.params.name.toUpperCase();
    next();
}
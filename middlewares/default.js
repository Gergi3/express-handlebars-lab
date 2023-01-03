exports.defaultMiddleware = (req, res, next) => {
    console.log('Page loaded -', req.url);
    next();
}
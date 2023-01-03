const cats = ['Puhcho', 'Freeman', 'Navcho'];

exports.catsMiddleware = (req, res, next) => {
    req.cats = cats;
    console.log('some cats page loaded');
    next();
}
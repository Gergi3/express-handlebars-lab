const express = require('express');
const { catsMiddleware } = require('../middlewares/cats');

const router = express.Router();

router.use(catsMiddleware);

router.get('/', (req, res) => {
    res.render('cats/cats', { cats: req.cats });
});

router.get('/:catName', (req, res) => {
    const cats = req.cats.filter(x => x == req.params.catName);
    const catsString = `(${cats.join(', ')})`;
    res.render('cats/cat', {
        catsString: catsString,
        catsAreFound: cats.length > 0
    })
});

router.post('/:catName', (req, res) => {
    req.cats.push(req.params.catName);
    res.end();
});

exports.catsRouter = router;
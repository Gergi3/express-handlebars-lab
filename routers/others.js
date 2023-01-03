const express = require('express');
const router = express.Router();

router.get('/redirect', (req, res) => {
    res.redirect('/cats', 302);
});

router.get(/[0-9]+/, (req, res) => {
    res.send('<h1>This page contains a number</h1>');
});

router.all('*', (req, res) => {
    res.send('<h1>ERROR 404 NOT FOUND</h1>');
})

exports.othersRouter = router;
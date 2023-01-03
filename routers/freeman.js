const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/download-freeman-img', (req, res) => {
    res.download('./public/img/freeman.jpg');
});

router.get('/show-freeman-img', (req, res) => {
    res.sendFile(path.resolve('public/img/freeman.jpg'));
});

exports.freemanRouter = router; 
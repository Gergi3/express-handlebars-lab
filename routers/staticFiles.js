const express = require('express');
const router = express.Router();

// router.use(express.static('public')); // come generally without /public in endpoint
// router.use('/static', express.static('public')); // can setup multiple paths
router.use('/public', express.static('public'));

exports.staticFilesRouter = router;
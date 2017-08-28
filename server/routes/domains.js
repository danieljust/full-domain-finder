const express = require('express');
const router = express.Router();
const models = require('../models/index');
/* GET domains listing. */
router.get('/', function (req, res) {
    models.freedomains.findAll({limit: req.query.limit})
        .then(result => res.json(result));
});

module.exports = router;

const express = require('express');
const router = express.Router();
const FilmeController = require("../controllers/FilmeController")


router.get('/', FilmeController.index)

module.exports = router;
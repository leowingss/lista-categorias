const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/CategoriaController')

router.get('/', CategoriaController.index);
router.get('/:id/filme', CategoriaController.showFilms);


module.exports = router;
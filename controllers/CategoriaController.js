const { Filme, Categoria } = require('../database/models')


const CategoriaController = {
    index: async(req, res) => {
        const categorias = await Categoria.findAll()
        return res.render('categorias', {
            categorias
        })
    }
}


module.exports = CategoriaController;
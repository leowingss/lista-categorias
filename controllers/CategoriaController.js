const { Filme, Categoria } = require('../database/models')


const CategoriaController = {
    index: async(req, res) => {
        const categorias = await Categoria.findAll()
        return res.render('categorias', {
            categorias
        })
    },
    showFilms: async(req, res) => {
        const { id } = req.params

        const categoria = await Categoria.findOne({
            where: {
                id
            },
            include: {
                model: Filme,
                as: 'filmes',
                required: true
            }
        })

        return res.render('filmesCategorias', { categoria })
    }
}



module.exports = CategoriaController;
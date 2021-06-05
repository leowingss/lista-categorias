const { Filme, Categoria } = require("../database/models")

const FilmeController = {
    index: async(req, res) => {
        const filmes = await Filme.findAll({
            include: {
                model: Categoria,
                as: 'categoria',
                require: true
            }
        })

        return res.render('filmes', { filmes })
    }
}


module.exports = FilmeController;
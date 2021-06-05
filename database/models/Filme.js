const { Sequelize } = require("sequelize/types");
const Categoria = require('./Categoria')

module.exports = (sequelize, DataType) => {
    const Filme = sequelize.define('Filme', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING,
        sinopse: DataType.STRING,
        fk_categoria: DataType.INTEGER
    }, {
        tableName: 'filmes',
        timestamps: false
    })

    Filme.associate = (model) => {
        Filme.belongsTo(model.Categoria, {
            foreignKey: 'fk_categoria',
            as: 'categoria'
        })
    }

    return Filme
}
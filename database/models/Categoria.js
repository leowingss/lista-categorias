module.exports = (sequelize, DataType) => {
    const Categoria = sequelize.define('Categoria', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataType.STRING
    }, {
        tableName: 'categorias',
        timestamps: false
    })

    Categoria.associate = (model) => {
        Categoria.hasMany(model.Filme, {
            foreignKey: 'fk_categoria',
            as: 'filmes'
        })
    }

    return Categoria
}
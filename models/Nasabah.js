module.exports = (sequelize, DataTypes) => {
    const Nasabah = sequelize.define('Nasabah', {
        accountId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'nasabah',
        timestamps: false
    })

    return Nasabah;
}
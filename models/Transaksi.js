module.exports = (sequelize, DataTypes) => {
    const Transaksi = sequelize.define('Transaksi', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true, 
          allowNull: false
        },
        accountId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        transactionDate: {
          type: DataTypes.DATE,
          allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        debitCreditStatus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        tableName: 'transaksi',
        timestamps: false
    })

    return Transaksi;
}
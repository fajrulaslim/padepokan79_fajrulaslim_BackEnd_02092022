const { Op } = require("sequelize");
const { Nasabah, Transaksi } = require('../models');
const JoinNasabah = Transaksi.belongsTo(Nasabah, { foreignKey: 'accountId', as: 'nasabah' });

const getAllNasabah = async (req, res) => {
    try {
      const nasabah = await Nasabah.findAll()

      res.status(200).json({
        status: "Success",
        message: "Success get all nasabah",
        data: nasabah
      });
    } catch (error) {
      res.status(500).json({
        status: "Error",
        message: error.message,
      });
    }
};

const getNasabahById = async (req, res) => {
  const { id } = req.params;
  try {
    const nasabah = await Nasabah.findByPk(id)

    if(!nasabah) {
      return res.status(404).json({
        status: "Failed",
        message: "Data not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get nasabah",
      data: nasabah
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const addNasabah = async (req, res) => {
  const data = req.body;  
  if(!data.name) {
    return res.status(404).json({
      status: "Failed",
      message: "Name is required",
    });
  }

  try {
    const nasabah = await Nasabah.create({
      name: data.name
    })

    res.status(201).json({
      status: "Success",
      message: "Success add nasabah",
      nasabah
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const updateNasabah = async (req, res) => {
  const data = req.body; 

  try {
    const nasabah = await Nasabah.update({ name: data.name }, {
      where: {
        accountId: data.accountId
      }
    });

    res.status(201).json({
      status: "Success",
      message: "Success update nasabah",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const deleteNasabah = async (req, res) => {
  const { id } = req.params;
  if(!id) {
    return res.status(404).json({
      status: "Failed",
      message: "Id nasabah is required",
    });
  }
  try {
    const nasabah = await Nasabah.destroy({
      where: {
        accountId: id
      }
    });

    if(!nasabah) {
      return res.status(404).json({
        status: "Failed",
        message: "Data not found",
      });
    }

    res.status(201).json({
      status: "Success",
      message: "Success delete nasabah",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const getAllTransaksi = async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll({
      include: [JoinNasabah]
    })

    res.status(200).json({
      status: "Success",
      message: "Success get all transaksi",
      data: transaksi
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const getTransaksiById = async (req, res) => {
  const { id } = req.params;

  try {
    const transaksi = await Transaksi.findOne({
      where: { id: id },
      include: [JoinNasabah]
    })

    if(!transaksi) {
      return res.status(404).json({
        status: "Failed",
        message: "Data not found",
      });
    }

    res.status(200).json({
      status: "Success",
      message: "Success get transaksi",
      data: transaksi
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const addTransaksi = async (req, res) => {
  const data = req.body;
  try {
    const transaksi = await Transaksi.create({
      accountId: data.accountId,
      transactionDate: data.transactionDate,
      description: data.description,
      debitCreditStatus: data.debitCreditStatus,
      amount: data.amount,
    })

    res.status(201).json({
      status: "Success",
      message: "Success add transaksi",
      transaksi
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const updateTransaksi = async (req, res) => {
  const data = req.body;
  try {
    const foundItem = await Transaksi.findOne({ where: { id: data.id } });
    if (!foundItem) {
        return  res.status(404).json({
          status: "Failed",
          message: "Data not found",
        });
    }

    const transaksi = await Transaksi.update({ 
      accountId: data.accountId,
      transactionDate: data.transactionDate,
      description: data.description,
      debitCreditStatus: data.debitCreditStatus,
      amount: data.amount,
     }, {
      where: {
        id: data.id
      }
    });

    res.status(201).json({
      status: "Success",
      message: "Success update transaksi",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const deleteTransaksi = async (req, res) => {
  const { id } = req.params;
  if(!id) {
    return res.status(404).json({
      status: "Failed",
      message: "Id transaksi is required",
    });
  }

  try {
    const transaksi = await Transaksi.destroy({
      where: {
        id: id
      }
    });

    if(!transaksi) {
      return res.status(404).json({
        status: "Failed",
        message: "Data not found",
      });
    }

    res.status(201).json({
      status: "Success",
      message: "Success delete transaksi",
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const getAllPointNasabah = async (req, res) => {
  try {
    const transaksi = await Transaksi.findAll({
      attributes: ['description', 'amount'],
      where: {
        [Op.or]: [
          { description: 'Beli Pulsa' },
          { description: 'Bayar Listrik' }
        ]
      },
      include: [JoinNasabah]
    });

    const newTransaksi = [];
    transaksi.map(res => {
      let hitungPoint = 0;
      if(res.description === 'Bayar Listrik') {
        if(res.amount >= 50001) {
          if(res.amount <= 100000) {
            hitungPoint = hitungPoint + ((res.amount-50000) / 2000);
          } else {
						hitungPoint = hitungPoint + (50000 / 2000);
					}
        }
        if(res.amount > 100000) {
					hitungPoint = hitungPoint + (((res.amount-100000) / 2000) * 2);	
				}
      }
      if(res.description == 'Beli Pulsa') {
				if(res.amount >= 10001) {
					if(res.amount <= 30000) {
						hitungPoint = hitungPoint + ((res.amount-10000) / 1000);
					} else {
						hitungPoint = hitungPoint + (20000 / 1000);
					}			
				}
				if(res.amount > 30000) {
					hitungPoint = hitungPoint + (((res.amount-30000) / 1000) * 2);	
				}
			}
      newTransaksi.push({
        accountId: res.nasabah.accountId,
        name: res.nasabah.name,
        description: res.description,
        amount: res.amount,
        point: hitungPoint
      })
    })

    const nasabah = await Nasabah.findAll();

    const result = [];
    nasabah.map(item => {
      let totalPoint = 0;
      newTransaksi.map(res => {
        if(item.accountId === res.accountId) {
          totalPoint += res.point
        }
      })

      result.push({
        accountId: item.accountId,
        name: item.name,
        totalPoint: totalPoint
      })
    })

    res.status(200).json({
      status: "Success",
      message: "Success get all nasabah",
      data: result
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

const getAllReport = async (req, res) => {
  const accountId = req.body.accountId;
  const startDate = req.body.startDate || '';
  const endDate = req.body.endDate || '';
  
  try {
    if(!accountId) {
      return res.status(200).json({
        status: "Success",
        message: "Success get all report",
        data: []
      });
    }
    if(!startDate) {
      return res.status(404).json({
        status: "Failed",
        message: "Start Date is required",
      });
    }
    if(!endDate) {
      return res.status(404).json({
        status: "Failed",
        message: "End Date is required",
      });
    }

    const newStartDate = new Date(startDate)
    const newEndDate = new Date(endDate)

    const transaksi = await Transaksi.findAll({
      where: {
        accountId: accountId,
        transactionDate: {
          [Op.gte]: new Date(newStartDate),
          [Op.lte]: new Date(newEndDate),
        }
      },
    })

    res.status(200).json({
      status: "Success",
      message: "Success get all report",
      data: transaksi
    });
  } catch (error) {
    res.status(500).json({
      status: "Error",
      message: error.message,
    });
  }
};

module.exports = {
    getAllNasabah,
    getNasabahById,
    addNasabah,
    updateNasabah,
    deleteNasabah,
    getAllTransaksi,
    getTransaksiById,
    addTransaksi,
    updateTransaksi,
    deleteTransaksi,
    getAllPointNasabah,
    getAllReport,
};
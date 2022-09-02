const express = require('express');
const { 
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
} = require('../controllers/Controllers')
const { 
  tugas1,
  tugas1ById,
  tugas1Add,
  tugas1Edit,
  tugas1Delete,
  tugas2,
  tugas2ById,
  tugas2Add,
  tugas2Edit,
  tugas2Delete,
  tugas3,
  tugas4,
  tugas4Filter,
} = require('../controllers/FrontendController')
const router = express.Router();

// API TUGAS 01
router.get("/nasabah", getAllNasabah);
router.get("/nasabah/:id?", getNasabahById);
router.post("/nasabah", addNasabah);
router.put("/nasabah", updateNasabah);
router.delete("/nasabah/:id?", deleteNasabah);

// API TUGAS 02
router.get("/transaksi", getAllTransaksi);
router.get("/transaksi/:id?", getTransaksiById);
router.post("/transaksi", addTransaksi);
router.put("/transaksi", updateTransaksi);
router.delete("/transaksi/:id?", deleteTransaksi);

// API TUGAS 03
router.get("/point_nasabah", getAllPointNasabah);

// API TUGAS 04
router.post("/report", getAllReport);

// FRONT END
router.get("/", tugas1);
router.get("/tugas1/:id?", tugas1ById);
router.post("/tugas1/add", tugas1Add);
router.post("/tugas1/edit", tugas1Edit);
router.get("/tugas1/delete/:id?", tugas1Delete);
router.get("/tugas2", tugas2);
router.get("/tugas2/:id?", tugas2ById);
router.post("/tugas2/add", tugas2Add);
router.post("/tugas2/edit", tugas2Edit);
router.get("/tugas2/delete/:id?", tugas2Delete);
router.get("/tugas3", tugas3);
router.get("/tugas4", tugas4);
router.post("/tugas4", tugas4Filter);

module.exports = router;
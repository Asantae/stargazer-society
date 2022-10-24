const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main");
//const { authAPI } = require("../middleware/auth");

router.get("/", mainController.getIndex);
router.get("/APOD", mainController.getApod);
router.post("/api", mainController.getKey);
router.get("/Media", mainController.getMedia);
router.get("/Mars", mainController.getMars);
router.get("/Titan", mainController.getTitan);
router.get("/Europa", mainController.getEuropa);
router.get("/Moon", mainController.getMoon);


module.exports = router;
const router = require("express").Router();
const { getProducts, addProduct } = require("../controllers/productController");
const auth = require("../middleware/authMiddleware");

router.get("/", getProducts);
router.post("/", auth, addProduct);

module.exports = router;

// productRouter.js
import express from "express";
import multer from "multer";
import { addProduct, listProduct } from "../controller/productController.js";

const productRouter = express.Router();

//image storage engine

const storage = multer.diskStorage({
    destination: 'upload', // Ensure the 'upload' folder exists
    filename: (req, file, cb) => {
     return cb(null, `${Date.now()}${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

productRouter.post("/add", upload.single('images'), addProduct);
productRouter.get("/listproduct",listProduct);

export default productRouter;

// productController.js
import productModel from "../model/productModel.js";

export const addProduct = async (req, res) => {
    try {
        // Log the received file and body
        console.log("File received:", req.file);
        console.log("Body received:", req.body);

        // Check if the file is uploaded
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        // Check if required fields are provided
        const { name, description, price, category } = req.body;
        if (!name || !description || !price || !category) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Create a new product with the uploaded image filename
        const image_filename = `${req.file.filename}`;
        const product = new productModel({
            name,
            description,
            price,
            images: image_filename,
            category
        });

        // Save the product to the database
        await product.save();

        // Respond with success
        res.status(201).json({ success: true, message: "Product added successfully" });
    } catch (error) {
        // Log the error and respond with a 500 status code
        console.error("Error adding product:", error);
        res.status(500).json({ success: false, message: "Error adding product" });
    }
};
export const listProduct=async(req,res)=>{
    try {
        const products=await productModel.find({})
        res.json({success:true,data:products})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})

    }
}
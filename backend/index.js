import express from "express";
import cors from "cors";
import { dbConnect } from "./config/config.js";
import productRouter from "./Router/productRouter.js";
import userRouter from "./Router/userRouter.js";

const app = express();
const port = 4000;
app.use(cors());
app.use(express.json());
dbConnect();

app.use("/api/product", productRouter);
app.use("/images", express.static("upload"));
app.use("/api/user",userRouter)


app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

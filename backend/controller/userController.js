import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (id) => {
  return jwt.sign({ id }, "hhdhdhhdgddggddhd");
};

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const isExist = await userModel.findOne({ email });
    if (isExist) {
      return res.json({ success: false, message: "Email already exists" });
    }
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a valid password" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const login=async(req,res)=>{
const {email,password}=req.body;
try {
    const user=await userModel.findOne({email});
    if(!user){
        return res.json({success:false, message:"Please Register first"})
    }
    const match=await bcrypt.compare(password,user.password);
    if(!match){
        return res.json({success:false, message:"password not match"})
    }
    const token=createToken(user._id)
    res.json({success:true, token})
} catch (error) {
    console.log(error);
    res.json({success:false, message:"Error"})

}

}

export { registerUser, login };

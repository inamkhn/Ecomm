import ErrorHandler from "../utils/errorHandler.js";
import User from '../models/user.js'
import { sendToken } from '../utils/sendToken.js';


export const createUser = async(req,res,next)=>{
    const {name,email,password} = req.body
    if (!name || !email || !password ) //|| !file
    return next(new ErrorHandler("Please enter all field", 400));

  let user = await User.findOne({ email });

  if (user) return next(new ErrorHandler("User Already Exist", 409));

  user = await User.create({
    name,
    email,
    password,
  });

  sendToken(res, user,"Registered Successfully", 201);
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password)
      return next(new ErrorHandler("Please enter all field", 400));
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401));
  
    const isMatch = await user.comparePassword(password);
  
    if (!isMatch)
      return next(new ErrorHandler("Incorrect Email or Password", 401));

    sendToken(res, user, `Welcome back, ${user.name}`, 200);
  };


  export const logout = async (req, res, next) => {
    res
      .status(200)
      .cookie("access_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
        success: true,
        message: "Logged Out Successfully",
      });
  };

  export const getMyProfile = async (req, res, next) => {
    const user = await User.findById(req.user._id);
  
    res.status(200).json({
      success: true,
      user,
    });
  };


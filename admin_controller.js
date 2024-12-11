import { validationResult } from "express-validator";//Form validation 
import Admin from "../Model/admin_model.js"
import bcrypt from "bcryptjs";//Password hasing encreption

export const signIn = async (request,response,next)=>{

  let {email,password} = request.body;

  let admin = await Admin.findOne({where:{email},raw: true});

  if(admin){
    let dbPassword = admin.password;
    let status = bcrypt.compareSync(password,dbPassword);
    return status ? response.status(200).json({ message: "Sign in success", admin }) : response.status(401).json({ error: "Unauthorized user" });
  }
  return response.status(401).json({error: "Unauthorized user"});
}




export const signUp = async (request,response,next)=>{
  try{  

    const errors =  validationResult(request);
    if(!errors.isEmpty())
    return response.status(401).json({error: errors.array()});
    
    let {password} = request.body;
    let saltKey =  bcrypt.genSaltSync(10);
    password =  bcrypt.hashSync(password,saltKey);
    request.body.password = password;
    let result = await Admin.create(request.body);
    return response.status(201).json({message:  "user created..."});
  }
  catch(err){
    return response.status(500).json({error: "Internal Server Error"});
  }  
}
import { tokenVerification } from "../helper/jwt.helper.js";





export const Uservalidator = (req,res,next) =>{

    try {
        let token = req.headers['authorization'].split(' ')[1];
        let isTokenValid = tokenVerification(token);
        if(isTokenValid){
           req.user=isTokenValid._id;
           next()
        }
    } catch (error) {
       return res.status(403).send("Token is not valid")
     }
     
}
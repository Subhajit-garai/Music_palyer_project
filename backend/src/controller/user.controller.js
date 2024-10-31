
import { createHashPassword, verifyHashPassword } from "../helper/hash.helper.js";
import { CreateNewToken } from "../helper/jwt.helper.js";
import { User } from "../models/user.model.js";
import { signinBody, signupBody } from "../utils/zodSchema.utils.js";



// User creation
export const createUser = async (req, res) => {

    let DataFormatIsCorrect = signupBody.safeParse(req.body);
    if (DataFormatIsCorrect.success) {
        // create user
        let isUserExist = await User.exists({ email: DataFormatIsCorrect.data.email });

        if (!isUserExist) {
            DataFormatIsCorrect.data.password = createHashPassword(6,DataFormatIsCorrect.data.password);
            console.log(DataFormatIsCorrect.data.password );
            
            let user = await User.create(DataFormatIsCorrect.data);
            // generate token
            const token = CreateNewToken(user)
            res.json({ sussess: true, token: token, message: `${req.body.firstName}  -> User created` });
        }
        else {
            res.status(409).json({ message: "User already exist" });
        }
    }
    else {
        res.status(400).json({ message: "Invalid data format" });
    }
}

// user login in 
export const userLogin = async (req, res) => {

    let isValidFormat = signinBody.safeParse(req.body);
    if (isValidFormat.success) {
        let user = await User.findOne({ email: isValidFormat.data.email });
        let pwd = isValidFormat.data.password;        

        let isuserPasswordRight = verifyHashPassword(pwd,user.password);

        if(isuserPasswordRight){
            return res.json({success:true, token: CreateNewToken(user) ,message: `${user.firstName} logged in`});
        }       
    }

    res.status(401).json({success:false});
}



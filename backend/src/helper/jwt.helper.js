import jwt from "jsonwebtoken";


export const CreateNewToken = (user) => {
    const _id = user._id;
    const token = jwt.sign({
        _id
    }, process.env.JWT_SECRET,{ expiresIn: '2d' });
    return token;
}

export const tokenVerification = (token) => {

    return jwt.verify(token, process.env.JWT_SECRET)

}
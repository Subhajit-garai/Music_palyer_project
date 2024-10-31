import bcrypt from "bcrypt"

export const createHashPassword = (salt, password) => {

    return bcrypt.hashSync(password, salt);

}
export const verifyHashPassword = (password,hashPassword) => {
   return bcrypt.compareSync(password,hashPassword)
}

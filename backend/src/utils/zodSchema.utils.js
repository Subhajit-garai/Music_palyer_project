import zod from "zod"

export const signupBody = zod.object({
    email: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})


export const signinBody = zod.object({
    email: zod.string().email(),
	password: zod.string()
})
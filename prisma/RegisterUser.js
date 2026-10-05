import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient()

export const createRegisterUserData = async (userName, fName, password) => {
    const registerUser = await prisma.register.create({
        userName: userName,
        fName: fName,
        password: password,    
    })

    return registerUser;
}

export const getRegisterUserData = async (id) => {
    const registerUser = await prisma.register.findUnique({
        where: {
            id: id
        }
    })
    return registerUser;
}

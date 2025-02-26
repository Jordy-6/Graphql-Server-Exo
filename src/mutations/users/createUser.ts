import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { hashPassword } from "../../modules/auth";
import { MutationResolvers } from "../../types";

export const createUser: MutationResolvers['createUser'] = async (__dirname, {username, password}, {dataSources}, __) => {
    try {
        const createUser = await dataSources.db.user.create({
            data: {
                username,
                password: await hashPassword(password)
            }
        })
        return {
            code: 201,
            message: 'The user has been created',
            success: true,
            user: {
                id: createUser.id,
                username: createUser.username
            }
        }
    } catch (error) {
        if(error instanceof PrismaClientKnownRequestError) {
            return {
                code: 401,
                message: error.message,
                success: false,
                user: null
            }
        }

        return {
            code: 400,
            message: (error as Error).message,
            success:false,
            user: null
        }
    }


}
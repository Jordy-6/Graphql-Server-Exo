import { comparePasswords, createJWT } from "../../modules/auth";
import { MutationResolvers } from "../../types";

export const signIn: MutationResolvers['signIn'] = async (__dirname, {username, password}, {dataSources}, __) => {
    try {
        const user = await dataSources.db.user.findFirstOrThrow({
            where: {
                username
            }
        })
    
        if(!user) {
            return {
                code: 401,
                message: 'The user does not exist',
                success: false,
                token: null
            }
        }
    
        const validPassword = await comparePasswords(password, user.password)
        if(!validPassword) {
            return {
                code: 401,
                message: 'The password is incorrect',
                success: false,
                token: null
            }
        }
    
        const token = createJWT(user)
    
        return {
          code: 200,
          message: 'user connected',     
          success: true,
          token: token 
        }
      
    }
    catch (e) {
        return {
            code: 401,
            message: (e as Error).message,
            success: false,
            token: null,
        }
    }
}
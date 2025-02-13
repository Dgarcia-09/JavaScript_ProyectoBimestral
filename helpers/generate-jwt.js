import jwt from "jsonwebtoken"

export const generateJWT = (uid = " ") => {
    return new Promise((resolve, reject) => {
        const payload = { uid }

        jwt.sign(
            payload,
            process.env.SECRETKEY,
            {
                expiresIn: "30m"
            },
            (err, token) =>{
                if(err){
                    reject({
                        success: false,
                        message: err
                    })
                }else{
                    resolve(token)
                }
            }
        )
    })
}
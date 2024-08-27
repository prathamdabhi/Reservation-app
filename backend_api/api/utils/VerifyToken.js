import jwt from 'jsonwebtoken'


export const verifyToken = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        res.send("token is not present")
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) res.send("token is not valid");

        req.user = user;
        next()
    });
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.param.id || req.user.isAdmin){
            next()
        }else{
            if(err) return res.send("You are not authorized")
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            if(err) return res.send("You are not authorized")
        }
    })
}
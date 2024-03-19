const jwt = require('jsonwebtoken')
admin_secret='my_admin_Secret_key_123490120';
user_secret='my_user_Secret_key_123490120'
module.exports.adminVerify =async (req,res,next)=>{
    const token = req.headers.authorization;

    if(!token){
        return res.status(200).json({message:'no_token'});
    }

    jwt.verify(token,admin_secret,(err,decode)=>{
        if(err){
            console.log(err);
            return res.status(200).json({message:'invalid_token'});
        }

        req.adminData = decode;
        next();
    })
}

module.exports.userVerify =async (req,res,next)=>{
    const token = req.headers.authorization;
    console.log(req.headers.authorization);
    // console.log(req.headers);

    if(!token){
        return res.status(200).json({message:'no_token'});
    }

    jwt.verify(token,user_secret,(err,decode)=>{
        if(err){
            console.log(err);
            return res.status(200).json({message:'invalid_token'});
        }

        console.log(decode);

        
        req.userData = decode;
        next();
    })
}
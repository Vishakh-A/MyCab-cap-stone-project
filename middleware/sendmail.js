const nodemailer = require('nodemailer');

const username='frnds4future@gmail.com'
const pass='jzvo zelm czpp azig'
const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{

        user:username,
        pass:pass
    }
});

module.exports.sendMail = (mailoption)=>{

    transport.sendMail(mailoption,(err,info)=>{
        if(err){
            console.log(err);
        }else{
            console.log('success');
        }
    })

}

module.exports.mailoption ={
    from:{
        name:'BookMyCab',
        address:username
    },
    to:'',
    subject:'',
    html:``
}


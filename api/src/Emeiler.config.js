const nodemailer = require("nodemailer")

<<<<<<< HEAD
function EmeilerConfig(msj, email, name) {
=======
function EmeilerConfig(msj,email, name){
>>>>>>> 64951cb6946c5f8728c280a1d772b44251a6337e
  try {
    //const {msj}=req.query
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
<<<<<<< HEAD
        user: 'helath.4U.web@gmail.com', // generated ethereal user
        pass: 'auilxcylrfjtbbvs', // generated ethereal password
      },
    });

    transporter.sendMail({
      from: '"Bienvenido ' + name + '" <helath.4U.web@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Bienvenido " + name, // Subject line
      text: msj, // plain text body
      //html: "<b>Hello world?</b>", // html body
    });
    return 'email enviado con exito'
  } catch (e) {
    console.error(e);
    return 'error email'
  }
}
module.exports = { EmeilerConfig }
=======
       user: 'helath.4U.web@gmail.com', // generated ethereal user
       pass: 'auilxcylrfjtbbvs', // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  
    transporter.sendMail({
      from: '"Bienvenido '+name+'" <helath.4U.web@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Bienvenido "+name, // Subject line
      text: msj, // plain text body
      //html: "<b>Hello world?</b>", // html body
    });
    return  'email enviado con exito'
  } catch (e) {
      console.error(e);
      return 'error email'
  }
};

module.exports={EmeilerConfig}
>>>>>>> 64951cb6946c5f8728c280a1d772b44251a6337e

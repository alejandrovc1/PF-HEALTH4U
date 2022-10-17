const nodemailer = require("nodemailer")

function EmeilerConfig(msj, email, name) {

  try {
    //const {msj}=req.query
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'helath.4U.web@gmail.com', // generated ethereal user
        pass: 'auilxcylrfjtbbvs', // generated ethereal password
      },
      tls: {
        rejectUnauthorized: false
      }
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

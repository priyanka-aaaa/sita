
import mongoose from 'mongoose';
const nodemailer = require('nodemailer')
const Joi = require('joi');
//gg
const path = require("path");
const hbs = require('nodemailer-express-handlebars');
let transport = nodemailer.createTransport({
    //start for register
    service: 'gmail',
    host: process.env.EMAIL_HOST,
    secure: process.env.EMAIL_SECURE,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
transport.use('compile', hbs({
    viewEngine: {
        extName: '.handlebars',
        defaultLayout: false,
    },
    viewPath: path.resolve(process.cwd(), './pages/api/templates/'),
    extName: '.handlebars',
}))
export default async function handler(req, res) {

    // console.log("fff",process.env.DB_URL)
    res.setHeader('Cache-Control', 's-maxage=10');
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    const studentModel = require('./models/userModel.js');
    console.log("kaise hxxxxxo")
    if (req.method == "POST") {

        try {
            var password = Math.floor(Math.random() * 900000) + 100000;
            const body = req.body;

            var student = await studentModel.findOne({ email: body.email });
            if (student) {
                return res.status(201).json({
                    success: false,
                    message: "user already exist"
                })
            }

            var date_ob = new Date();
            var currentOffset = date_ob.getTimezoneOffset();
            var ISTOffset = 330;
            var ISTTime = new Date(date_ob.getTime() + (ISTOffset + currentOffset) * 60000);
            var hoursIST = ISTTime.getHours()
            var minutesIST = ISTTime.getMinutes()
            var day = ("0" + date_ob.getDate()).slice(-2);
            var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
            var year = date_ob.getFullYear();
            var date = year + "-" + month + "-" + day;
            var dateTime = year + "-" + month + "-" + day + " " + hoursIST + ":" + minutesIST;
            student = new studentModel({
                firstname: body.firstname,
                lastname: body.lastname,

                email: body.email,
                phone: body.phone,
                password: password,
                dateOfBirth: body.dateOfBirth,

                address: body.address,


            });
            await student.save();

            try {
                var dateobj = new Date();
                var dateObject = dateobj.getFullYear();
                var mailOptions = {
                    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ID}>`,
                    to: body.email,
                    subject: 'Thank You for Registering with us',
                    template: 'userRegsiter',
                    context: {
                        userEmail: body.email,
                        password: password,
                        userName: body.name,
                        currentYear: dateObject
                    },
                };
                var temp = null
                await transport.sendMail(mailOptions, async function (err, info) {

                    if (err) {
                        return res.status(400).send({ success: false, message: "error in sending password" });
                    }
                    else {
                        try {
                            return res.status(200).send({
                                success: true, message: "user Created!"
                            });
                        }
                        catch (e) {
                            return res.status(400).send({ success: false, message: "Unable to save student" });
                        }
                    }
                });
                var dateobj = new Date();
                var dateObject = dateobj.getFullYear();

                var message2 = {
                    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ID}>`,
                    to: process.env.adminEmail,
                    subject: 'New student Registered',
                    template: 'adminUserRegister',
                    context: {
                        userEmail: body.email,
                        userName: body.firstname,
                        phone: body.phone,
                        currentYear: dateObject
                    },
                };
                await transport.sendMail(message2, async function (err, info) {
                    return res.status(201).json({
                        success: true,
                        message: "user created"
                    })
                });
            }
            catch (e) {
                return res.status(400).send({ success: false, message: "Unable to use nodemailer" });
            }
        }
        catch (e) {
            console.log("myeerrror")
            console.log(e)
            res.status(400).json({
                message: "error",
                error: e,
                success: false
            })
        }
    }
}
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();
const xss = require('xss-clean');
const cors = require('cors');


// body parse
app.use(express.json());

// sanitize
app.use(xss());


// Instantiate the SMTP server
const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
})


app.post("/sendMail", (req, res, next) => {

    console.log(req.body.name, req.body.email, req.body.message)

    // Specify what the email will look like
    const mailOpts = {
        from: `${req.body.email}`, // This is ignored by Gmail
        to: process.env.EMAIL,
        subject: 'New message!/michaelmensinger.com',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }

    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
        if (error) {
            res.send('contact-failure') // Show a page indicating failure
            console.log(error);
        }
        else {
            res.send('contact-success') // Show a page indicating success
        }
    })
})




app.use(express.static('client/build'));
if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
    });
}


const port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
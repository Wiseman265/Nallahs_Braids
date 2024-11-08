const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Remove the static files setup since you no longer need it
// app.use(express.static(path.join(__dirname, 'public')));

// Use bodyParser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define a reusable transporter for sending emails
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'wisemanprincely@gmail.com', // Replace with your email
        pass: 'ftuxuisumjdogizn'    // Replace with your email password or App Password
    }
});

// Routes to render pages
app.get('/', (req, res) => res.render('index'));
app.get('/services', (req, res) => res.render('services'));
app.get('/booking', (req, res) => res.render('booking'));
app.get('/contact', (req, res) => res.render('contact'));

// POST Route for Booking Form Submission with Email
app.post('/submit-booking', (req, res) => {
    const { name, service, date } = req.body;

    const mailOptions = {
        from: 'wisemanprincely@gmail.com',
        to: 'wisemanprincely@gmail.com', // Replace with the owner's email
        subject: 'New Booking Request',
        text: `New booking received:\nName: ${name}\nService: ${service}\nDate: ${date}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send('Failed to send booking confirmation');
        }
        console.log('Email sent successfully:', info.response);
        res.send('Booking confirmed. We will get back to you soon!');
    });
});

// POST Route for Contact Form Submission with Email
app.post('/submit-contact', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: 'wisemanprincely@gmail.com',
        to: 'wisemanprincely@gmail.com', // Replace with the owner's email
        subject: 'New Contact Form Message',
        text: `Contact message received:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email Error:', error);
            return res.status(500).send('Failed to send contact message');
        }
        console.log('Email sent:', info.response);
        res.send('Thank you for contacting us!');
    });
});

// Test Email Route
app.get('/test-email', async (req, res) => {
    try {
        const info = await transporter.sendMail({
            from: 'wisemanprincely@gmail.com',
            to: 'wisemanprincely@gmail.com', // Replace with the owner's email
            subject: 'Test Email',
            text: 'This is a test email to check if Nodemailer is working.'
        });
        console.log('Test email sent:', info.response);
        res.send('Test email sent successfully');
    } catch (error) {
        console.error('Error sending test email:', error);
        res.send('Failed to send test email');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

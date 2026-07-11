const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    // Enable CORS for preflight and standard requests
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, company, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.FOLIO_EMAIL,
            pass: process.env.FOLIO_PASSWORD,
        },
    });

    try {
        await transporter.verify();
        
        const info = await transporter.sendMail({
            from: `"${name}" <goyalgeetansh.folio@gmail.com>`, // sender address
            to: 'goyalgeetansh@gmail.com', // list of receivers
            subject: `${name} <${email}> ${
                company ? `from ${company}` : ''
            } submitted a contact form`, // Subject line
            text: `${message}`, // plain text body
        });
        
        console.log({ info });
        return res.status(200).json({ message: 'success' });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ error: e.message || 'Internal Server Error' });
    }
};

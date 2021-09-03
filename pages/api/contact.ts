import nodemailer from 'nodemailer';
export default async function handler(req, res) {
  const {name, email, message, phone} = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.APP_PASSWORD
    }
  })
  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: 'sakhawathossain7969@gmail.com',
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br />
      <p><strong>Name: </strong>${name}</p><br />
      <p><strong>Phone: </strong>${phone}</p><br />
      <p><strong>Message: </strong>${message}</p><br />
      `
    })
  } catch (err) {
    console.log(err.message);
  }

  res.status(200).json(req.body);

}

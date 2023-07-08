const nodemailer = require("nodemailer");
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const sendMail = async (subject, body, userMail) => {
  console.log(subject, userMail);
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "jigentech2021@gmail.com",
  //     pass: "eazygplmowrusuaz",
  //   },
  // });
  // let info = await transporter.sendMail({
  //   from: "MyCal.com <mycal@mail.com>",
  //   to: userMail,
  //   subject: subject,
  //   html: body,
  // });

  const mg = mailgun.client({
    username: "api",
    key: "351b3e93e35256976c3dec436a40b27f-6d8d428c-432ce782",
  });
  mg.messages
    .create("sandbox9614b0bcc1a248bd8164fbb6e20ae0cd.mailgun.org", {
      from: "Mailgun Sandbox <postmaster@sandbox9614b0bcc1a248bd8164fbb6e20ae0cd.mailgun.org>",
      to: [`${userMail}`],
      subject: subject,
      html: body,
    })
    .then((msg) => console.log(msg)) // logs response data
    .catch((err) => console.log(err)); // logs any error`;
};

module.exports = { sendMail };

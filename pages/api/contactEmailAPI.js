import sendMail from "../../lib/email/email";
import { validate } from "../../lib/helper/validator";
import validator from "validator";

let myMail = process.env.EMAIL_MY;


 export default async function test(req, res) {
  let data = req.body.data;
  data.email = validator.escape(data.email).trim();
  data.text = validator.escape(data.text).trim();

  let err = [];

  let mail = validate(data.email, "email", "Email");
  if (!mail.ok) {
    err = err.concat(mail.data);
  }
  let text = validate(data.text, "text", "Text field");

  if (!text.ok) {
    err = err.concat(text.data);
  }

  if (err.length == 0) {
    let resp = await sendMail(data);

    if (resp.accepted.length > 0) {
      res.status(200).send({ ok: true, data: "Mail was sent successfuly" });
    } else {
      res.status(200).send({ ok: false, data: "Mail not sent" });
    }
  } else {
    res.status(200).send({ ok: false, data: err });
  }
}

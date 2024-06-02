import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session/session_config";
import log_write from "../../lib/logs/LOG_write";
import sendMail from "../../lib/email/email";

let myMail = process.env.EMAIL_MY;

export default withIronSessionApiRoute(test, ironOptions);

async function test(req, res) {
  let data = req.body.data;

  let msg = `Message from www.konstantinas.com. Form Email: ${data.email}. Text: ${data.text}`;

  await sendMail(myMail, msg, (e) => {
    res.status(200).send({ ok: e.ok, data: [e.data] });
  });
}

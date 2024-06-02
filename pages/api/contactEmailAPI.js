import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session/session_config";
import log_write from "../../lib/logs/LOG_write";
import sendMail from "../../lib/email/email";

let myMail = process.env.EMAIL_MY;

export default withIronSessionApiRoute(test, ironOptions);

async function test(req, res) {
  let data = req.body.data;


    let err = [];
    setMsgError([]);
    let mail = validate(data.email, "email", "Email");
    if (!mail.ok) {
      err = err.concat(mail.data);
    }
    let text = validate(data.text, "text", "Text field");
    if (!text.ok) {
      err = err.concat(text.data);
    }

 

    if (err.length == 0) {

      let msg = `Message from www.konstantinas.com. Form Email: ${data.email}. Text: ${data.text}`;
      await sendMail(myMail, msg, (e) => {
        res.status(200).send({ ok: e.ok, data: [e.data] });
      });    
    
    } 
    else{
      res.status(200).send({ ok: false, data: err });
    }
 


 
}

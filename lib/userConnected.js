const fs = require("node:fs");

import log_write from "./logs/LOG_write";
import sendEmail from "./email/email";
export default async function userConnected(data) {
  let ip = data.data.ip;
  let filename_userRecord = "./LOG/userRecord.log";
  let sendEmailInfo = true


  if (ip !== process.env.SERVER_IP) {

    try{
    let writeStream = fs.createWriteStream(filename_userRecord, { flags: "a" });
    writeStream.write(`${ip} - ${new Date().toUTCString()}`);
    writeStream.write("\n");
    writeStream.close();
    }catch(e){
      console.log(e)
      log_write('ERROR', `Error writing userRecord log file \n| ${e.toString()}`)
    }
    if (sendEmailInfo){
      sendEmail({email:'User Connected', text:`User connected - ${ip}`})
    }
  }
}


import userConnected from "../../lib/userConnected";

import log_read from "../../lib/logs/LOG_read";
import log_write from "../../lib/logs/LOG_write";



 export default async function LoggerAPI(req, res) {
  res.status(200).send(); 
  let data = req.body;

  if (data?.type === "add") { 
    
    log_write("INFO", `[*] ${data.data.type} - ${data.data.data.ip}`);
    
    // log user that connected to server
    if (data.data.type === "connected") {
      userConnected(data.data);
    } 
  }
}

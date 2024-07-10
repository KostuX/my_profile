import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session/session_config";
import userConnected from "../../lib/userConnected";

import log_read from "../../lib/logs/LOG_read";
import log_write from "../../lib/logs/LOG_write";

export default withIronSessionApiRoute(LoggerAPI, ironOptions);

async function LoggerAPI(req, res) {
  res.status(200).send();
  let data = req.body;
  if (data?.type === "add") {
    if (data.data.type === "connected") {
      userConnected(data.data);
    } else {
      log_write("INFO", `[*] ${data.data.type} - ${data.data.data}`);
    }
  }
}

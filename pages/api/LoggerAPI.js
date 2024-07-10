import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "../../config/session/session_config";

import log_read from "../../lib/logs/LOG_read";
import log_write from "../../lib/logs/LOG_write";

export default withIronSessionApiRoute(LoggerAPI, ironOptions);

async function LoggerAPI(req, res){

    let data = req.body;
    if(data?.type === 'add'){
        log_write('INFO',`[*] ${data.data.type} - ${data.data.data}`)
        console.log(data)
    }
 
res.status(200).send()
}
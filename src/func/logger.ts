import { Logger } from '@nestjs/common';


export function actionLog(logcon, logmsg){
    setTimeout(() => {
        let logger = new Logger(logcon);
        logger.log(logmsg)
    }, 200)

}
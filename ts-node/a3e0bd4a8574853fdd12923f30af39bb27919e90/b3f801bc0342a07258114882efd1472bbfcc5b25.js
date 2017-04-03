"use strict";
function log(args) {
    if (!process.env.DISABLE_LOGS) {
        console.log.apply(this, arguments);
    }
}
exports.log = log;
//# sourceMappingURL=/root/code/mqtt-gateway/ts-node/a3e0bd4a8574853fdd12923f30af39bb27919e90/b3f801bc0342a07258114882efd1472bbfcc5b25.js.map
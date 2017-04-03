"use strict";
var logger_1 = require("../logger");
/** Creates a function that is triggered when a JWT is invalid. */
function authenticateOk(client, callback, username) {
    return function (permissions) {
        logger_1.log("AUTH OK " + username);
        client.permissions = permissions;
        callback(null, true);
    };
}
exports.authenticateOk = authenticateOk;
//# sourceMappingURL=/root/code/mqtt-gateway/ts-node/a3e0bd4a8574853fdd12923f30af39bb27919e90/feb775bb01602e252b77fe0769eb67b502a03569.js.map
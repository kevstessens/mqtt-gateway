"use strict";
var logger_1 = require("../logger");
/** Creates a function that is triggered when a JWT is invalid. */
function authenticateNo(client, callback, username) {
    return function (error) {
        logger_1.log("AUTH FAIL " + username);
        logger_1.log(error.message);
        logger_1.log(error);
        client.authError = error;
        callback(null, false);
    };
}
exports.authenticateNo = authenticateNo;
//# sourceMappingURL=/root/code/mqtt-gateway/ts-node/a3e0bd4a8574853fdd12923f30af39bb27919e90/a58b39293c06b4076913512ff183e0c4f9e612b4.js.map
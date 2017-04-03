"use strict";
// test@test.com password123
var verify_token_1 = require("../security/verify_token");
var logger_1 = require("../logger");
var authenticate_ok_1 = require("./authenticate_ok");
var authenticate_no_1 = require("./authenticate_no");
/** Determine if user is authorized to use the server. */
function authenticate(client, username, password, callback) {
    logger_1.log("AUTH START");
    var ok = authenticate_ok_1.authenticateOk(client, callback, username);
    var no = authenticate_no_1.authenticateNo(client, callback, username);
    verify_token_1.verifyToken(password.toString()).then(ok, no);
}
exports.authenticate = authenticate;
//# sourceMappingURL=/root/code/mqtt-gateway/ts-node/a3e0bd4a8574853fdd12923f30af39bb27919e90/60646856b8825e3858aa3012d398eafbb2262783.js.map
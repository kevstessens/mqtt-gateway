"use strict";
var can_use_topic_1 = require("./can_use_topic");
/** Determines if a user is allowed to listen to a particular topic. */
function authorizeSubscribe(client, topic, callback) {
    callback(null, can_use_topic_1.canUseTopic(client, topic));
}
exports.authorizeSubscribe = authorizeSubscribe;
//# sourceMappingURL=/root/code/mqtt-gateway/ts-node/a3e0bd4a8574853fdd12923f30af39bb27919e90/5f3965b34d490a703830fc107716a340630a2940.js.map
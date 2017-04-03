"use strict";
var can_use_topic_1 = require("./can_use_topic");
/** Determines if a user is allowed to publish to a particular topic. */
function authorizePublish(client, topic, payload, callback) {
    callback(null, can_use_topic_1.canUseTopic(client, topic));
}
exports.authorizePublish = authorizePublish;
//# sourceMappingURL=/root/code/mqtt-gateway/ts-node/a3e0bd4a8574853fdd12923f30af39bb27919e90/d06f04bc1c668a1ba0f7888bde87a754a7daab2f.js.map
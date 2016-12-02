let canUseTopic = require("./can_use_topic");

export default function authorizePublish(client, topic, payload, callback) {
  callback(null, canUseTopic(client, topic));
}
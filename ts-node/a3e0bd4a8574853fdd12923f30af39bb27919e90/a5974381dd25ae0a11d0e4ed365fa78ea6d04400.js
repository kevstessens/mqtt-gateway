"use strict";
var mosca_1 = require("mosca");
var config_1 = require("./config");
var on_ready_1 = require("./on_ready");
var server = new mosca_1.Server(config_1.generateConfig(process.env.SSL_DOMAIN));
server.on("ready", on_ready_1.onReady(server));
//# sourceMappingURL=/root/code/mqtt-gateway/ts-node/a3e0bd4a8574853fdd12923f30af39bb27919e90/a5974381dd25ae0a11d0e4ed365fa78ea6d04400.js.map
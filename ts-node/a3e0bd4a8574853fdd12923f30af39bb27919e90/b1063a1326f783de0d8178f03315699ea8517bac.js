"use strict";
var logger_1 = require("./logger");
exports.webAppUrl = "http://li490-180.members.linode.com";
logger_1.log("Using " + exports.webAppUrl + " as API URL");
function generateConfig(sslDomain) {
    if (sslDomain === void 0) { sslDomain = ""; }
    var SSL_DIR = "/etc/letsencrypt/live/" + sslDomain + "/";
    var config = {
        allowNonSecure: true,
        port: 1883,
        http: {
            port: 3002,
            bundle: true,
            static: "./public"
        },
        https: {
            port: 443
        },
        secure: {
            port: 8883,
            keyPath: SSL_DIR + "privkey.pem",
            certPath: SSL_DIR + "cert.pem"
        }
    };
    // Remove SSL features if SSL_DOMAIN
    // was not set.
    if (!sslDomain) {
        delete config.https;
        delete config.secure;
    }
    return config;
}
exports.generateConfig = generateConfig;
//# sourceMappingURL=/root/code/mqtt-gateway/ts-node/a3e0bd4a8574853fdd12923f30af39bb27919e90/b1063a1326f783de0d8178f03315699ea8517bac.js.map
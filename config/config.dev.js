const config = require("./config.global");

config.jwt.secretKey = "jwt-secretKey";
config.jwt.verify.maxAge = 604_800_000;

module.exports = config;

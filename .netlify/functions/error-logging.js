
var Sentry = require("@sentry/node");
var Tracing = require("@sentry/tracing");

Sentry.init({
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1.0
});

exports.handler = function (event, context) {
    var transaction = Sentry.startTransaction({
        op: "Test",
        name: "My first test transaction"
    });
    transaction.finish();

    return {
        statusCode: 201,
        body: ""
    }
};


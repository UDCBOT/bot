const AbstractMessageHandler = require('./AbstractMessageHandler');

class JQueryMessageHandler extends AbstractMessageHandler {
    constructor() {
        super(/jquery/gim);
    }

    /* eslint-disable */
    handle(message, client) {
        message.react('🤢');
    }
    /* eslint-enable */
}

module.exports = JQueryMessageHandler;

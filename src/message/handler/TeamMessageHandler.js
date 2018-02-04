const { creators } = require('../../constants');
const AbstractMessageHandler = require('./AbstractMessageHandler');

class TeamMessageHandler extends AbstractMessageHandler {
    constructor() {
        super(new RegExp(`^(${creators.join('|')})`, 'i'));
    }

    /* eslint-disable */
    handle(message, client) {
        message.channel.send(`Ja, ${message.author}, der ist ein super Typ!`);
    }
    /* eslint-enable */
}

module.exports = TeamMessageHandler;

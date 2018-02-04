(require('dotenv').config());

const discord = require('discord.js');

const client = new discord.Client();

const TeamMessageHandler = require('./src/message/handler/TeamMessageHandler');

const JQueryMessageHandler = require('./src/message/handler/JQueryMessageHandler');

const messageHandlers = [new TeamMessageHandler(), new JQueryMessageHandler()];


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    // get the first handler that can handle this message
    for (let i = 0; i < messageHandlers.length; i += 1) {
        const handler = messageHandlers[i];

        if (handler.canHandle(msg)) {
            handler.handle(msg, client);
            break;
        }
    }
});

client.login(process.env.token.toString());

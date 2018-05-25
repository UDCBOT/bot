import { Client } from 'discord.js';
import TeamMessageHandler from './message/handler/TeamMessageHandler';
import JQueryMessageHandler from './message/handler/JQueryMessageHandler';

import * as dotenv from 'dotenv';

dotenv.load();


const client = new Client;

const messageHandlers = [TeamMessageHandler, JQueryMessageHandler];


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    // get the first handler that can handle this message
    for (const handler of messageHandlers) {
        if (handler.canHandle(msg.content)) {
            const iniatedClass = new handler();
            iniatedClass.handle(msg, client);
            break;
        }
    }
});

client.login(process.env.token.toString());

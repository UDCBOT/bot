import { Client } from 'discord.js';
import TeamMessageHandler from './message/handler/TeamMessageHandler';
import JQueryMessageHandler from './message/handler/JQueryMessageHandler';
import MarkdownHelpMessageHandler from './message/handler/MarkdownHelpMessageHandler';

import * as dotenv from 'dotenv';
import GuildJoinHandler from './enter/GuildJoinHandler';
import RulesHandler from './enter/RulesHandler';

dotenv.load();

const client = new Client;

const messageHandlers = [TeamMessageHandler, JQueryMessageHandler, MarkdownHelpMessageHandler];
const instantiatedHandlers = new Map();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    // do not care about the message if the author is a bot
    if (msg.author.bot) return;

    // get the first handler that can handle this message
    for (const handler of messageHandlers) {
        if (handler.canHandle(msg.content)) {
            if (!instantiatedHandlers.has(handler.HANDLER_ID)) {
                instantiatedHandlers.set(handler.HANDLER_ID, new handler());
            }

            const handlerInstance = instantiatedHandlers.get(handler.HANDLER_ID);

            handlerInstance.handle(msg, client);
            break;
        }
    }
});

client.on('guildMemberAdd', (member) => {
    new RulesHandler(member);
    new GuildJoinHandler(member, client);
});

client.login(process.env.token.toString());

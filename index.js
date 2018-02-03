(require('dotenv').config());

const discord = require('discord.js');

const client = new discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const creators = ['Jens', 'Mic', 'Timo', 'Lukas', 'Johannes'];
const startsWithCreatorRegex = new RegExp(`^(${creators.join('|')})`, 'i');
const jqueryDetectRegex = /jquery/gim;

client.on('message', (msg) => {
    // detect messages about jquery
    if (jqueryDetectRegex.test(msg.content)) {
        // add reaction
        msg.react('🤢');
    }

    if (startsWithCreatorRegex.test(msg.content)) {
        msg.channel.send(`Ja, ${msg.author}, der ist super cool! :)`);
    }
});

client.login(process.env.token.toString());

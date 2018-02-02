(require('dotenv').config());

const discord = require('discord.js');

const client = new discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const creators = ['Jens', 'Mic', 'Timo', 'Lukas', 'Johannes'];
const startsWithCreatorRegex = new RegExp(`^(${creators.join('|')})`, 'i');

client.on('message', (msg) => {
    if (startsWithCreatorRegex.test(msg.content.toLowerCase())) {
        msg.reply('Super Tüp');
    }
});

client.login(process.env.token.toString());

(require('dotenv').config());

const discord = require('discord.js');

const client = new discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const creators = ['jens', 'mic', 'timo', 'lukas'];

client.on('message', (msg) => {
    if (creators.includes(msg.content.toLowerCase())) {
        msg.reply('Super Tüp');
    }
});

client.login(process.env.token.toString());

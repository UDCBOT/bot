const discord = require('discord.js');
const dotenv = require('dotenv');

const client = new discord.Client();
dotenv.load();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const creator = ['jens', 'mic'];

client.on('message', (msg) => {
    if (creator.includes(msg.content.toString().toLowerCase())) {
        msg.reply('Super Tüp');
    }
});

client.login(process.env.token.toString());

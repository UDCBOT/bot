const discord = require('discord.js');
const dotenv = require('dotenv');

const client = new discord.Client();
dotenv.load();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const creators = ['jens', 'mic', 'rené', 'lukas'];

client.on('message', (msg) => {
    if (creators.includes(msg.content.toLowerCase())) {
        msg.reply('Super Tüp');
    }
});

client.login(process.env.token.toString());

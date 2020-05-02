require('dotenv').config({ path: '.env' })
const botsettings = process.env;
const prefix = 'pd-'
const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core-discord');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  if (msg.content == prefix + 'play') {
      console.log(msg.member.voice.channel);
  }
});
client.login(botsettings.TOKEN);
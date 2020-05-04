require('dotenv').config({ path: '.env' })
const botsettings = process.env;
const Discord = require('discord.js');
const Commando = require('discord.js-commando');
const ytdl = require('ytdl-core-discord');
const path = require('path');
const client = new Commando.CommandoClient({owner:botsettings.OWNER_ID});
const prefix = 'pd-';

client.registry.registerCommandsIn(__dirname, 'commands');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// client.on('message', msg => {
//   if (msg.content === 'ping') {
//     msg.reply('pong');
//   }
//   if (msg.content == prefix + 'play') {
//     console.log('playing');
//     // console.log(msg.member.voice.channel);
//     if(msg.member.voice.channel) {
//       console.log('user in voice channel')
//       msg.member.voice.channel.join().then(async c => {
//         // console.log(c);
//         console.log("Reproduciendo goteo");
//         dispatcher = c.play(await ytdl("https://www.youtube.com/watch?v=AaHixdQS2jA"), {volume: 1.0,type: 'opus'});
//         dispatcher.on("error", e => {console.log(e)});
//         dispatcher.on("start", s => {console.log("start goteo")});
//         dispatcher.on("speaking", speak => {if(!speak){console.log("el duko lo hizo de nuevo")}});
//         console.log("estoy que goteo");
//       });
//     }
//   }
//   if (msg.content == prefix + 'stop') {
//     msg.guild.voice.connection.disconnect();
//   }
// });
client.login(botsettings.TOKEN);
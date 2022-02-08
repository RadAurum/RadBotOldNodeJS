require('dotenv').config({ path: '.env' });
const botsettings = process.env;
const path = require('path');
const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
let intentsArray = Object.entries(Intents.FLAGS);
let intentsBitsArray = [];
intentsArray.forEach(e => {
  intentsBitsArray.push(e[1])
})

const client = new Client({ intents: intentsBitsArray });
client.commands = new Collection();
function loadFromDirectory(directory, areCommands) {
  fs.readdirSync(directory).forEach(File => {
    const Absolute = path.join(directory, File)
    console.log(Absolute)
    if (fs.statSync(Absolute).isDirectory()) return loadFromDirectory('./' + Absolute.replace('\\', '/'), areCommands);
    const fileToRegister = require(directory + '/' + File.replace('\\', '/'));
    if (areCommands) {
      return client.commands.set(fileToRegister.data.name, fileToRegister)
    }
    if (fileToRegister.once) return client.once(fileToRegister.name, (...args) => fileToRegister.execute(...args));
    client.on(fileToRegister.name, (...args) => fileToRegister.execute(...args));
  })
}

loadFromDirectory('./events', false);
loadFromDirectory('./commands', true);

client.login(botsettings.DISCORD_BOT_TOKEN);
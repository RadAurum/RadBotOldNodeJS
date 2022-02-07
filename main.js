require('dotenv').config({ path: '.env' });
const express = require('express');
const app = express();
const botsettings = process.env;
const path = require('path');
const fs = require('fs');
const { Client, Intents, Collection } = require('discord.js');
let port = process.env.port || 3000;
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

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(port, () => {
  console.log(`Escuchando el puerto http://localhost:${port}`)
})

client.login(botsettings.TOKEN);
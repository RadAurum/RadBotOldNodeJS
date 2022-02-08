require('dotenv').config({ path: '.env' })
const botsettings = process.env;
const path = require('path');
const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const commands = [];

function loadFromDirectory(directory) {
  fs.readdirSync(directory).forEach(File => {
    const Absolute = path.join(directory, File)
    console.log(Absolute)
    if (fs.statSync(Absolute).isDirectory()) return loadFromDirectory('./' + Absolute.replace('\\', '/'));
    const fileToRegister = require(directory + '/' + File.replace('\\', '/'));
    commands.push(fileToRegister.data);
  })
}

loadFromDirectory('./commands')

const rest = new REST({ version: '9' }).setToken(botsettings.DISCORD_BOT_TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(botsettings.DISCORD_APPLICATION_ID, botsettings.DISCORD_GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

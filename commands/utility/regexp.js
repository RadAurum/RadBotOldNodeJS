const Discord = require('discord.js');

module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    console.log(message.content.match(/["]/))
}

module.exports.data = {
    module:"utility",
    hidemodule:1,
    name: "regexp"
}

module.exports.help = async (bot,message,transsv,nickcmds,db) => {
    // let embed = new Discord.RichEmbed()
    //     .setDescription(transsv.banana.help.description)
    //     .setColor(bot.color)
    // message.channel.send(embed)
}
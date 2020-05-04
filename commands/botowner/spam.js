const Discord = require('discord.js');
var inicio = new Date();
module.exports.run = async (bot, message, transsv, nickcmds, db) => {
    if (!message.author.id == bot.ownerid) return message.channel.send("Este comando solo puede ser usado por el dueño del bot")
    cantact = 0
    msgcant = Number(message.content.split(" ")[1])
    msgtospam = message.content.split(" ").slice(2).join(" ")
    i = setInterval(function () {
        if (cantact < msgcant) {
            message.channel.send(msgtospam)
            cantact++
        }
        else {
            clearInterval(i)
        }
    }, 1000 * 3)
}

module.exports.data = {
    module: "botowner",
    name: "spam"
}

module.exports.help = async (bot, message, transsv, nickcmds, db) => {
}
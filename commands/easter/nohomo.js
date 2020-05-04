const Discord = require('discord.js');

module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    message.channel.send({
        files: [{
          attachment: './nohomo.jpg',
          name: 'nohomo.jpg'
        }]
    })
}

module.exports.data = {
    module:"easter",
    hidemodule:1,
    name: "nohomo"
}

module.exports.help = async (bot, message, transsv, nickcmds, db) => {
}
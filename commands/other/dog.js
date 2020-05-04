const Discord = require('discord.js');
const randomPuppy = require('random-puppy');

module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    randomPuppy()
    .then(url => {
        console.log(url)
        message.channel.send(`Un lindo cachorro :dog: ${url}`)
    })

}

module.exports.data = {
    module:"other",
    name: "dog"
}

module.exports.help = async (bot, message, transsv, nickcmds, db) => {
}
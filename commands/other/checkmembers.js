const Discord = require('discord.js');
const Canvas = require('canvas');
const snekfetch = require('node-superfetch');
const punycode = require('punycode');
var emoji = require('node-emoji');
var fontkit = require('fontkit');
// try {
//     Canvas.registerFont ('./fonts/Apple Color Emoji.ttc', { family: 'Apple Color' })
// emojione-android.ttf
// emojione-mac.ttc
// emojione-svg.otf
// emojione-svg.woff
// emojione-svg.woff2
// } catch (err) {
//     console.log(err)
// }
module.exports.run = async (bot, message, transsv, nickcmds, db) => {
    if (message.author.id != bot.ownerid) return message.reply('comando de testeo del dueño del bot')
    console.log(message.guild.memberCount)
    console.log(message.guild.members.size)
    message.guild.fetchMembers()
        .then(gm => {
            console.log(gm.members.size)
        })
    // console.log(message.guild.members.map(m => m.name))
}

module.exports.data = {
    module: "other",
    name: "checkmembers",
    testcmd: 1
}

module.exports.help = async (bot, message, transsv, nickcmds, db) => {
    let embed = new Discord.RichEmbed()
        .setTitle(transsv.say.help.title)
        .setDescription(transsv.say.help.description)
        .addField(transsv.use, "```" + transsv.say.help.use + "```", true)
        .setFooter(transsv.helpfooter, message.author.avatarURL)
        .setColor(bot.color);
    message.channel.send(embed)
}
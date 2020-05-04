const Discord = require('discord.js');

module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    if(message.author.id === bot.ownerid){
        bot.guilds.get(message.content.split(" ")[1]).fetchInvites()
            .then(invites => console.log(invites))
            .catch(err => console.log(err))
        
    }
    else{
        message.channel.send(transsv.onlyowner)
            .then(m => {setTimeout(m.delete(),1000*5)})
    }
}

module.exports.data = {
    module: "botowner",
    name: "fetchinv"
}

module.exports.help = async (bot,message,transsv,nickcmds,db) => {
    botowner = bot.users.get(bot.ownerid)
    let embed = new Discord.RichEmbed()
        .setTitle(transsv.servers.help.title)
        .setDescription(`${transsv.servers.help.description} ${botowner.username}#${botowner.discriminator} <@${botowner.id}>`)
        .addField(transsv.forwhat,transsv.servers.help.fieldd)
        .setFooter(transsv.helpfooter,message.author.avatarURL)
        .setColor(bot.color)
    message.channel.send(embed)
}
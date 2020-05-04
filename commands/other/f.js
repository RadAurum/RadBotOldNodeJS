const Discord = require('discord.js');

module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    message.delete()
        .catch(err => {console.log(`Error al borrar mensaje del comando -f en ${message.guild.name} por: ${err}`.yellow)});
    randomhearth = Math.floor(Math.random() * (5 - 1 +1)) + 1;
    switch(randomhearth){
        case 1:
            hearth = ":heart:";
        break;
        case 2:
            hearth = ":blue_heart:";
        break;
        case 3:
            hearth = ":green_heart:";
        break;
        case 4:
            hearth = ":purple_heart:";
        break;
        case 5:
            hearth = ":yellow_heart:";
        break;
    }
    if(message.content.split(" ").slice(1) == ""){
        message.channel.send(`**${message.guild.members.get(message.author.id).displayName}**` + ` ${transsv.f.withouttext} ` + `${hearth}`);
    }
    else{
        message.channel.send(`**${message.guild.members.get(message.author.id).displayName}**` + ` ${transsv.f.withtext} ` + `**${message.content.split(" ").slice(1).join(" ")}** ${hearth}`);
    }
}

module.exports.data = {
    module: "other",
    name: "f"
}

module.exports.help = async (bot,message,transsv,nickcmds,db) => {
    let embed = new Discord.RichEmbed()
        .setTitle(transsv.f.help.title)
        .setDescription(transsv.f.help.description)
        .addField(transsv.use,"```"+transsv.f.help.use+"```",true)
        .setFooter(transsv.helpfooter,message.author.avatarURL)
        .setColor(bot.color);
    message.channel.send(embed)
}
const Discord = require('discord.js');
var inicio = new Date();
var cpus = require('cpus')
module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    try{
    developer = bot.users.get(bot.ownerid);
        actual = new Date();
        startdev = new Date(2018,04,30,18,20,42);
        timedevdiferences = actual - startdev
        segundosdev = Math.floor(timedevdiferences/1000)
        minutosdev = Math.floor(segundosdev/60)
        horasdev = Math.floor(minutosdev/60)
        diasdev = Math.floor(horasdev/24)
        timedev = [Math.floor(diasdev),"dias",Math.floor(horasdev-(24*diasdev)),"horas",Math.floor(minutosdev-(60*horasdev)),"minutos",Math.floor(segundosdev-(60*minutosdev)),"segundos"]
        tiempodiferencias = actual-inicio
        segundos = Math.floor(tiempodiferencias/1000)
        minutos = Math.floor(segundos/60)
        horas = Math.floor(minutos/60)
        dias = Math.floor(horas/24)
        timeonline = [Math.floor(dias),"dias",Math.floor(horas-(24*dias)),"horas",Math.floor(minutos-(60*horas)),"minutos",Math.floor(segundos-(60*minutos)),"segundos"]
        developer = bot.users.get(bot.ownerid);
        let embed = new Discord.RichEmbed()
            .setTitle(`${transsv.info.infoof} ${bot.user.username}`)
            .setAuthor(`${developer.username}#${developer.discriminator}`,developer.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setDescription(`${transsv.info.tisbotiscreatedby} <@${developer.id}>\n${transsv.info.withthepurpouse}`)
            .addField(transsv.info.indevelopment,"```"+"js\n"+timedev.join(" ")+"```",false)
            .addField(transsv.info.imalivethanks,'```js\n'+cpus()[0].model+'```')
            .addField(transsv.info.timeonline,"```"+"js\n"+timeonline.join(" ")+"```",false)
            .setFooter(`PantsuBot v${bot.ver}`,bot.user.avatarURL)
            .setColor(bot.color);
        message.channel.send(embed);
    }
    catch(err){
        console.log(err)
    }
}

module.exports.data = {
    module: "bot",
    name: "info"
}

module.exports.help = async (bot,message,transsv,nickcmds,db) => {
    let embed = new Discord.RichEmbed()
        .setTitle(transsv.info.help.title)
        .setDescription(transsv.info.help.description)
        .setFooter(transsv.helpfooter,message.author.avatarURL)
        .setColor(bot.color);
    message.channel.send(embed)
}
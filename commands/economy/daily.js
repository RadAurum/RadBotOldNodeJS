const Discord = require('discord.js');
var colors = require('colors')
module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    if(message.author.id !== bot.ownerid) return message.reply("comando en construcción")
    userexists = db.prepare(`SELECT count(*) FROM profiles WHERE id = ${message.author.id};`).get();
    if (!userexists['count(*)']) {
        bot.globalfunctions.get("registeruser").run(bot, message, db, false, message.author.id);
    }
    userrow = db.prepare(`SELECT * FROM profiles WHERE id = ${message.author.id};`).get();
    newobject = JSON.parse(userrow.economy);
    newobject.streak = newobject.streak + 1;
    newobject.pantsucoins = newobject.pantsucoins + 100

    if(!streak % 3){
        newobject.pantsucoins = newobject.pantsucoins + 300 
    }
    if(!streak % 5){
        newobject.pantsucoins = newobject.pantsucoins + 500
    }


}

module.exports.data = {
    module:"economy",
    name: "daily"
}

module.exports.help = async (bot,message,transsv,nickcmds,db) => {
    let embed = new Discord.RichEmbed ()
        .setTitle("Comando diario")
        .setDescription(`Reclama tu botin diario de pantsucoins\nCada dia recibiras la cantidad de 100 pantsucoins\nCada 3 dias recibiras un bono adicional de 300 pantsucoins aparte de la cantidad diaria`)
        .addField("Uso","```"+"-daily"+"```",true)
        .setFooter("Botin diario",message.author.avatarURL)
        .setColor(0xff68f9);
    message.channel.send(embed)
}
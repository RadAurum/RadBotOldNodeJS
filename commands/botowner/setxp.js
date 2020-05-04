const Discord = require('discord.js');
var inicio = new Date();
module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    if(message.author.id == bot.ownerid){
        con.query(`SELECT * FROM profiles WHERE user_id = ${message.mentions.users.first().id}`,(err,row) => {
            con.query(`UPDATE profiles SET user_xp = ${message.content.split(" ")[2]} WHERE user_id = ${message.mentions.users.first().id}`)
            message.channel.send(`Se ha puesto la experiencia de <@${message.mentions.users.first().id}> a ${message.content.split(" ")[2]}`)
        });
    }
    else{
        message.channel.send("Este comando solo puede ser usado por el dueño del bot")
            .then(m => {setTimeout(m.delete(),1000*5)})
    }
}

module.exports.data = {
    module:"botowner",
    name: "setxp"
}

module.exports.help = async (bot, message, transsv, nickcmds, db) => {
}
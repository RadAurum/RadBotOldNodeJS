const Discord = require('discord.js');
var inicio = new Date();
module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    if(message.author.id == bot.ownerid){
        if(message.mentions.users.first()){
            if(message.content.split(" ")[2]){
                con.query(`SELECT * FROM profiles WHERE user_id = ${message.mentions.users.first().id}`,(err,row) => {
                    con.query(`UPDATE profiles SET pantsucoins = ${message.content.split(" ")[2]} WHERE user_id = ${message.mentions.users.first().id}`)
                    message.channel.send(`${transsv.lvluser.lvlset} <@${message.mentions.users.first().id}> ${transsv.to} ${message.content.split(" ")[2]}`)
                });
            }
            else{
                message.channel.send(transsv.setlvl.nolvl)
            }
        }
        else if(Number.isInteger(Number(message.content.split(" ")[1])) && message.content.split(" ")[1].length == 18){
            bot.fetchUser(message.content.split(" ")[1])
                .then(u => { 
                    if(message.content.split(" ")[2]){
                        con.query(`SELECT * FROM profiles WHERE user_id = ${u.id}`,(err,row) => {
                            con.query(`UPDATE profiles SET pantsucoins = ${message.content.split(" ")[2]} WHERE user_id = ${u.id}`)
                            message.channel.send(`${transsv.lvluser.lvlset} <@${u.id}> ${transsv.to} ${message.content.split(" ")[2]}`)
                        });
                    }
                    else{
                        message.channel.send(transsv.setlvl.nolvl)
                    }
                })
                .catch(err => {
                    console.log(err)
                    if(err.message == "Unknown User"){
                        message.channel.send(transsv.setlvl.nouser)
                    }
                })
        }
    }
    else{
        message.channel.send(transsv.onlyowner)
            .then(m => {setTimeout(m.delete(),1000*5)})
    }
}

module.exports.data = {
    module: "botowner",
    name: "setpantsucoins"
}

module.exports.help = async (bot,message,transsv,nickcmds,db) => {
    botowner = bot.users.get(bot.ownerid)
    let embed = new Discord.RichEmbed ()
        .setTitle(transsv.setlvl.help.title)
        .setDescription(`${transsv.servers.help.description} ${botowner.username}#${botowner.discriminator} <@${botowner.id}>`)
        .addField(transsv.use,"```"+transsv.servers.help.use+"```",true)
        .addField(transsv.servers.help.before,transsv.servers.help.btext)
        .setFooter(transsv.helpfooter,message.author.avatarURL)
        .setColor(bot.color);
    message.channel.send(embed)
}

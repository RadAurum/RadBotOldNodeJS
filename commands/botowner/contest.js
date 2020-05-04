const Discord = require('discord.js');
var inicio = new Date();
module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    if(message.author.id == bot.ownerid){
        con.query(`SELECT * FROM ${message.guild.id}_guild_channels`,(err,row) => {
            if(err){
                console.log(err.sqlMessage)
                console.log(err.sqlMessage.split(" ")[0] + " " + err.sqlMessage.split(" ").slice(2).join(" "));
                if(err.sqlMessage.split(" ")[0] + " " + err.sqlMessage.split(" ").slice(2).join(" ") == "Table doesn't exist"){
                    con.query(`CREATE TABLE ${message.guild.id}_guild_channels (` + "channel_id " + `VARCHAR(18) NOT NULL,` + " lang " + `TEXT NOT NULL,` + " drop_prob " + `INT(3) NOT NULL)`,(err,rows) => {
                        if(err)return console.log(err.sqlMessage)
                        for(i=0;i<message.guild.channels.map(c => c.id).length;i++){
                            con.query(`INSERT INTO ${message.guild.id}_guild_channels (channel_id, lang, drop_prob) VALUES ("${message.guild.channels.map(c => c.id)[i]}", "DEFAULT", "0")`,(err,rowss) => {
                                if(err)return console.log(err.sqlMessage)
                            })
                            console.log(message.guild.channels.map(c => c.id)[i])
                        }
                    })
                }
                return;
            }
            console.log(row)
        });
    }
    else{
        message.channel.send(transsv.onlyowner)
            .then(m => {setTimeout(m.delete(),1000*5)})
    }
}

module.exports.data = {
    module: "botowner",
    name: "contest"
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
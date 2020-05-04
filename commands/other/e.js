const Discord = require('discord.js');
const https = require('https');

module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    try{
    if(message.content.split(" ")[1] != null){
        var status = 0
        emoteurlpng = `https://cdn.discordapp.com/emojis/${message.content.split(" ")[1].split(":")[2].replace(">","")}.png`
        emoteurlgif = `https://cdn.discordapp.com/emojis/${message.content.split(" ")[1].split(":")[2].replace(">","")}.gif`
        // console.log(message.content.split(" ")[1].split(":")[2].split(">")[0])
        console.log(message.content)
        https.get(emoteurlgif, (res) =>{
            avatarurlmod = 0
            console.log(message.author.avatarURL)
            if(message.author.avatarURL.includes("gif")){
                avatarurlmod = message.author.avatarURL.replace("gif","png")
            }
            else{
                avatarurlmod = message.author.avatarURL
            }
            // console.log(res.statusCode)
            status = res.statusCode
            if (status == 200){
                let embed = new Discord.RichEmbed()
                    .setAuthor(message.member.displayName,avatarurlmod)
                    .setImage(emoteurlgif)
                    .setColor(bot.color);
                message.channel.send(embed)
                message.delete()
                    .catch(err => {
                        console.log(err)
                    })
            }
            if (status == 415){
                let embed = new Discord.RichEmbed()
                    .setAuthor(message.member.displayName,avatarurlmod)
                    .setImage(emoteurlpng)
                    .setColor(bot.color);
                message.channel.send(embed)
                message.delete()
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
    }
    }
    catch(err){
        console.log(err)
    }
}

module.exports.data = {
    module:"other",
    name: "e"
}

module.exports.help = async (bot, message, transsv, nickcmds, db) => {
}
const Discord = require('discord.js');
const booru = require('booru');

module.exports.run = async (bot,message,transsv,nickcmds,db) => {
    if(message.channel.nsfw) return message.channel.send(transsv.nsfwact)
    animated = Math.floor(Math.random() * (1 - 0 +1)) + 0;
    var booruimage = "idk";
    if(animated){
        booru.search("gb",["yuri","kiss","animated"],{limit: 1, random: true})
        .then(booru.commonfy)
            .then(images => {
                for (let image of images) {
                    booruimage = images;
                }
            })
            .catch(err => {
                if (err.name === 'BooruError') {
                    console.log(err.message)
                    if(err.message == "You didn't give any images"){
                    }
                } 
                else {
                    console.log(err)
                }
            })
    }
    else{
        booru.search("gb",["yuri","kiss"],{limit: 1, random: true})
        .then(booru.commonfy)
            .then(images => {
                for (let image of images) {
                    booruimage = image;
                }
            })
            .catch(err => {
                if (err.name === 'BooruError') {
                    console.log(err.message)
                    if(err.message == "You didn't give any images"){
                    }
                } 
                else {
                    console.log(err)
                }
            })
    }
    message.delete()
        .catch(err => {
            console.log(err)
        });
    if(!message.content.split(" ")[1]){
        let embed = new Discord.RichEmbed()
            .setDescription(`${transsv.kiss.nope1} <@${message.author.id}>, ${transsv.kiss.nope2}`)
            .setColor(bot.color);
        message.channel.send(embed);
    }
    else{
        if(message.mentions.users.first()){
            if(message.author.id != message.mentions.users.first().id){
                let embed = new Discord.RichEmbed()
                    .setDescription(`<@${message.author.id}> ${transsv.kiss.kissedto} <@${message.mentions.users.first().id}>`)
                    .setImage(booruimage)
                    .setColor(bot.color);
                message.channel.send(embed);
            }
            else{
                let embed = new Discord.RichEmbed()
                    .setDescription(`${transsv.slap.automen} <@${message.author.id}>`)
                    .setColor(bot.color);
                message.channel.send(embed);
            }
        }
        else{
            if(Number.isInteger(Number(message.content.split(" ")[1])) && message.content.split(" ")[1].length == 18){
                if(message.content.split(" ")[1] != message.author.id){
                    bot.fetchUser(message.content.split(" ")[1])
                        .then(u => {
                            let embed = new Discord.RichEmbed()
                                .setDescription(`<@${message.author.id}> ${transsv.kiss.kissedto} <@${u.id}>`)
                                .setImage(booruimage)
                                .setColor(bot.color);
                            message.channel.send(embed);
                        })
                        .catch(e => {
                            console.log("Usuario no encontrado")
                           let embed = new Discord.RichEmbed()
                                .setDescription(transsv.nani)
                                .setColor(bot.color);
                            message.channel.send(embed)
                        })
                }
                else{
                    let embed = new Discord.RichEmbed()
                            .setDescription(`${transsv.kiss.autoid} <@${message.author.id}>`)
                            .setColor(bot.color);
                        message.channel.send(embed);
                }
            }
            else{
                let embed = new Discord.RichEmbed()
                    .setDescription(`<@${message.author.id}> ${transsv.kiss.kiss} **${message.content.split(" ").slice(1).join(" ")}**`)
                    .setImage(booruimage)
                    .setColor(bot.color);
                message.channel.send(embed);
            }
        }
    }
}

module.exports.data = {
    module:"actionsnsfw",
    name: "ykiss"
}

module.exports.help = async (bot,message,transsv,nickcmds,db) => {
    if(message.author.avatarURL.includes("gif")){
        avatarurlmod = message.author.avatarURL.replace("gif","png")
    }
    else{
        avatarurlmod = message.author.avatarURL
    }
    let embed = new Discord.RichEmbed ()
        .setTitle(transsv.kiss.help.title)
        .setDescription(transsv.slap.help.description)
        .addField(transsv.use,"```"+ transsv.kiss.help.use +"```")
        .setFooter(transsv.helpfooter,message.avatarurlmod)
        .setColor(bot.color);
    message.channel.send(embed)
}
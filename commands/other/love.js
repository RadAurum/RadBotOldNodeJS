const Discord = require('discord.js');
const Canvas = require('canvas');
const snekfetch = require('node-superfetch');
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
    var rgbtext = "rgb(0, 255, 249)"
    if (!bot.canvascontrollers['love']) {
        bot.canvascontrollers['love'] = {};
    }
    if (bot.canvascontrollers.love[`guild${message.guild.id}`]) return message.reply('ahora mismo estoy ocupado');
    else bot.canvascontrollers.love[`guild${message.guild.id}`] = 1;
    const font = fontkit.openSync('./fonts/emojione-mac.ttc').fonts[0];
    message.channel.startTyping();
    var loveporcent = Math.floor(Math.random() * 100);
    probabilityofnegative = Math.floor(Math.random() * 10);
    if (probabilityofnegative == 10) {
        loveporcent = -1;
    }
    console.log()
    if (message.mentions.channels.size) {
        const canvas = Canvas.createCanvas(750, 250);
        const ctx = canvas.getContext('2d');
        const { body: a } = await snekfetch.get(message.author.avatarURL);

        const avatar1 = await Canvas.loadImage(a);
        const background = await Canvas.loadImage('./assets/love/wavebackground.png')

        ycalc = Math.ceil(-(90 * (loveporcent / 100)) + (245 - (245 * (loveporcent / 100))));
        randomx = Math.floor(Math.random() * 150);

        ctx.drawImage(background, randomx, ycalc, 900, 400);
        ctx.drawImage(avatar1, 10, 10, 230, 230);

        ctx.font = '60px Arial';
        ctx.fillStyle = rgbtext;
        ctx.fillText(`#${message.mentions.channels.map(c => c.name)[0]}`, 500, 140, 230);

        message.reply("por que quieres ver que tan compatible eres con un canal?")
            .then(async ms => {
                setTimeout(async function () {
                    ms.edit(ms.content.split(" ")[0] + " da igual, de todas formas lo haré")
                        .then(async mse => {
                            setTimeout(async function () {
                                attachsend(bot, canvas, null, null, loveporcent, message)
                            }, 5 * 1000);
                        })
                }, 5 * 1000);
            })
    } else if (message.mentions.roles.size) {
        const canvas = Canvas.createCanvas(750, 250);
        const ctx = canvas.getContext('2d');
        const { body: a } = await snekfetch.get(message.author.avatarURL);

        const avatar1 = await Canvas.loadImage(a);
        const background = await Canvas.loadImage('./assets/love/wavebackground.png')

        ycalc = Math.ceil(-(90 * (loveporcent / 100)) + (245 - (245 * (loveporcent / 100))));
        randomx = Math.floor(Math.random() * (0 - 150 + 1) + 0);

        ctx.drawImage(background, randomx, ycalc, 900, 400);
        ctx.drawImage(avatar1, 10, 10, 230, 230);

        ctx.font = '60px Arial';
        ctx.fillStyle = rgbtext;
        ctx.fillText(`@${message.mentions.roles.map(r => r.name)[0]}`, 500, 140, 230);

        message.reply("por que quieres ver que tan compatible eres con un rol?")
            .then(async ms => {
                setTimeout(async function () {
                    ms.edit(ms.content.split(" ")[0] + " da igual, de todas formas lo haré")
                        .then(async mse => {
                            setTimeout(async function () {
                                attachsend(bot, canvas, null, null, loveporcent, message)
                            }, 5 * 1000);
                        })
                }, 5 * 1000);
            })
    } else if (message.mentions.users.size) {
        const canvas = Canvas.createCanvas(750, 250);
        const ctx = canvas.getContext('2d');
        const { body: avatar1url } = await snekfetch.get(message.author.avatarURL);
        const { body: avatar2url } = await snekfetch.get(message.mentions.users.array()[0].avatarURL);

        const avatar1 = await Canvas.loadImage(avatar1url);
        const avatar2 = await Canvas.loadImage(avatar2url);

        const background = await Canvas.loadImage('./assets/love/wavebackground.png')

        ycalc = Math.ceil(-(90 * (loveporcent / 100)) + (245 - (245 * (loveporcent / 100))));
        randomx = Math.floor(Math.random() * (0 - 150 + 1) + 0);

        ctx.drawImage(background, randomx, ycalc, 900, 400);
        ctx.drawImage(avatar1, 10, 10, 230, 230);
        ctx.drawImage(avatar2, 510, 10, 230, 230);

        // ctx.font = '60px Arial';
        // ctx.fillStyle = rgbtext;
        // ctx.fillText(`@${message.mentions.roles.map(r => r.name)[0]}`, 500, 140, 230);

        attachsend(bot, canvas, null, null, loveporcent, message)
    }
    // else if (message.mentions.users.size) {
    //     const canvas = Canvas.createCanvas(750, 250);
    //     const ctx = canvas.getContext('2d');
    //     const { body: a } = await snekfetch.get(message.author.avatarURL);

    //     const avatar1 = await Canvas.loadImage(a);
    //     const background = await Canvas.loadImage('./assets/love/wavebackground.png')

    //     ycalc = Math.ceil(-(90 * (loveporcent / 100)) + (245 - (245 * (loveporcent / 100))));
    //     randomx = Math.floor(Math.random() * (0 - 150 + 1) + 0);

    //     ctx.drawImage(background, randomx, ycalc, 900, 400);
    //     ctx.drawImage(avatar1, 10, 10, 230, 230);

    //     ctx.font = '60px Arial';
    //     ctx.fillStyle = rgbtext;
    //     ctx.fillText(`@${message.mentions.members.map(r => r.name)[0]}`, 500, 140, 230);

    //     message.reply("por que quieres ver que tan compatible eres con un rol?")
    //         .then(async ms => {
    //             setTimeout(async function () {
    //                 ms.edit(ms.content.split(" ")[0] + " da igual, de todas formas lo hare")
    //                     .then(async mse => {
    //                         setTimeout(async function () {
    //                             attachsend(bot, canvas, null, null, loveporcent, message)
    //                         }, 5 * 1000);
    //                     })
    //             }, 5 * 1000);
    //         })
    // }
    else {

        message.channel.stopTyping()
        delete bot.canvascontrollers.love[`guild${message.guild.id}`]
    }
    console.log(message.mentions.channels)
    console.log(message.mentions.users)
    console.log(message.mentions.roles)
    // console.log(message.mentions.channels)
    console.log(message.mentions.members)
    // console.log(message.mentions)
    console.log(message.content.split(" ")[1])
    // console.log(message.mentions.USERS_PATTERN)


    console.log(loveporcent);

    // if(message.author.id != bot.ownerid) return message.reply("comando de testeo");

    // console.log(font)
    // console.log("iniciando canvas")
    // let emo = emoji.get('coffee');
    // console.log(emo)
    // let glyphs = font.glyphsForString(emo)
    // console.log(glyphs)
    // let finish = glyphs[0].getImageForSize(64);
    // console.log(finish)
    // const canvas = Canvas.createCanvas(750, 250);
    // const ctx = canvas.getContext('2d');
    // console.log('canvas and context created')
    // const background = await Canvas.loadImage('./assets/love/wavebackground.png')
    // console.log('background loaded')

    // ctx.fillStyle = "rgb(15, 43, 151)";
    // ctx.fillRect(0, 0, 250, 250);

    // const { body: a } = await snekfetch.get(message.author.avatarURL);
    // console.log(a)
    // console.log('loading avatar')
    // const avatar = await Canvas.loadImage(a);
    // console.log(avatar)
    // console.log('avatar loaded')
    // console.log('loading glyph')
    // console.log(glyph)
    // console.log(glyph.data)
    // var glyphdata = glyph
    // console.log(glyphdata)
    // try{
    //     var gly = await Canvas.loadImage(finish.data);
    //     console.log(gly)
    //     glyph.render(ctx,12)
    // }
    // catch(err){console.log(err)}
    // console.log('glyph loaded')
    // loveporcent = 75;
    // ycalc = Math.ceil(-(90 * (loveporcent / 100)) + (245 - (245 * (loveporcent / 100))));
    // console.log(ycalc)
    // randomx = Math.floor(Math.random() * (0 - 150 + 1) + 0);
    // // console.log(randomx)
    // ctx.drawImage(background, randomx, ycalc, 900, 400)
    // console.log('background drawed')

    // console.log('drawing avatar')

    // ctx.drawImage(avatar, 10, 10, 230, 230)

    // console.log('avatar drawed')
    // console.log('drawing emoji')
    // try {
    //     ctx.drawImage(gly, 30, 30, 100, 100)
    // } catch (err) {
    //     console.log(err)
    // }
    // console.log('emoji drawed')
    // glyph.render(ctx,12)

    // ctx.font = '20px Arial';
    // ctx.fillStyle = "rgb(255, 255, 255)";
    // ctx.fillText(`${message.content.split(" ").slice(1).join(" ")}`, 20, 200);
    // ctx.font = '20px "Apple Color"';
    // console.log('apple font')
    // ctx.fillText(`${message.content.split(" ").slice(1)}`, 125, 125);
    // console.log('apple font complete')

}

async function attachsend(bot, canvas, pharase1, pharase2, loveporcent, message) {
    const attach = new Discord.Attachment(canvas.toBuffer(), 'lovecommand.png');

    message.channel.send(`${loveporcent}`, { files: [attach] })
        .then(m => {
            message.channel.stopTyping()
            delete bot.canvascontrollers.love[`guild${message.guild.id}`]
        });
}

module.exports.data = {
    module: "other",
    name: "love",
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
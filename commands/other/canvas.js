const Discord = require('discord.js');
const Canvas = require('canvas');
const snekfetch = require('node-superfetch');
const punycode = require('punycode');
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
    if (!bot.canvascontrollers['canvas']) {
        bot.canvascontrollers['canvas'] = {};
    }
    if (bot.canvascontrollers.canvas[`guild${message.guild.id}`]) return message.reply('ahora mismo estoy ocupado');
    else bot.canvascontrollers.canvas[`guild${message.guild.id}`] = 1;
    // message.channel.startTyping();
    // if(message.author.id != bot.ownerid) return message.reply("comando de testeo");
    const font = fontkit.openSync('./fonts/emojione-mac.ttc').fonts[0];
    // console.log(font)
    // console.log("iniciando canvas")
    let emo = emoji.get('heart');
    // console.log(emo)
    let glyphs = font.glyphsForString(emo)
    // console.log(glyphs)
    let finish = glyphs[0].getImageForSize(230);
    // console.log(finish)
    const canvas = Canvas.createCanvas(250, 250);
    const ctx = canvas.getContext('2d');
    const { body: a } = await snekfetch.get(message.author.avatarURL);
    console.log(a)
    console.log('loading avatar')
    const avatar = await Canvas.loadImage(a);
    var gly = await Canvas.loadImage(finish.data);
    ctx.drawImage(avatar, 10, 10, 230, 230)
    ctx.globalCompositeOperation = 'destination-in'
    

    ctx.beginPath();
    ctx.moveTo(125, 40);
    ctx.bezierCurveTo(175, -35, 355, 50, 125, 240);
    ctx.bezierCurveTo(-105, 50, 75, -35, 125, 40);
    ctx.fill();
    ctx.closePath();

    // ctx.drawImage(gly, 10, 10, 230, 230)

    // ctx.fillStyle = "rgb(15, 43, 151)";
    // ctx.fillRect(0, 0, 250, 250);


    // console.log(avatar)
    // console.log('avatar loaded')
    // console.log('loading glyph')
    // console.log(glyph)
    // console.log(glyph.data)
    // var glyphdata = glyph
    // console.log(glyphdata)
    // try{
    //     
    //     console.log(gly)
    //     // glyph.render(ctx,12)
    // }
    // catch(err){console.log(err)}
    // console.log('glyph loaded')
    // console.log('drawing avatar')

    // console.log('avatar drawed')
    // console.log('drawing emoji')
    // try {
    //     
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


    const attach = new Discord.Attachment(canvas.toBuffer(), 'avatar.png');

    message.channel.send(attach)
        .then(m => {
            message.channel.stopTyping()
            delete bot.canvascontrollers.canvas[`guild${message.guild.id}`]
        });
}

module.exports.data = {
    module: "other",
    name: "canvas",
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
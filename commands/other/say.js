const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Repeat the message')
        .addStringOption((option) =>
            option
                .setName('text')
                .setDescription('Text to repeat')
                .setRequired(true)
        ),
    help: "",
    async execute(data) {
        let stringArr;
        let string;
        if (data.content !== undefined) {
            stringArr = data.content.split(" ");
            stringArr.shift();
            console.log(stringArr.length)
            if (stringArr.length == 0) {
                return await data.reply('No puedo mandar mensajes vacios')
                    .then(async r => {
                        setTimeout(async () => {
                            await r.delete().catch(e => { });
                        }, 2000)
                    })
                    .catch(e => { })
            }
            string = stringArr.join(" ");
        }
        if (data.interaction === undefined) {
            string = data.options.getString('text')
            await data.reply(data.options.getString('text')).catch(e => { });
            await data.deleteReply().catch(e => { });
        } else {
            data.delete().catch(e => { });
        }
        await data.channel.send(string).catch(async e => {
            let user = data.author !== undefined ? data.author : data.user
            await user.createDM()
                .then(dm => {
                    dm.send(`No puedo mandar mensajes en el canal #${data.channel.name} en el servidor ${data.guild.name}`).catch(e => { })
                })
                .catch(e => { })
        });
    },
};
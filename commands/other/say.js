const { Command } = require('discord.js-commando');

module.exports = class Say extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: ['parrot', 'copy'],
            group: 'other',
            memberName: 'say',
            description: 'Replies with the author message',
            args: [
                {
                    key: 'text',
                    prompt: 'What text would you like the bot to say?',
                    type: 'string',
                    default: '',
                },
            ],
            clientPermissions: ['SEND_MESSAGES'],
        });
    }

    run(message, { text }) {
        if (!text) return message.say('No pudo enviar un mensaje vacio');
        return message.channel.send(text);
    }

    onBlock(message, reason, Data) {
        if (reason == 'clientPermissions') {
            if (Data.missing[0] == 'SEND_MESSAGES') {
                message.react('🗣️')
                    .then(r => {
                        message.react('🚫');
                    })
                    .catch(perm => {
                        message.author.send('Para usar este comando necesto permiso para hablar en el canal/servidor')
                            .catch(err => {
                                message.guild.fetch().
                                    then(guild => {
                                        console.log(guild.channels.cache.map(ch => ch.name)) 
                                    })
                                    
                                // message.guild.fetch.channels.cache().sort((channelA, channelB) => channelA.position)
                            });
                    })
        }
    }
    // console.log(Data);
}
};
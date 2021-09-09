require('dotenv').config({ path: '../../.env' })
const botsettings = process.env;
module.exports = {
	name: 'messageCreate',
	async execute(message) {
        console.log(message.interaction)
		if (message.interaction !== null) return;
		if (!message.content.startsWith(botsettings.PREFIX)) return;

		const commandName = message.content.split(" ")[0].replace(botsettings.PREFIX, '')

		const command = message.client.commands.get(commandName)

		if (!command) return;

		console.log('command execute')

		try {
			await command.execute(message);
		} catch (error) {
			console.error(error);
			await message.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}

		// if (message.author.id == botsettings.OWNER_ID) {
		// 	console.log(message);
		// 	console.log(message.client);
		// }
	},
};
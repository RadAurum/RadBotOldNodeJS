require('dotenv').config({ path: '../../.env' })
const botsettings = process.env;
module.exports = {
	name: 'presenceUpdate',
	async execute(oldPrecense, newPrecense) {
		if (newPrecense.member.id !== botsettings.OWNER_ID) return
		if (newPrecense.guild.id !== botsettings.GUILD_ID) return
        console.log(oldPrecense)
        console.log(newPrecense)
		console.log(newPrecense.activities[0].assets)
	},
};
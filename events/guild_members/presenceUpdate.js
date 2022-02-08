require('dotenv').config({ path: '../../.env' })
const botsettings = process.env;
const { updateRadStatus } = require('./../../services/google/firebase/database')

module.exports = {
	name: 'presenceUpdate',
	async execute(oldPrecense, newPrecense) {
		if (newPrecense.member.id !== botsettings.DISCORD_OWNER_ID) return
		if (newPrecense.guild.id !== botsettings.DISCORD_GUILD_ID) return
		let status = newPrecense.clientStatus.desktop || newPrecense.clientStatus.mobile || newPrecense.clientStatus.web || ''
		let user = newPrecense.member.user
		let avatarURL = user.displayAvatarURL()
		let username = user.username
		let discriminator = user.discriminator
		let activities = {}
		newPrecense.activities.forEach(activity => {
			let size = Object.keys(activities).length;
			let assets = activity.assets || {};
			try {
				activities[`activity-${size}`] = {
					name: activity.name,
					type: activity.type,
					details: activity.details,
					state: activity.state,
					timestamps: {
						start: parseInt(activity.timestamps.start.getTime() / 1000).toFixed(0),
						end: activity.timestamps.end ? parseInt(activity.timestamps.end.getTime() / 1000).toFixed(0) : null
					},
					assets: {
						largeText: assets.largeText,
						smallText: assets.smallText,
						largeImageURL: assets.largeImageURL(),
						smallImageURL: assets.smallImageURL()
					}
				}
			} catch (error) {
				console.log(error)
			}
		});
		console.log(newPrecense)
		updateRadStatus(activities, status, avatarURL, username, discriminator)
	},
};
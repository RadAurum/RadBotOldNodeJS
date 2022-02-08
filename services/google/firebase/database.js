const { ref, set, child } = require('firebase/database')
const { database } = require('./firebase')

const radStatusRef = ref(database, 'rad-status')

module.exports = {
    async updateRadStatus(activities, status, avatar, username, discriminator) {
        await set(radStatusRef, {
            activities,
            avatar,
            discriminator,
            status,
            username
        }).then(() => { }).catch(e => {
            console.log(e)
        })
    }
}
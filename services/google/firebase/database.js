const { ref, set, child } = require('firebase/database')
const { database } = require('./firebase')

const radStatusRef = ref(database, 'rad-status')

module.exports = {
    async updateRadStatus(activities, status, avatar, username, discriminator) {
        console.log('updating firebase')
        await set(radStatusRef, {
            activities,
            avatar,
            discriminator,
            status,
            username
        }).then(a => {
            console.log('success')
        }).catch(e => {
            console.log(e)
        })
    }
}
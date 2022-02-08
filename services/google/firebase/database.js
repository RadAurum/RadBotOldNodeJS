const { ref, set, child } = require('firebase/database')
const { database } = require('./firebase')

const radStatusRef = ref(database, 'rad-status')

module.exports = {
    updateRadStatus(activities, status, avatar, username, discriminator) {
        set(radStatusRef, {
            activities,
            avatar,
            discriminator,
            status,
            username
        })
    }
}
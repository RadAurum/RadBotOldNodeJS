module.exports = {
    dateToUnixTimestamp(date) {
        return parseInt(date.getTime() / 1000).toFixed(0)
    }
}
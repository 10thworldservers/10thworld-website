module.exports = async function (context, res) {
    context.res = {
        body: {
            text: 'Look at this function I added'
        }
    }
}
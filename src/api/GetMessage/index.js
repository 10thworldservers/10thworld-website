module.exports = async function (context, res) {
    context.res = {
        body: {
            text: 'Hello from the API'
        }
    }
}
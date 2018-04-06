const snekfetch = require('snekfetch');

module.exports = {
    name: 'chuck',
    alias: 'norris',
    cooldown: 5,
    description: 'Chuck Norris facts',
    async execute(message, args) {
        const { body } = await snekfetch.get('https://api.chucknorris.io/jokes/random');
        message.channel.send(body.value);
    },
};
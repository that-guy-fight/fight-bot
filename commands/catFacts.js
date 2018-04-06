const snekfetch = require('snekfetch');

module.exports = {
    name: 'catfact',
    alias: 'catfact',
    cooldown: 5,
    description: 'Facts about cats',
    async execute(message, args) {
        const { body } = await snekfetch.get('https://catfact.ninja/fact');
        message.channel.send(body.fact);
    },
};
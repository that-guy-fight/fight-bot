const snekfetch = require('snekfetch');

module.exports = {
    name: 'ron',
    alias: 'swanson',
    cooldown: 5,
    description: 'Ron Swanson quotes',
    async execute(message, args) {
        const { body } = await snekfetch.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
        message.channel.send(body[0] + ' ~ Ron Swanson');
    },
};
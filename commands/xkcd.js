const snekfetch = require('snekfetch');
const randLimit = 1977;

module.exports = {
    name: 'xkcd',
    alias: 'xkcd',
    cooldown: 5,
    description: 'XKCD comic',
    async execute(message, args) {
        const index = Math.floor(Math.random() * randLimit);
        const { body } = await snekfetch.get('http://xkcd.com/'+index+'/info.0.json');
        message.channel.send(body.img);
    },
};
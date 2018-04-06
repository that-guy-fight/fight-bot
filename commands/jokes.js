const snekfetch = require('snekfetch');

module.exports = {
    name: 'joke',
    alias: 'funny',
    cooldown: 5,
    description: 'Random jokes',
    async execute(message, args) {
        const { body } = await snekfetch.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke');
        message.channel.send(body.setup);
        message.channel.send(body.punchline);
    },
};
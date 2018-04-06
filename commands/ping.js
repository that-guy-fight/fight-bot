module.exports = {
    name: 'ping',
    cooldown: 5,
    description: 'Ping!',
    args: true,
    execute(message, args) {
        
        console.log(message);
        message.channel.send('Pong.');
    },
};
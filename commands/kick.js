module.exports = {
    name: 'kick',
    aliases: ['boot', 'ban'],
    description: 'suggest a user to be kicked',
    args: true,
    execute(message, args) {

        if (!message.mentions.users.size) {
            return message.reply('You need to tag a user in order to kick them!');
        }
        const author = message.author;
        const taggedUser = message.mentions.users.first();
        message.channel.send(`Attention <\@&389986247239794688>: ' + author + ' wants to kick <\@${taggedUser.id}>`);
    },
};

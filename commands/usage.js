const snekfetch = require('snekfetch');
const { version } = require('discord.js');

module.exports = {
    name: 'usage',
    alias: 'usage',
    cooldown: 5,
    description: 'Shows usage info of Fight-Bot',
    async execute(message, args) {
        message.channel.send(`= Fight-Bot Information =
        • Owner       :: Brandon Fightmaster
        • Github      :: URL Required
        • Mem Usage   :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
        • Users       :: ${bot.users.size.toLocaleString()}
        • Servers     :: ${bot.guilds.size.toLocaleString()}
        • Channels    :: ${bot.channels.size.toLocaleString()}
        • Discord.js  :: v${version}
        • Node        :: ${process.version}`, { code: 'asciidoc'});
    },
};
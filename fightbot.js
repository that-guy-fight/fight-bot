const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, defaultCooldown } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands');
const cooldowns = new Discord.Collection();
//creates the list of client commands to be used by the user
for (const file of commandFiles) {
    const command = require('./commands/' + file);
    client.commands.set(command.name, command);
}

//happens when bot logs in
client.on('ready', () => {
    console.log('Ready!');
});

//happens when bot receives a message
client.on('message', message => {
    console.log(message.content);
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    //slices out the prefix from the first command
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return;

    if (command.args && !args.length) {
        return message.channel.send(`You didn\'t provide any arguments, ${message.author}!`);
    }    

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || defaultCooldown) * 1000;

    if (!timestamps.has(message.author.id)) {
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    } else {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`Please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \'${command.name}\' command.`);
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timstamps.delete(message.author.id), cooldownAmount);
    }

    try {
        command.execute(message, args);
    } catch (error) {
        console.log(error);
        message.reply('There was an error trying to execute that command.');
    }
});

//logs the bot in
client.login(token);
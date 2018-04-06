module.exports = {
    name: 'barelyKnewHer',
    description: "Returns the 'barley knew her' statement if a user ends a message with a word that ends in 'er'",
    args: true,
    execute(message, args) {
        
        console.log(message);
        message.channel.send(word[word.length - 1] + ' ... I barely know her!')
    },
};
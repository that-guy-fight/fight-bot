const snekfetch = require('snekfetch');
const { giphyKey } = require('../config.json');
const defaultSearch = 'cat';
const searchLimit = 50;
const randLimit = 50

module.exports = {
    name: 'gif',
    alias: 'jif',
    usage: '[search text]',
    cooldown: 5,
    description: "Search for psuedo random gifs. If no search text is provided, defaults to 'cats'",
    async execute(message, args) {
        let url = 'http://api.giphy.com/v1/gifs/search?q=';
        if(args.length == 0) {
            url = url.concat(defaultSearch);
        } else {
            url = url.concat(args.join('+'));
        }
        url = url.concat('&api_key=' + giphyKey + '&limit=' + searchLimit);
        const { body } = await snekfetch.get(url);
        console.log(body);
        const index = Math.floor(Math.random() * randLimit);
        message.channel.send({embed: { 
            title: 'Your Gif from Giphy',
            image: {
                url: body.data[index].images.original.url
            }
        }});
    },
};
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Then') {
    	message.channel.send('He Die');
  	}
});

client.on('message', message => {
    if (message.content === 'Tell-Story') {
    	message.reply('There A Discord Server Named RBX-MARKET,AND PPL ASKING FOR GIVEAWAY,THEN');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

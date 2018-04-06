const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Nigga') {
    	message.channel.send('No u');
  	}
});

client.on('message', message => {
    if (message.content === 'Account') {
    	message.reply('STILL FIXING THIS BOT');
  	}
});

client.on('message', message => {
    if (message.content === 'Tell Me About Movic') {
    	message.reply('The Most Handsome People In The World');
  	}
});

client.on('message', message => {
    if (message.content === 'spotify') {
    	message.reply('https://pastebin.com/nPHyEisS');
  	}
});

client.on('message', message => {
    if (message.content === 'Giveaway please') {
    	message.reply('Next Time BB <3');
  	}
});

client.on('message', message => {
    if (message.content === 'Shop') {
    	message.reply('Check Out Amy Shop,https://selly.gg/@Loundy');
  	}
});

client.on('message', message => {
    if (message.content === 'When the account is ready?') {
    	message.reply('Ask Movic,He Is My Dad');
  	}
});

client.on('message', message => {
    if (message.content === 'where is the group') {
    	message.reply('https://www.roblox.com/My/Groups.aspx?gid=4020657');
  	}
});

client.on('message', message => {
    if (message.content === '!Group') {
    	message.reply('https://www.roblox.com/My/Groups.aspx?gid=4020657');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

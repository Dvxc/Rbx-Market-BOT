const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Nigga') {
    	message.channel.send('No U');
  	}
});

client.on('message', message => {
    if (message.content === 'Account') {
    	message.reply('STILL FIXING THIS BOT');
  	}
});

client.on('message', message => {
    if (message.content === 'Tell me about movic') {
    	message.reply('The Most Handsome Person In The World');
  	}
});

client.on('message', message => {
    if (message.content === 'Swing the ban hammer') {
    	message.reply('To Who?');
  	}
});

client.on('message', message => {
    if (message.content === 'Giveaway please') {
    	message.reply('Next Time BB <3');
  	}
});

client.on('message', message => {
    if (message.content === 'When the account is ready?') {
    	message.reply('Ask Movic,He Is My Dad');
  	}
});

client.on('message', message => {
    if (message.content === 'stfu') {
    	message.reply('You Have Been Warned In **Movic Community**, Reason: Its A Fake Warning, Dont worry');
  	}
});

client.on('message', message => {
    if (message.content === 'Fuck') {
    	message.reply('You Have Been Warned In **Movic Community**, Reason: Its A Fake Warning, Dont worry');
  	}
    
});

client.on('message', message => {
    if (message.content === 'Hi') {
    	message.reply('Hello!,Welcome To **Movic Community**!!');
  	}
    
});

client.on('message', message => {
    if (message.content === 'Reroll') {
    	message.reply('Please Wait');
  	}
    
});

client.on('message', message => {
    if (message.content === 'reroll') {
    	message.reply('Please Wait');
  	}
    
});
client.on('message', message => {
    if (message.content === 'REROLL') {
    	message.reply('Can U WAIT?!');
  	}
    
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('Hello!,Welcome To **Movic Community**!!');
  	}
    
});

client.on('message', message => {
    if (message.content === '.invite') {
    	message.reply('https://discord.gg/KfHwu');
  	}
    
});

client.on('message', message => {
    if (message.content === '.Invite') {
    	message.reply('https://discord.gg/KfHwu');
  	}
    
});

client.on('message', message => {
    if (message.content === 'Jeff') {
    	message.channel.send('Smart Bot That Progammed By Movic');
  	}
});

client.on('message', message => {
    if (message.content === 'jeff') {
    	message.channel.send('Smart Bot That Progammed By Movic');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

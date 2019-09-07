const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

const brain = require('brain.js');
const network = new brain.NeuralNetwork();

const fs = require('fs');

client.once('ready', () =>
{
	console.log('Ready!')
});

//client.on('guildMemberAdd', member =>
//{
//	const channel = member.guild.channels.find(ch => ch.name === 'member-log');
	
//	if (!channel) return;
	
//	const welcome = message.guild.channels.find(ch => ch.name === 'welcome');
//        const intro  = message.guild.channels.find(ch => ch.name === 'introduction');
//        const roles = message.guild.channels.find(ch => ch.name === 'roles');

//        message.channel.send(`Welcome to PrimoTech, ${member} !`);
//        message.channel.send(`Please read ${welcome} and leave an intro in ${intro} !`);
//        message.channel.send(`Get your Role from ${roles} !`);

//});

client.on('message', message =>
{
	if(message.content.startsWith(`${prefix}hello`))
	{
		message.channel.send("Greetings Ningen!");
	}
	
	const Data =
	{
		username: `${message.author.username}`,
		hour: `${message.author.createdAt.getHours()}`,
		status: `${message.author.presence.status}`,
	}
	console.log(message.author.username);
	console.log(message.author.createdAt.getHours());
	console.log(message.author.presence.status);
	
	const userData = JSON.stringify(Data,null,2);
	console.log(userData);
	
	fs.writeFile('./userData.json', userData, err =>
	{
		if(err)
		{
			console.log('Error writing file', err);
		}
		else
		{
			console.log('Successfuly wrote file');
		}
	});
});

client.login(token);


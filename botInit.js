const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./data.env');

const bot = new Client({intents: [GatewayIntentBits.Guilds]});

bot.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
bot.login(token);
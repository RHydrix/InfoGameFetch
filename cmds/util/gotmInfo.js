const { InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } = require('discord.js');
const igdb = 

function dataFetch(game_name, game_id) {
    // This function should contain the logic to fetch game data from IGDB
    // using the provided game_name or game_id.
    // For now, it returns a placeholder object.
   
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gameSearch')
		.setDescription('search for a game for gotm.')
		.addStringOption(option =>
			option
				.setName('game_name')
				.setDescription('game to fetch based on name'))
		.addStringOption(option =>
			option
				.setName('game_id')
				.setDescription('game to fetch based on steam id')),
    async execute(interaction) {
    var game_name = interaction.options.getString('game_name');
    var game_id = interaction.options.getString('game_id');







    }

};

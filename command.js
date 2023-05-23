const { REST, Routes } = require('discord.js');
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTEwOTg0MTg1NTg4NzE4Mzk4Nw.GJfoj_.EigN_PjErLHBZj9v2SihJjfHaZ6f2Lk0KJz5aE");




(async() => {
try {
  console.log('Started refreshing application (/) commands.');
  await rest.put(Routes.applicationCommands("1109841855887183987"), { body: commands });

  console.log('Successfully reloaded application (/) commands.');
} catch (error) {
  console.error(error);
}
})();

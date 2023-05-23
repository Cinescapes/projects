const { Client, GatewayIntentBits } = require("discord.js") ;



const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
  if(message.author.bot) return;
  message.reply({
    content:" Hello there!"
  });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong! ;p");
});



client.login("MTEwOTg0MTg1NTg4NzE4Mzk4Nw.GJfoj_.EigN_PjErLHBZj9v2SihJjfHaZ6f2Lk0KJz5aE");

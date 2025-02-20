const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setColor('#E367D3')
        .setTitle('Commands:')
        .setDescription('Here are the available commands:')
        .addField('1. ping', 'Gets latency of bot')
        .addField('2. afk', 'Pings @AFK Ping role')
        .setTimestamp()
    
    message.channel.send(embed);
    
}

exports.help = {
    name: "ciminer",
    aliases: ['cmds']
}

exports.requirements = {
    botOwner: false,
    command_channel: true,
    botPerms: [],
    userPerms: []
}

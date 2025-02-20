const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send("Calculating ping...").then((resultMessage) => {
        const ping = resultMessage.createdTimestamp - message.createdTimestamp
        resultMessage.edit(`:ping_pong: Pong! **Bot Latency:** ${ping}ms | **API Latency** ${bot.ws.ping}ms`)
    })
    
}

exports.help = {
    name: "ping",
    aliases: ['pong']
}

exports.requirements = {
    botOwner: false,
    command_channel: true,
    botPerms: [],
    userPerms: []
}

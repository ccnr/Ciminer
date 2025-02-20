const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send("<@&1339501761248886784>");
    
}

exports.help = {
    name: "afk",
    aliases: ['']
}

exports.requirements = {
    botOwner: false,
    clan_member_check: true,
    afk_channel_check: true,
    botPerms: [],
    userPerms: []
}

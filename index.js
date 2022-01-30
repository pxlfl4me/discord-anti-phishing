const Discord = require('discord.js')
const { antiPhishing } = require('./function')
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
})

client.login('TOKEN')

client.on('ready', () => {
    console.log('Ready')
})

const Discord = require('discord.js')
const { antiPhishing } = require('discord-anti-phishing')

client.login('TOKEN')

client.on('ready', () => {
    console.log('Ready')
})

client.on('messageCreate', message => {
    let embed = new Discord.MessageEmbed()
        .setColor('RED')    //Embed Color
        .setTitle('Link forbidden')     //Embed title
        .setDescription('user provide a forbidden link')    //embed Description

    /*
    automatically adds:

    field with user.tag and user.id, link forbidden
    */

    antiPhishing(message, embed)
})
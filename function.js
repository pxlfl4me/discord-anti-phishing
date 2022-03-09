const Discord = require('discord.js');
const urlJson = require('./json/url.json');

exports.antiPhishing = async function(message, embed){
    if(!message) return console.error('Specify a first parameter (Discord.Message)');
    if(!embed) return console.error('Specify a second parameter (Discord.MessageEmbed)');
    if(!message.author && !message.content && !message.member) return console.error('Specify a valid (Discord.Message)');
    if(embed.length < 2 && !embed.title) return console.error('Specify a valid (Discord.MessageEmbed)');

    let presente = [];
    for(let i = 0; i < urlJson.domains.length; i++){
        let url = urlJson.domains[i];
        if(message.content.includes(url)){
            presente.push(url);
            break;
        }
    }
        

    if(presente.length == 1){
        message.delete();
        
        embed.addField('Link:', '||' + presente[0] + '||');
        embed.setThumbnail(message.author.displayAvatarURL());

        message.channel.send({embeds: [embed]});

        let res = { message: message, link: presente[0] }
        
        return res;
    }
}

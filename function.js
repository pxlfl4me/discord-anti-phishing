const Discord = require('discord.js')
const urlJson = require('./json/url.json') 

exports.antiPhishing = async function(message){
    if(!message) return console.error('Specify a first parameter (Discord.Message)')
    if(!message.author && !message.content && !message.member) return console.error('Specify a valid (Discord.Message)')


    let presente = []
    for(let i = 0; i < urlJson.domains.length; i++){
        let url = urlJson.domains[i]
        if(message.content.includes(url)){
            presente.push(url)
            break
        }
    }
        

    if(presente.length == 1){
        message.delete()
        let result = {
            userTag: message.author.tag,
            userUsername: message.author.username,
            memberNickname: message.member.nickname,
            userID: message.author.id,
            userImg: message.author.displayAvatarURL(),
            phishingLink: presente[0]
        }
        return result
    }else {
        return false
    }
}

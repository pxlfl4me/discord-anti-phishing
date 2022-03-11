# discord-anti-phishing

## Installation:

**Node.js 17.0.0 or newer is required.**

**discord.js 13.0.0 or newer is required.**

```sh-session
npm install discord.js@latest
```


## Usage:

```js
const Discord = require('discord.js')
const client = new Discord.Client({
	intents: 32767,
});
const { antiPhishing } = require('discord-anti-phishing')

client.login('TOKEN')

client.on('ready', () => {
    console.log('Ready')
})

client.on('messageCreate', async message => {

    antiPhishing(message).then(info => {
        //message will be automatically deleted
        if(info){
            //Embed example
            let embed = new Discord.MessageEmbed() 
            .setColor('RED')    
            .setTitle('Link forbidden')     
            .setDescription('user provide a forbidden link') 
            .addField('User:', '`' + info.userTag + ' | ' + info.userID + '`')
            .addField('Link:', '`' + info.phishingLink + '`')
            .setThumbnail(info.userImg)

            message.channel.send({embeds: [embed]})
            //all you custom code
        }
    })
})
```


## Docs:


```sh-session
    .userUsername, Show the user username
    |
    .memberNickname, Show the member nickname
    |
    .userID, show the user id
    |
    .userImg, show the user profile image
    |
    .phishingLink, show phishing link in message
```
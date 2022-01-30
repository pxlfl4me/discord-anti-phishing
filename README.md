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
```
const fs = require("fs");
const path = require("path");
const Discord = require("discord.js");
const http = require("http");
const client = new Discord.Client();
const { Player } = require("./discord-player/index"); //Create a new Player (Youtube API key is your Youtube Data v3 key)
const player = new Player(client, "AIzaSyAikVLdEbcQRqZWU02YAOIfU9lPSZHnDrQ"); //To easily access the player
client.player = player;
client.player.loop = false;
client.commands = new Discord.Collection();
client.aliases =  new Discord.Collection();
client.colors = require('./config.json')
client.emotes = require('./emoji.json')
fs.readdir(path.join(__dirname, "commands"), (err, files) => {
    //it will filter all the files in commands directory with extension .js
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    //this will be executed if there is no files in command folder with extention .js
    if(jsfile.length <= 0) return console.log("Could not find any commands!");
    //it's similar to for loop
    jsfile.forEach((f, i) => { 
     //it will log all the file names with extension .js
    console.log(`成功載入${f}!(music-V4)`);
        
    let pull = require(`./commands/${f}`);
   
    client.commands.set(pull.config.name, pull);  
    pull.config.aliases.forEach(alias => {
    client.aliases.set(alias, pull.config.name)
                
    });
})});
client.on("ready", () => {
  console.log(client.user.tag + '的music-V4已經好囉！')
})
client.on('message', async message => {
    
    let prefix = "87!"
        
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
      
      
    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
    if(commandfile) commandfile.run(client,message,args,prefix);   
        
});

client.login("Njk4Mzc1NTIyMDM5NzU4ODU4.XpE64w.KpvljslJqaz8kdsiLsOkY0NYjow")

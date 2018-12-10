const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 let helpembed = new Discord.RichEmbed()
 .setDescription("**__A list of commands for DR1FT Bot!__**")
 .setColor("#39f1f7")
 .addField("**MAIN Commmands**" , "Sinfo, info, report, level, pay, v-bucks.");

message.channel.send(helpembed);
if(message.member.hasPermission("MANAGE_MESSAGES")){
let modembed = new Discord.RichEmbed()
.setDescription("**MODERATION** Commands")
.setColor("#39f1f7")
.addField("Moderator Commands", "removerole, kick, warn, warnings, ban, prefix, say, addrole");

try{
  await message.author.send(modembed);
  message.react("\:thumbsup:");
}catch(e){
message.reply("To get the Moderator commands, you need to unlock your DMs.");
}
}
}

module.exports.help = {
name: "help"
}

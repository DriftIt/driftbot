const Discord = require("discord.js");

const fs = require("fs");



module.exports.run = async (bot, message, args, prefix) => {



  if(!message.member.hasPermission("MANAGE_MEMBER")) return message.reply("You do not have the required permissions to do this.");

  if(!args[0] || args[0 == "help"]) return message.reply("Usage: /prefix <new prefix>");



  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));



  prefixes[message.guild.id] = {

    prefixes: args[0]

  };



  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {

    if (err) console.log(err)

  });



  let sEmbed = new Discord.RichEmbed()

  .setColor("#FF9900")

  .setTitle("You have a new prefix!")

  .setDescription(`Your prefix is set to ${args[0]}`);



  message.channel.send(sEmbed);



}



module.exports.help = {

  name: "prefix"

}

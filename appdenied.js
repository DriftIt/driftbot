const Discord = require("discord.js");

const errors = require("../utils/errors.js");



module.exports.run = async (bot, message, args) => {



  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");

  if(args[0] == "help"){

    message.reply("How to use: /removerole");

    return;

  }

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!rMember) return message.reply("No user has that name!");

  let role = args.join(" ").slice(22);

  if(!role) return message.reply("Make sure you type in the role you want to remove!");

  let gRole = message.guild.roles.find(`name`, role);

  if(!gRole) return message.reply("This is not a role we could find!");



  if(!rMember.roles.has(gRole.id)) return message.reply("This person does not have the role you asked to remove!");

  await(rMember.removeRole(gRole.id));



  try{

    await rMember.send(`Sorry! Someone an admin removed your role called: ${gRole.name}.`)

  }catch(e){

    message.channel.send(`oof to <@${rMember.id}>, his role said oof ${gRole.name} We tried to DM them, but their DMs are locked. (this sucks)`)

  }

}



module.exports.help = {

  name: "removerole"

}

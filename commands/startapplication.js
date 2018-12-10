const Discord = require("discord.js");

const errors = require("../utils/errors.js");



module.exports.run = async (bot, message, args) => {



  //!addrole @andrew Dog Person

  if (!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "ADMINISTRATOR");

  if (args[0] == "help") {

    message.reply("Usage: /addrole <user> <role>");

    return;

  }

  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if (!rMember) return errors.cantfindUser(message.channel);

  let role = args.join(" ").slice(22);

  if (!role) return message.reply("Something drifted away; You didn't write any role.");

  let gRole = message.guild.roles.find(`name`, role);

  if (!gRole) return message.reply("Something drifted away; Unknown error.");



  if (rMember.roles.has(gRole.id)) return message.reply("This player already aquire this role.");

  await (rMember.addRole(gRole.id));



  try {

    await rMember.send(`A role drifted to you... ${gRole.name} is now your role!`)

  } catch (e) {

    console.log(e.stack);

    message.channel.send(`Hello, <@${rMember.id}> you are now ${gRole.name}! Our message was gone away due to your locked DM.`)

  }

}



module.exports.help = {

  name: "addrole"

}

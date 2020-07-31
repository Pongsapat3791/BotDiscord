const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "disconnect",
  aliases: ["dis"],
  description: "Disconnect your Channel.",
  execute(message) {
    message.member.voice.channel.leave();
    message.channel.send("Bye Bye!")
  }
};

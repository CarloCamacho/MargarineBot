exports.run = async (client, message, [Name]) => {
    if (!Name) { return message.channel.send("You need to give me an emoji!"); }
    else {
      let emote = client.emojis.find("name", Name);
      if (!emote) { return message.channel.send("I can't find that emoji. My searching capabilities are case-sensitive so be sure that the emoji Name is **exactly** the way it is spelled."); }
      return message.channel.send(`https://cdn.discordapp.com/emojis/${emote.id}.png`);
    }
};

exports.conf = {
    enabled: true,
    runIn: ["text"],
    aliases: ["see", "emoji"],
    permLevel: 0,
    botPerms: [],
    requiredFuncs: [],
};
  
exports.help = {
    name: "enlargen",
    description: "Displays an enlargened emoji and url.",
    usage: "[Name:str]",
    usageDelim: "",
};
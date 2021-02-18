const Discord = require("discord.js");
exports.run = (client, message, args) => {
  if (!message.member.roles.cache.has("809285603652010008"))
    if (!message.member.roles.cache.has("809285603610722352"))
      return message.reply("Bunun için gerekli iznin yok");
  var role = message.guild.roles.cache.find(role => role.id === "809285603610722352");
  let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if (!user)
    return message
      .reply("**Kime Vip Rolü Verceğimi Yazmadın**") // 31
      .catch(console.error);
  user.roles.add(role); ///31
  const embed = new Discord.MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL) /// 31
    .setDescription(
      `**__Vip   Rolü Verildi __**`
    )
    .addField(
      `__Yetki Veren Kişi__`,
      `<@!${message.author.id}>` ///31
    )
    .addField(`__Verilen Kişi__`, `${user}`)
    .addField(`__Verilen Yetki__`, `${role}`)
    .setImage(
      ``
    )
    .setFooter(client.user.username, client.user.avatarURL)
    .setColor("#661d68")
    .setTimestamp();
  message.channel.send(embed).then(m => m.delete(9000))
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["vip"],
  permLevel: 0
};

exports.help = {
  name: "vip",
  description: "İstediğiniz kişiyi vip rolü verir.",
  usage: "vip-ver [kullanıcı]"
};
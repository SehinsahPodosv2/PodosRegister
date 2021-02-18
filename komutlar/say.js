const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

if(!["809285603652010009"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('0x800d0d').setAuthor(message.member.displayName, message.author.avatarURL()({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));

let guild = "809285603367190588"; // SUNUCU ID
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
var msg = message;
var üyesayısı = msg.guild.members.cache.size.toString().replace(/ /g, "    ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:sifir:809299840269025291>`,
'1': `<a:bir:809299834959036436>`,
'2': `<a:iki:809299841196228618>`,
'3': `<a:uc:809299836221521940>`,
'4': `<a:dort:809299840538247188>`,                       
'5': `<a:bes:809299832174805033>`,
'6': `<a:alti:809299830198239264>`,
'7': `<a:yedi:809299839069716500>`,
'8': `<a:sekiz:809299841310130177>`,
'9': `<a:dokuz:809299840189333505>`}[d];})}
  
var sessayı = count.toString().replace(/ /g, "    ")
var üs2 = sessayı.match(/([0-9])/g)
sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs2) {
sessayı = sessayı.replace(/([0-9])/g, d => {
return {
'0': `<a:sifir:809299840269025291>`,
'1': `<a:bir:809299834959036436>`,
'2': `<a:iki:809299841196228618>`,
'3': `<a:uc:809299836221521940>`,
'4': `<a:dort:809299840538247188>`,                       
'5': `<a:bes:809299832174805033>`,
'6': `<a:alti:809299830198239264>`,
'7': `<a:yedi:809299839069716500>`,
'8': `<a:sekiz:809299841310130177>`,
'9': `<a:dokuz:809299840189333505>`}[d];})}

var taglılar = 0;
let tag = "Ψ";
message.guild.members.cache.forEach(member => {
if(member.user.username.includes(tag)) {
taglılar = taglılar+1}})


var taglılar = taglılar.toString().replace(/ /g, "    ")
var üs3 = taglılar.match(/([0-9])/g)
taglılar = taglılar.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs3) {
taglılar = taglılar.replace(/([0-9])/g, d => {
return {
'0': `<a:sifir:809299840269025291>`,
'1': `<a:bir:809299834959036436>`,
'2': `<a:iki:809299841196228618>`,
'3': `<a:uc:809299836221521940>`,
'4': `<a:dort:809299840538247188>`,                       
'5': `<a:bes:809299832174805033>`,
'6': `<a:alti:809299830198239264>`,
'7': `<a:yedi:809299839069716500>`,
'8': `<a:sekiz:809299841310130177>`,
'9': `<a:dokuz:809299840189333505>`}[d];})}
  
  
var cevirimici = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
var üs4= cevirimici.match(/([0-9])/g)
cevirimici = cevirimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs4) {
cevirimici = cevirimici.replace(/([0-9])/g, d => {
return {
'0': `<a:sifir:809299840269025291>`,
'1': `<a:bir:809299834959036436>`,
'2': `<a:iki:809299841196228618>`,
'3': `<a:uc:809299836221521940>`,
'4': `<a:dort:809299840538247188>`,                       
'5': `<a:bes:809299832174805033>`,
'6': `<a:alti:809299830198239264>`,
'7': `<a:yedi:809299839069716500>`,
'8': `<a:sekiz:809299841310130177>`,
'9': `<a:dokuz:809299840189333505>`}[d];})}

   
var booster = message.guild.roles.cache.get("809693752084004865").members.size
var booster = booster.toString().replace(/ /g, "    ")
var üs5 = booster.match(/([0-9])/g)
booster = booster.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
if(üs5) {
booster = booster.replace(/([0-9])/g, d => {
return {
'0': `<a:sifir:809299840269025291>`,
'1': `<a:bir:809299834959036436>`,
'2': `<a:iki:809299841196228618>`,
'3': `<a:uc:809299836221521940>`,
'4': `<a:dort:809299840538247188>`,                       
'5': `<a:bes:809299832174805033>`,
'6': `<a:alti:809299830198239264>`,
'7': `<a:yedi:809299839069716500>`,
'8': `<a:sekiz:809299841310130177>`,
'9': `<a:dokuz:809299840189333505>`}[d];})}

const embed1 = new Discord.MessageEmbed()
.setColor('0x0088ff')
.setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
 .setDescription(`
**Sunucuda Toplam** ${üyesayısı} **Üye bulunmakta.** 
**Sunucuda Toplam** ${cevirimici} **Üye Çevrimiçi.** 
**Ses Kanallarında** ${sessayı} **Üye Sohbet Ediyor.**
**Tagımızda Toplam ** ${taglılar} **Üye Bulunmakta.**
**Sunucuda Toplam ${booster} Booster Üye Bulunmakta.**`)

msg.channel.send(embed1);
  
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["say"],
  permLevel: 0
};
exports.help = {
  name: 'say'
}
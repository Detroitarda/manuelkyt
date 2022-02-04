let Discord = require("discord.js");
let db = require("quick.db")
let { hata, oldu } = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {
    let ayarlar = require("../ayarlar.json")

        let prefix = await require("quick.db").fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
        
  try {
      let kayıteks = await db.fetch(`kayıteks.${message.guild.id}`)
  let kayıty = await db.fetch(`kayıty.${message.guild.id}`)
  let otokayıt = await db.fetch(`kayıtalınacakrol.${message.guild.id}`)
  let tag = await db.fetch(`kayıttag.${message.guild.id}`)
  let kayıte = await db.fetch(`kayıte.${message.guild.id}`)
  let embed = await db.fetch(`kmesajembed.${message.guild.id}`)
   let kisim2 = await db.fetch(`kisimdüzenisc.${message.guild.id}`)

  let kayıtlog = await db.fetch(`logkayıt.${message.guild.id}`)
  let agacim = await db.fetch(`kayıtalınacakrol.${message.guild.id}`)
let kisim = await db.fetch(`kisim.${message.guild.id}`)
if(!kayıty) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt yetkilisi ayarlanmamış!`).setColor(hata))
if(!kayıte) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt erkek rolü ayarlanmamış!`).setColor(hata))
if(!kayıtlog) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt logu ayarlanmamış!`).setColor(hata))
if(!agacim) return message.channel.send(new Discord.MessageEmbed().setDescription(`Kayıt alınacak rol ayarlanmamış!`).setColor(hata))
      let isimdüzen = await db.fetch(`isimdüzen.${message.guild.id}`)

  let kanal = client.channels.cache.get(kayıtlog)
  if(!message.member.roles.cache.has(kayıty)) return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için <@&${kayıty}>  Rolüne sahip olman gerekmekte`).setColor(hata))
  
let isim = args[1]
let yaş = args[2]
  let userca = message.mentions.members.first() || message.mentions.users.first()


if(!userca) return message.channel.send(new Discord.MessageEmbed().setDescription(`
Kayıtı Yapabilmek İçin Bir Kullanıcı Etiketlemen Lazım! Örnekler Aşşağıda:

\`${prefix}erkek @etiket\`
\`${prefix}erkek @etiket Kayra 14\` `).setColor(hata))
    if(kisim) {
      
    
if(!isim || !yaş) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir İsim Ve Yaş Girmedin!').setColor(hata))
  if(isNaN(yaş)) return message.channel.send(new Discord.MessageEmbed().setDescription('Bir Yaş Girmedin!').setColor(hata))
  if(message.channel.id !== kayıtlog) return message.channel.send(new Discord.MessageEmbed().setColor(hata).setDescription('Bu Kodu Sadece Kayıt Kanalında Kullanabilirsin'))
  if(!userca.roles.cache.has(agacim)) return message.channel.send({embed: {color : hata, description: `Kayıt Edeceğin Kullanıcı <@&${agacim}> Rolüne Sahip Olması Lazım`}})
      userca.setNickname(`❉ ${isim} / ${yaş}`)
    }
      db.add(`say.erkek.${message.author.id}.${message.guild.id}`, 1)
              db.add(`say.toplam.${message.author.id}.${message.guild.id}`, 1)

  let guild = message.guild.name
  if(kisim2) {
    let kisim3 = kisim2.replace(`{isim}`, isim).replace(`{yas}`, yaş)
    userca.setNickname(kisim3)
  }
  
  
  if(kayıteks) {
userca.roles.add(kayıte)
  userca.roles.remove(agacim)
  }
  userca.roles.add(kayıte)
  userca.roles.remove(agacim)
  
 
   
   message.react('<a:uppp:838441828402855987>')
   let embed55 = new Discord.MessageEmbed()
   .setTitle(`**Kayıt Yapıldı!**`)
   .setDescription(`
> **Kayıt Bilgileri**
<a:yenonyf:852472797414686781> • **Kayıt Edilen Kullanıcı:** ${userca}
<a:dng:838008572923215873> • **Kayıt Eden Yetkili:** ${message.author} 
<a:ydsss:881947973301436416> • **Verilen Roller:** <@&${kayıte}>
`)
   .setColor(oldu)
    .setThumbnail(userca.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(userca.guild.name,userca.guild.iconURL({dynamic:true}))
   
message.channel.send(embed55)

  
  var log = db.fetch(`kayıtlog_${message.guild.id}`)
var logcuk = message.guild.channels.cache.get(log) 
 const embed555 = new Discord.MessageEmbed()
.setColor('#5865f2')
.setAuthor(`Kayıt Yapıldı!`, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`
<a:mrb2:878949694691213332> • **${userca} aramıza <@&${kayıte}> rolleriyle katıldı.**

<a:ony555:880015627228680223> • **Kaydı gerçekleştiren yetkili**   |   <a:ha:837676804314497044> • **Aramıza hoş geldin**
 > <:okem:837683134132518912> ${message.author}                               <:okem:837683134132518912> ${userca}



    `)
.setFooter(`Atr Özel Kayıt Sistemi`, client.user.displayAvatarURL({dynamic: true}))
 .setThumbnail(userca.user.displayAvatarURL({ dynamic: true }))
.setTimestamp()
 logcuk.send(`> ${userca}`, logcuk) ;
logcuk.send(embed555)
    
    
 

    
  } catch (e) {
    let embed1 = new Discord.MessageEmbed()
    .setTitle("Hata")
    .setDescription(`Bir Hatayla Karşılaştım! Hata => ${e}
    
    `)
    .setThumbnail()
    message.channel.send(embed1)
  }
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["erkek", "e"],
    kategori: "yetkili",

  permLevel: 0
};

module.exports.help = {
  name: 'man'
};

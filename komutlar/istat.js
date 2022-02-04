const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
    
    
  const seksizaman = moment
    
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("#5865f2")
    .setTimestamp()
    .setTitle('<a:uppp:838441828402855987> Atr Register İstatistikleri ')
    .setFooter("Atr İstatistikleri", client.user.avatarURL())
    .addField("<a:tacc:839534770366840862> **Geliştirici**", "<@596686529301184528> | ◥ ད Detroit /ཌ ◤#7070")
    .addField("<:ok22:839533207866048644> **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"
        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<:ok22:839533207866048644> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("<:ok22:839533207866048644> **Çalışma süresi**", seksizaman, true)
    .addField("<:ok22:839533207866048644> **Toplam komut**", client.commands.size, true)
    

    .addField("<:ok22:839533207866048644> **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("<:ok22:839533207866048644> **Node.JS sürüm**", `${process.version}`, true)
    
    .addField("<:ok22:839533207866048644> **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("<:ok22:839533207866048644> **Bit**", `\`${os.arch()}\``, true)
    .addField("<:ok22:839533207866048644> **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)

  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i","bilgi"],
  permLevel: 0
};

exports.help = {
    cooldown: 5 ,
  name: "istatistik",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
}
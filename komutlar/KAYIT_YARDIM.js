const Discord = require('discord.js')

exports.run = async(client, message, args) => {


if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    
    .setTitle("<a:ayaree:882155614871126076> ATR KAYIT Ana Menüsüne Hoş Geldin")
    .setDescription( 
    `[ak!kayıt-alınacak-rol = Kayıt Olan Kullanıcıdan Alınacak Rol ÖRN: Kayıtsız Rolü ]
    [ak!kayıt-destek = Kayıt Destek Ekibini Ve Kayıt Ekibini Ayarlarsınız. ]
    [ak!kayıt-erkek-rol = Kayıt Olan Erkeğe Verilecek Rol]
    [ak!kayıt-isim-düzen = Kayıt Edilen Kişinin İsim Düzen Ve Tag Ayarlarsınız]
    [ak!kayıt-isimzorun = isim Zorunlulugu Seneçenekleri]
    [ak!kayıt-kadın-rol] = Kayıt Edilen Kadın Üyeye Verilecek Kadın Rolü
    [ak!kayıt-yetkili-rol] = Kayıtçı Yetkisini Ayarlarsınız
    [ak!kayıt-log = Kayıt Loglarını Ayarlarsınız]
    [ak!kontrol Kayıt Sisteminin Açık Kapalı Kontrolünü Ayarlarsınız ]
    [ak!kayıt-mesaj-embed Kayıt Log Atılan Hoşgeldin Mesaj EMBED Ayarlamasını Yaparsınız ]
    [ak!kayıt-mesaj Kayıt Mesajını Ayarlarsınız ]
    [ak!kayıt-otoisim Sunucuya Giren Üyenin İsmini Otomatik Değiştir ]
    [ak!kayıt-otoisim-kapat]
    [ak!kayıt-oto-rol Sunucuya Giren Üyeye Otomatik Rol Ayarlarsınız ÖRN: Kayıtsız ]
    [ak!profil])
    [ak!kayıt-ek-rol Kayıt Ederken EK Rol Ayarlarsınız. ]`).setColor('#5865f2')
    .setImage("https://cdn.discordapp.com/attachments/786134265824935936/886549220499263499/1629354722387.png")
    
    message.channel.send(embed)
}

}

exports.conf = {
    aliases: []
}
exports.help = {
    name: "yardım"
}
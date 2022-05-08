let handler = async(m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n*Escriba un reporte.*\n*Ejemplo:*\n${usedPrefix + command} *El comando ${usedPrefix}serbot no funciona.*\n\n*Write a report.*\n*Example*\n${usedPrefix + command} *The command${usedPrefix}jadibot it does not work.*`
    if (text.length > 1500) throw '╰⊱❌⊱ *𝙁𝘼𝙇𝙇𝙊́ | 𝙀𝙍𝙍𝙊𝙍* ⊱❌⊱╮\n\n*El reporte minimo es de 1500 caracteres!*\n*The minimum report must be 1500 characters!*'
    const laporan = `╭━━━━〔 *REPORTE | REPORT* 〕━━━⬣*\n┃\n┃ *Número | Number*\n┃ *Wa.me/${m.sender.split`@`[0]}*\n┃ *Mensaje | Text*\n┃ ${text}\n┃\n┃╰━━━━━━━━〔 *${wm}* 〕━━━━━━━⬣`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '593968585383@s.whatsapp.net'))
    m.reply(laporan, jid)
    //m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('╰⊱💚⊱ *𝙀́𝙓𝙄𝙏𝙊 | 𝙎𝙐𝘾𝘾𝙀𝙎𝙎* ⊱💚⊱╮\n\n✔️Masalah telah di laporkan ke Owner Bot, laporan palsu/main2 tidak akan ditanggapi!')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(bug|report)$/i

module.exports = handler

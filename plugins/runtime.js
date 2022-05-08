let handler = async (m, { conn }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

m.reply(conn.sendBut(m.chat, `╭━━〔 𝙏𝙄𝙀𝙈𝙋𝙊 𝘿𝙀 𝙀𝙅𝙀𝘾𝙐𝘾𝙄𝙊́𝙉 | 𝙍𝙐𝙉𝙏𝙄𝙈𝙀 〕━⬣
┃𓃠 *Versión de GataBot-MD*
┃➺ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Activa durante:* ${uptime}
┃ *Active during:* ${uptime}
╰━━━━━━━━━━━━━━━━━━━━━⬣
    `, gt , `☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩`, '.menu',  m))
}
handler.help = ['ejecucion | runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime|ejecucion|ejecución|ejecucción|ejecuccion|ejecusion|runtimes|uptimes)$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

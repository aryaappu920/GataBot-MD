let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
m.reply(conn.sendBut(m.chat, `╭〔 𝙏𝙊𝙏𝘼𝙇 𝘾𝘼𝙍𝘼𝘾𝙏𝙀𝙍𝙄́𝙎𝙏𝙄𝘾𝘼𝙎 | 𝙏𝙊𝙏𝘼𝙇𝙁𝙀𝘼𝙏𝙐𝙍𝙀 〕━⬣ 
┃𓃠 *Versión de GataBot-MD*
┃➺ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *Características totales actualmente*
┃➺ ${totalf}
┃ *Total features currently*
┃➺ ${totalf}
╰━━━━━━━━━━━━━━━━━━━━━⬣`, gt , `☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩`, '.menu',  m))
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler

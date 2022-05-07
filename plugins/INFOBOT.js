const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { command }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
bear = "Source Code"
ye = `@${m.sender.split`@`[0]}`
let esce = ` 
╭━━[ *𝙀𝙎𝙏𝘼𝘿𝙊 | 𝙎𝙏𝘼𝙏𝙐𝙎* ]━━━⬣
┃*¡Hola | Hi!* ${ye} 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ 𓃠 *Versión de GataBot-MD*
┃➥ ${vs}
┃ღ *Fecha | Date*
┃➥ %week %date
┃ ◌ *Activo Durante | Active During* 
┃➥ ${uptime}
┃ ◌ *Modo | Mode:* 
┃➥ ${global.opts['self'] ? 'Self' : 'publik'}
┃ ◌ *Usuario(s) | Users* 
┃➥ ${Object.keys(global.db.data.users).length} 
┃ ◌ *Chat(s) Prohibido(s) | Forbidden Chats*
┃➥ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃ ◌ *Usuario(s) Prohibido(s) | Prohibited Users*
┃➥ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰━━━━━━━━━━━━━━━━⬣
`/*const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: esce,
           locationMessage: { 
           jpegThumbnail: await (await fetch(fla + bear)).buffer() },           
           hydratedFooterText: gt,
           hydratedButtons: [{*/
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/menus/Menu1.jpg')}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: esce,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '𝙂𝙞𝙩𝙃𝙪𝙗',
               url: "https://github.com/GataNina-Li/GataBot-MD"
              }   
            },
              {
              urlButton: {
               displayText: '𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢',
               url: instagram	           
             }
           },
			     {
             quickReplyButton: {
               displayText: '𝙑𝙚𝙡𝙤𝙘𝙞𝙙𝙖𝙙 | 𝙎𝙥𝙚𝙚𝙙',
               id: '.ping',
             }
	   },
             {
             quickReplyButton: {
               displayText: '𝙈𝙚𝙣𝙪́ 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪',
               id: '.allmenu',
             }
	   },
             {
             quickReplyButton: {
               displayText: '𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪',
               id: '.menu',
             }
          }]
        }
      }
    }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}






/*
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn }) => {
    let gt = global.gt
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)

    let str = `
╭━━[ *𝙀𝙎𝙏𝘼𝘿𝙊 | 𝙎𝙏𝘼𝙏𝙐𝙎* ]━━━⬣
├◌ *Activo Durante | Active During* 
${uptime}
├◌ *Modo | Mode:* 
${global.opts['self'] ? 'Self' : 'publik'}
├◌ *Usuario(s) | Users* 
${Object.keys(global.db.data.users).length} 
├◌ *Chat(s) Prohibido(s) | Forbidden Chats*
${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
├◌ *Usuario(s) Prohibido(s) | Prohibited Users*
${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰━━━━━━━━━━━━━━━━⬣
    `const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: str,
           locationMessage: { 
           jpegThumbnail: await (await fetch(fla + bear)).buffer() },           
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '📍Instagram',
               url: instagram
             }

           },
               {
             quickReplyButton: {
               displayText: '𝙱𝙰𝙲𝙺 𝚃𝙾 𝙼𝙴𝙽𝚄',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['botstatus']
handler.tags = ['info']
handler.command = /^botstat(us)?$/i

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
*/

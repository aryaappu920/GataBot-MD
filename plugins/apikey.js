let handler = async m => //m.reply(`
let menu =` 
╭━━〔 *APIKEY GRATIS | APIKEY FREE* 〕━━⬣
┃➥ *Bany :* adadeh
┃➥ *leyscoders:* MIMINGANZ
┃➥ *xteam:* MIMINETBOT
┃➥ *Videfikri:* no apikey
┃➥ *Caliph:* FreeApi
┃➥ *Zeks:* apivinz
┃➥ *OnlyDevCity:* PunyaIkyAds
┃➥ *Tobs-api:* BotWeA
┃➥ *shizukaa:* itsmeiky633
┃➥ *vhtear:* LoliHunter
┃➥ *ZeksApi* = PmzFe9Hq4xYdwha6pxiXd9jgLnh
┃➥ *LeysKey* = MNQYOVSL
┃➥ *apixteam* = 7415bc4287ad5ca8
┃➥ *apiKey* = 7ed90d537ab5edddb6ba6465
┃➥ *LolKey* = Danwfrostkey
┃➥ *odckey* = onlygay
┃➥ *onlydev* = PunyaIkyAds
┃➥ *xteam* = AbilGanss
┃➥ *BarBarKey* = IDxO1TFYnKADlX4pxcHa
┃➥ *AbilGanssVhtearKey* = 1BlnApiIkyPake
┃➥ *xteamkey* = AbilGanss
┃➥ *TobzKey* = Bidmzz1sJ2L1TKyqaMEU
┃➥ *ApiDevolover* = HokageBR
┃➥ *TechApi* =   \n┃ 5BNIDH-1T0kPj-gWqG6q-sHtuHA-AWBSgZ
┃➥ *Zeksapi* = apivinz
┃➥ *shizukaapi* = itsmeiky633
┃➥ *apivhtear* = 1BlnApiIkyPake
╰━━━━━━━${wm} 〙━━━━━━━⬣
𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨`.trim()
conn.send3ButtonLoc(m.chat, (await fetch(pp)).buffer(), `
⁖ᯓ፨҈༺ 𝙂𝙖𝙩𝙖𝘽𝙤𝙩 | 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ༻፨҈ᯓ⁖
`.trim(), menu, '🎮 𝙈𝙀𝙉𝙐 𝘿𝙀 𝙅𝙐𝙀𝙂𝙊𝙎 🎮', `#menujuego`, '🚀 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 🚀', `#menudescarga`, '🔐 𝙂𝙀𝙎𝙏𝙄𝙊𝙉 𝘿𝙀 𝙂𝙍𝙐𝙋𝙊 🔐', `#menugrupo`, m, false, { contextInfo: { mentionedJid }})}
//`.trim())  Tambah sendiri kalo mau


handler.help = ['apikey']
handler.tags = ['info']
handler.command = /^apikey$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler

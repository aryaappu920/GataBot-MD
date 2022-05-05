let handler = async (m) => {
    r1 = global.r1
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
   m.reply(conn.sendBut(m.chat, `${r1} *En la base de datos hay ${totalreg} Usuarios*.\n*In the database I have registered ${totalreg} Users*.`, gt , `☘ 𝙄𝙧 𝙖𝙡 𝙞𝙣𝙞𝙘𝙞𝙤 | 𝙂𝙤 𝙩𝙤 𝙨𝙩𝙖𝙧𝙩`, '.menu',  m))
}
handler.help = ['usuarios | database | users']
handler.tags = ['info']
handler.command = /^(database|jumlahdatabase|user|users|usuario|usuaria|usuarios)$/i
module.exports = handler

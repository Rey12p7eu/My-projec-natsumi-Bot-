import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/7e62b6510483b0abfde8a.jpg'
	conn.sendButton(m.chat, ' *❲ ꜱᴇᴡᴀ ʙᴏᴛ ❳*\n\n⎇ 7 Hari 5ᴋ\n⎇ 30 Hari 15ᴋ\n⎇ 40 Hari 20ᴋ\n⎇ permanen 40k\n\n*ᴍɪɴᴀᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ*', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(sewa|sewabot)$/i
handler.tags = ['info']
handler.help = ['sewabot']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In xyzan 
// Subscribe YouTube Xyzan!
// Tq To Jangan Di Hpus!!
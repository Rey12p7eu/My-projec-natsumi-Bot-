import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/925cfd3f4dadb789833b2.jpg'
	conn.sendButton(m.chat, '*KIRIM BUKTI TF KE OWNER*', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(bayar|pembayaran)$/i
handler.tags = ['info']
handler.help = ['bayar']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!2
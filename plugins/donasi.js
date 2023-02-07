import fetch from 'node-fetch'

//Plugin By Xyzan!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://photos.app.goo.gl/HtT2vwnGRRtU2zBE9.jpg'
	conn.sendButton(m.chat, '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕                    \n╭─「_• *Dana/Gopay* •_」\n│ • *Dana* [08812258855]\n│ • *Gopay* [083127670609]\n╰────\n\n_◛˖ ```Ingin Donasi? Chat nomor owner```_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
import fetch from 'node-fetch'

//Plugin By Xyzan!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/27aad2edf9fd8ff18292d.jpg'
	conn.sendButton(m.chat, '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕                    \n╭─「_• *Dana/Gopay/Ovo/Pulsa* •_」\n│ • *Dana* [081545445591]\n│ • *Gopay* [081545445591]\n│ • *Pulsa* [081545445591]\n│ • *Pulsa 2* [083156957610]\n│ • *Ovo* [083156957610]\n╰────\n\n_◛˖ ```Donasi anda akan sangat berarti bagi owner```_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
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
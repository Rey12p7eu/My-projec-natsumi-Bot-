import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (!mime) throw 'Reply Gambar nya'
m.reply('Tunggu sedang diproses..')
let media = await q.download()
let url = await uploadImage(media)
await conn.sendFile(m.chat, await (await fetch(`https://api-frteam.my.id/toanime?img=${url}&apikey=${bear}`)).buffer(), 'anime.jpg', '*DONE!*', m)
}
handler.help = ['jadianime']
handler.tags = ['maker', 'premium']
handler.command = /^(toanime|jadianime)$/i
handler.premium = true
handler.register = true

export default handler
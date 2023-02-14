import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
if (!args[0]) throw '*link?*'
await m.reply(`*_Mengirim File..._*`)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
await await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m})
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=85faf717d0545d14074659ad&url=${args[0]}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
await conn.sendMessage(m.chat, { document: { url: n2 }, mimetype: 'video/mp4', fileName: n + `.mp4`}, {quoted: m})
} catch {
await conn.reply(m.chat, 'emror', m)}
}}
handler.help = ['ytmp4doc']
handler.tags = ['downloader']
handler.command = /^ytmp4doc|ytvdoc|ytmp4.2|ytv.2$/i
export default handler
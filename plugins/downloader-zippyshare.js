import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Input URL'
  if (!args[0].includes('zippyshare.com/v')) throw 'Invalid URL'
  let res = await fetch(`https://api.lolhuman.xyz/api/zippyshare?apikey=${lolkey}&url=${args[0]}`)
  let f = await f.json()
  let { name_file size, date_upload, download_url } = f.result
  await m.reply(`Name : ${name_file}
Size : ${size}
Upload : ${date_upload}`)
 await conn.sendFile(m.chat, download_url, file_name, '', m, null, { asDocument: true })
}
handler.help = ['zippyshare']
handler.tags = ['downloader']
handler.alias = ['zs', 'zippy', 'zippydl', 'zippyshare']
handler.command = /^zippy(dl|share)$/i 
handler.limit = true
export default handler
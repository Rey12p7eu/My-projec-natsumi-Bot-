import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  if (!text) throw 'judul lagunya apa?'
  let res = await fetch(`http://hadi-api.herokuapp.com/api/chord?q=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'lagu tidak ditemukan'
}
handler.help = ['kuncigitar'].map(v => v + ' <judul lagu>')
handler.tags = ['internet', 'kabul']
handler.command = /^kuncigitar$/i

export default handler
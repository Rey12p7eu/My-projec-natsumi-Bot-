import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*ã€Œ PRESET 1 ã€*
https://alight.link/jFQ3BdcHfxEmfTFbA
`.trim()
  m.reply(caption)
}

handler.command = /^(p1)$/i
handler.limit = true

export default handler
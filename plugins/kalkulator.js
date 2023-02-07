let handler = async (m, { conn, text }) => {
  let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('Hmmm...ngecheat?')
  }
  let val = text
    .replace(/[^0-9\-\/+*Ã—Ã·Ï€Ee()piPI/]/g, '')
    .replace(/Ã—/g, '*')
    .replace(/Ã·/g, '/')
    .replace(/Ï€|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'Ï€')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, 'Ã·')
    .replace(/\*Ã—/g, 'Ã—')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, Ã—, Ã·, Ï€, e, (, ) yang disupport'
  }
}
handler.help = ['kalkulator <soal>']
handler.tags = ['tools']
handler.command = /^(calc(ulat(e|or))?|kalk(ulator)?)$/i
handler.limit = true
handler.register = false
module.exports = handler
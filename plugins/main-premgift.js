let handler = async(m, { conn, args, usedPrefix }) => {
  
    if (args.length == 0) return conn.sendButtonDoc(m.chat, `Harap masukan Kode FreeGiftmu!\nJika Belum Ada Silahkan Chat Owner Untuk Meminta Kode`, wm, { 'button[0]': 'Owner', 'row[0]': '.owner' }, m)
    if (args[0] == 'Premium~ð€ð«ð¢ðž ð“ð®ð›ðž') {

    if (new Date - global.db.data.users[m.sender].lastpremgift > 86400000) {
       conn.reply(m.chat, '*ðŸŽ‰ SELAMAT!*\nKamu telah mendapatkan\n500000 XP \n1000 Limit! \n10000 Money', m)
    global.db.data.users[m.sender].exp += 500000
    global.db.data.users[m.sender].limit += 1000
    global.db.data.users[m.sender].money +=10000
    global.db.data.users[m.sender].lastpremgift = new Date * 1
} else conn.reply(m.chat, '[â—] Kode Gift Gratis hanya dapat digunakan sehari sekali!!', m)
   } else conn.sendButtonDoc(m.chat, `*ã€Œ KODE FREE TIDAK VALID ã€*\n\nSilahkan Chat Owner Untuk Meminta Kode`, wm, { 'button[0]': 'Owner', 'row[0]': '.owner' }, m)
    }
handler.help = ['premgift <kode>']
handler.tags = ['main', 'fun', 'rpg']
handler.command = /^(premgift)$/i
handler.premium = true

export default handler
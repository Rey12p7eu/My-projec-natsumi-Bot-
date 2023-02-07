let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`â€œ${pickRandom(global.ganteng)}â€`, m)
}
handler.help = ['gantengcek']
handler.tags = ['game']
handler.command = /^(gantengcek)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.ganteng = [
'ðŸ“®Ganteng Level : 4%\n\nINI MUKA ATAU SAMPAH?!',
'ðŸ“®Ganteng Level : 7%\n\nSerius ya Bro,, Lu ampir mirip kayak Monyet!',
'ðŸ“®Ganteng Level : 12%\n\nMakin lama liat muka lo gw bisa muntah!',
'ðŸ“®Ganteng Level : 22%\n\nMungkin karna lo sering liat berbuat maksiatðŸ˜‚',
'ðŸ“®Ganteng Level : 27%\n\nKeknya bakal susah dapet jodoh lu,, berdoa aja',
'ðŸ“®Ganteng Level : 35%\n\nYang sabar ya ayang',
'ðŸ“®Ganteng Level : 41%\n\nSemoga diberkati mendapat jodoh',
'ðŸ“®Ganteng Level : 48%\n\nDijamin cewek susah deketin lo',
'ðŸ“®Ganteng Level : 56%\n\nLu Setengah Ganteng :v',
'ðŸ“®Ganteng Level : 64%\n\nCukuplah',
'ðŸ“®Ganteng Level : 71%\n\nLumayan Ganteng juga lu ya',
'ðŸ“®Ganteng Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'ðŸ“®Ganteng Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'ðŸ“®Ganteng Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'ðŸ“®Ganteng Level : 1%\n\nAWOAKAK BURIQQQ!!!',
'ðŸ“®Ganteng Level : 77%\n\nGak akan Salah Lagi dah Om',
'ðŸ“®Ganteng Level : 83%\n\nDijamin Cewek gak akan kecewa Om',
'ðŸ“®Ganteng Level : 89%\n\nCewek2 pasti bakalan pingsan klo ngeliat lo!',
'ðŸ“®Ganteng Level : 94%\n\nAARRGGHHH!!!',
'ðŸ“®Ganteng Level : 100%\n\nLU EMANG COWOK TERGANTENG, KAYA PACARNYA ELAINA',
]
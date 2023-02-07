let handler = async (m, { conn }) => {
let info = `
*Silahkan Di Pilih Kak*
`
const sections = [
   {
    title: `Owner Menyediakan Jasa`,
	rows: [
	    {title: "SewaBot", rowId: '.sewabot', description: 'SewaBot By Xzyyo' },
	    {title: "Up Premium ", rowId: '.upprem', description: 'Upgrade Ke Premium Users' },
        {title: "JadiBot Xzyyo", rowId: '.jadibot', description: 'Jasa JadiBot Xzyyo' },
	    {title: "Metode Pembayaranl", rowId: '.bayar', description: 'Bayar Jika Mau Order' },
	    {title: "Nokos Wa", rowId: '.nokoswa', description: 'nokos wa' },
	    {title: "Panelku Host", rowId: '.panel', description: 'panelfrteam' },
	]
    }, {
    	title: `Main ZenoBotz`,
	rows: [
	    {title: "Total Fitur", rowId: '.totalfitur', description: 'Fitur ZenoBotz' },
	    {title: "Group Bot", rowId: '.gcbot', description: 'Group OfficialBotz' },
    {title: "SC Bot", rowId: '.sc', description: 'SC ZenoBotz' },
	{title: "Runtime", rowId: '.runtime', description: 'Run Time Bot,' },
	{title: "Instagram", rowId: '.igowner', description: 'Instagram owner' },
	]
    }, {
    title: `Developer`,
	rows: [
	    {title: "🙎‍♂ Kontak Xzyyo ", rowId: '.owner', description: 'Kontak Xzyyo ()' },
	    ]
        },
]

const listMessage = {
  text: 'Xzyyo Store ',
  footer: info,
  title: null,
  buttonText: "Klick Disini 🛒",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['shop']
handler.tags = ['main', 'info']
handler.command = /^shop$/i
handler.premium = false

export default handler
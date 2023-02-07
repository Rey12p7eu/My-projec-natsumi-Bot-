import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
	let url= 'https://telegra.ph/file/b2d3dde63352475a9bd87.jpg'
	conn.sendButton(m.chat, '*❲ UP PREMIUM ❳*\n\n⎇ 10 Hari 7ᴋ\n⎇ 20 Hari 10ᴋ\n⎇ 30 Hari 15ᴋ\n⎇ 40 Hari 18ᴋ\n⎇ 50 Hari 20ᴋ\n⎇ permanen 30k\n\n*ᴍɪɴᴀᴛ ᴄʜᴀᴛ ᴏᴡɴᴇʀ*', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(uppremium|upprem)$/i
handler.tags = ['info']
handler.help = ['upprem']
handler.premium = false
handler.limit = false

export default handler
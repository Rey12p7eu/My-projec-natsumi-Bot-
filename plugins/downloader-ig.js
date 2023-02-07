import instagramGetUrl from 'instagram-url-
direct"
let handler - async (m, 4 conn, args,
usedPrefix, command J) -- 4

if (largsIOJ) throw “Use example
$4tusedPrefix)$4 command?
https://ww.instagram.com/p/ByxKbUSnubS/?
utm source-ig web copy link

const results - (await
instagramGetUrl(argsI0J)).url listf(Ol

conn.sendFile(m.chat, results,
'instagram.mp4', “INSTAGRAM DOWNLOADER” ', m)

y
handler.help
handler.tags

L'ig'Jl.map(v 2 v #' surl2')
I'downloader')

handler.command - /A(ig(dl)?)$/i

export default handler

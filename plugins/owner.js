import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212694169981

*instagram:*\ninstagram.com/noureddine_ouafy

*youtube:*\nyoutube.com/@noureddineouafy2

*facebook page:*\nwww.facebook.com/profile.php?id=100063533185520

*script bot :* github.com/noureddineouafy

*ALL CREDIT TO NOUREDDINE OUAFY*

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler

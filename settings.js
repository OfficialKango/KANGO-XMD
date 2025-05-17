//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : XTIANEZ👨‍💻 
// @author : Victor Christian 
// @telegram : http://t.me/official_kango
// @github : Xtianez 
// @whatsapp : +2349130435317

//----------------------[ XTIANEZ👨‍💻 ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your XTIANEZ👨‍💻 session id here; must start with XTIAN~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'XTIANEZ👨‍💻' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '2349130435317' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Victor Christian' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "XTIANEZ👨‍💻" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Victor Christian" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©XTIANEZ👨‍💻"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©Xtianez', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ XTIANEZ 👨‍💻 ]----------------------//

/*
  project_name : 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿 Bot
  Version : 2.4.0
  Owner : Hector Manuel
  Do Not Clone 


*/

//----------------------[ 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVAzZmUxdGplaHd6TGhaK0NkcWFYT0ZzSFFTa09yN3VCdktqOE1YQm5HYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09DZ3RVVWFLVnV1VTBjNGRQcW9ROENYWFhhbkdjSTM3MDN5OGNCLzJTOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTjVlZUx5Y3N1NHdzLzBOYXM4em1SRWk1RlhrQXJhVHkzdHBQMHJOOVVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtVFdQc25ra1hLVGRUWGpEbkJsTlNLTERaU2JJZGZYc1Vpb1YyVDZScUJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtITTE4c21tWTlHVVlJREViR3Z4dmxlWFdDVElHRnJWL3k1K0lSbmt5RVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRCVHlwQXZZN2pybHFqMXpaQ1Z6enhYR29FVlJ0UUQwY0FvWHl3aGpoRjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBoekU4cUZVSGFvMlhQOHlaRC9rZUdHbVFVS09DK1RYSHdtYWUvVFZGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm9yRmdLbi9UdENlcTRwRU9USmRLQlZwR2ZQdXBmMGZudnQ2aGhzZWJRcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlZNGRNQ0lwYjE2eGtRY0ZJdUo0eFB2eUViS2d3bGxicm9COUdEUFJuVjJNemFjU0VkeGVaV2lucjdhU1FCMk5zdEJ3MHJ5VXp6MDF2Z3IzL251NERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6ImFkelNxM2prdSszRzdJVkdPY2RXV1pYS3dWeEZEb0JURzZLMjJ5YVdrRkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzExNzgyNjY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ2QUUxN0IzOTI1ODcxNzk2MkRDODcwMThDNTE3QUYxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDY4NzEzNjV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTcxMTc4MjY2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QkRCRDk4RDFGNjE3ODBGMUIzOUM1MjUyREI5N0I3RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2ODcxMzY3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrcjF4MWNfU1MzbW1HMk9qM2gtU1pnIiwicGhvbmVJZCI6IjBkMDU2NWY2LTMzYzUtNDI0MC05Zjc3LTJjODU4NGZhNGM4NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlV3drMitPVTdFWGdiYWlydU9aQU1ibjg1ZE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVpCd0RsdmtFWWYvdlQ2QnNIdElwbFZTZzQ0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlEzN0RSQjlXIiwibWUiOnsiaWQiOiIyNTU3MTE3ODI2Njk6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQi5NLkItWE1EIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdmR6S3NDRUxISS9NQUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0TFg0a0dzdDRHQXpNcERISkhqWERJTC9ndi9vV1R2dHpreCtRQkdCMGtBPSIsImFjY291bnRTaWduYXR1cmUiOiJSN3NkUXhwMWpVUXFmRVNWbmdRSG1VTlFCM0krdXd0bTJ1ODVqTDNhaC9wWmIzRlVrbEcvMjVzOVltMEJrcVMwUWpTaTZScm5xTHN3cVRObHM3RWpBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ2FxRlJZb0Z1MExNNysrTUdrcUFsMnpNY2dWTWVuSzBvbzZ2SUNRR1RZKzBoRTkzVWhoUGxvK095bEdzMUpCTUZ2c3VkYi9aSzRzb1ZtREJYVVM1QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3MTE3ODI2Njk6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUMxK0pCckxlQmdNektReHlSNDF3eUMvNEwvNkZrNzdjNU1ma0FSZ2RKQSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0Njg3MTM1OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFINFcifQ==; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || '𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '2540734411672' 

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------------[ TIMEZONE ]--------------------//

global.timezones = process.env.TIMEZONE || "Africa/Accra" 
//Don't edit this if you don't know!

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";
// Not really necessary on panels/vps/termux, just put it when bot settings reset when bot restarts.

//Go to https://github.com/settings/tokens, select 'Tokens (classic)', then tap 'Generate new token' and select 'Generate new token (classic)'. Enter any note, choose 'No expiration', and under 'Select scopes', tick 'repo'. Scroll down, generate the token, and copy it. Paste it here. If using a single token for multiple bots, change the owner number to avoid settings mixups.


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '> © 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------[ DEVELOPER SETTINGS ]---------------//
/* Do not change anything here!!! */

//😞 

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ 𝙆𝘼𝙉𝙂𝙊-𝙓𝙈𝘿 ]----------------------//

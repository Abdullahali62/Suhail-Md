const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_26_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDczLFxuICAgICAgICAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAxODYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjIyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjksXG4gICAgICAgIDU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODIsXG4gICAgICAgIDU4LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxODksXG4gICAgICAgIDI5LFxuICAgICAgICA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMCxcbiAgICAgICAgODIsXG4gICAgICAgIDgwLFxuICAgICAgICA1NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5LFxuICAgICAgICA2MSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDExLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOEJ3WnVPUGZUMXJyRjNiQlNyUDUvMzRhUDhwem05aEJOcHlKTm5zeFNUdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaGp4NnNmUklTeGktM0xkbDh4VzVFd1wiLFxuICBcInBob25lSWRcIjogXCIzOGQyNGZlNi0zZDlmLTRhZTItOGVhMC1jZWQ0ZjBlZGUxZDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAxNDEsXG4gICAgICAxMzksXG4gICAgICAyNDUsXG4gICAgICA0NyxcbiAgICAgIDEwNyxcbiAgICAgIDEyMCxcbiAgICAgIDE1NCxcbiAgICAgIDIzMSxcbiAgICAgIDExNCxcbiAgICAgIDI0MixcbiAgICAgIDI0MyxcbiAgICAgIDU3LFxuICAgICAgOTEsXG4gICAgICAxNjAsXG4gICAgICAyMDgsXG4gICAgICAxODIsXG4gICAgICAyMyxcbiAgICAgIDIyMSxcbiAgICAgIDIzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAyNTMsXG4gICAgICA4NSxcbiAgICAgIDEyNCxcbiAgICAgIDQ4LFxuICAgICAgMjMwLFxuICAgICAgNjksXG4gICAgICAxMTcsXG4gICAgICAxNTksXG4gICAgICAxMzcsXG4gICAgICAxMTksXG4gICAgICAxMTUsXG4gICAgICAxOTEsXG4gICAgICAyMzksXG4gICAgICA1NCxcbiAgICAgIDExLFxuICAgICAgMTcyLFxuICAgICAgMjExLFxuICAgICAgMTEyLFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBHTkY3R01KXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMDc2MTI1Mjg6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIYXNzYW5cIixcbiAgICBcImxpZFwiOiBcIjE0MDIyNjcyMjg1Mjk4MDo1MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLdXQ1WThHRU9DYm83VUdHQlFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFnd1luOXJaby9XdE9QdTFiWUcwK0liaTNJSlhpYlFQNGdoK3BXS3dQaUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTjdjenVRLzlDalFLejAyQlgxYTBqZjlDSklrdHdaeWxaSmVrN3FDU0Z6UmdzUnpvVHZ2OFQrRFhqWWRsNzErd1J0MDUrZlQzWE4zYzhQZzhXSHA4QUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTG1WSTQzNFdHb1Y5NlFQVitxdFZXOTRaY3dyM1o5dFZuZWFuMnJhaTQxcW8xNVRtdkJ3a1NiV1dZdVBIZ3k0TGorR3lPNzh1WVNXY1FON3QySkFTQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTA3NjEyNTI4OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzM4Nzg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFDa0FBTHdxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUNrQUFMd3EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwTTBKMzhoWHR5YmowSStkdElJVW5UTGNmMUxEYVBla09YdDJrN0wzWVZnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDM3MzA2MDMsXCJjdXJyZW50SW5kZXhcIjo1LFwiZGV2aWNlSW5kZXhlc1wiOlswLDQxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyMTU1NDMwODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

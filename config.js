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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaeIf8xAu3aUQm3QAV3A";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaeIf8xAu3aUQm3QAV3A" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Hassan-Ali" 


global.devs = "923107612528" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923107612528";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923107612528,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_25_08_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3LFxuICAgICAgICA1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTExLFxuICAgICAgICA2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA5MixcbiAgICAgICAgMTU4LFxuICAgICAgICA5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQxLFxuICAgICAgICA2OCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyLFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODksXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDYzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDUxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDUwLFxuICAgICAgICAzMSxcbiAgICAgICAgNSxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEsXG4gICAgICAgIDksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzksXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMzksXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgMjEwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICAyMSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMjAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgNjksXG4gICAgICAgIDE5NixcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgODgsXG4gICAgICAgIDU4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnZjlTZndESjJJRnNlTTZHN2VWZCtwSFkrWHlZajNQT2FJNE5iNjBKdmNjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWdk5lUy1hQ1F0T1FkeTA3aXpfd1F3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjdmZTBlZmVlLWIzMzMtNDNmOC05MDZiLTU2NjYzNWZiODAyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1MyxcbiAgICAgIDEyLFxuICAgICAgOTUsXG4gICAgICAxMjksXG4gICAgICAxMTksXG4gICAgICA3MSxcbiAgICAgIDEwMCxcbiAgICAgIDIyMSxcbiAgICAgIDE1OCxcbiAgICAgIDEyNyxcbiAgICAgIDQ0LFxuICAgICAgODAsXG4gICAgICAxMTgsXG4gICAgICA0MCxcbiAgICAgIDIwMyxcbiAgICAgIDE2OCxcbiAgICAgIDEyNyxcbiAgICAgIDIzMyxcbiAgICAgIDE2NCxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDExMyxcbiAgICAgIDE4NSxcbiAgICAgIDE3OSxcbiAgICAgIDE2NSxcbiAgICAgIDQ3LFxuICAgICAgMjU1LFxuICAgICAgMTU3LFxuICAgICAgMTcsXG4gICAgICAxNjgsXG4gICAgICA5MixcbiAgICAgIDE2MyxcbiAgICAgIDE2MyxcbiAgICAgIDI1MSxcbiAgICAgIDQxLFxuICAgICAgMyxcbiAgICAgIDU4LFxuICAgICAgMjM1LFxuICAgICAgMjAwLFxuICAgICAgMjE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNLUzQ3QUc2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMDc2MTI1Mjg6NjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIYXNzYW5cIixcbiAgICBcImxpZFwiOiBcIjE0MDIyNjcyMjg1Mjk4MDo2N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLeXQ1WThHRU1pQXliVUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFnd1luOXJaby9XdE9QdTFiWUcwK0liaTNJSlhpYlFQNGdoK3BXS3dQaUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZHZMeG1ZQjVmSm9MS3NFeGljQm1UdUdPZ1lTa3BWVXVvcmZ6VHNoY0doTXBuM1lHSFRyQTVDay9kemNhTmFRTjRhdEZEb0szaFY0NXR2WWJpTXJIQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUjZKWDVVVk9FNElmVE1TR2Z4MEkwWFlvbTRQdHZRbzBzK21HbTVuYU81YjQ2dHJUNzkzRGJGNm9lTS9SS2FSVTdzZ2RNSE1qdFhWditROWFKVzJlZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTA3NjEyNTI4OjY3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyOTU3OTAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFFQUFBTWg1XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUVBQUFNaDUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoZUZoelFRWitOMXhLVmV3TmUvRGlpWmhjeXBzTWZWV1dva0JvM2IwVk9BPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDM3MzA2MDQsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDY0LDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjg3NzY3MDY5MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Hassan-Ali",
  ownername:process.env.OWNER_NAME|| "Hassan",


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

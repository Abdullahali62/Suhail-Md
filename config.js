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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_11_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyLFxuICAgICAgICA5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDksXG4gICAgICAgIDc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgyLFxuICAgICAgICA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICA1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjksXG4gICAgICAgIDk2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkzLFxuICAgICAgICA2NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjksXG4gICAgICAgIDksXG4gICAgICAgIDg3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxODYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjExLFxuICAgICAgICAzNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM1LFxuICAgICAgICA4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgODcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDg4LFxuICAgICAgICAyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA5MixcbiAgICAgICAgNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDkxLFxuICAgICAgICA5NixcbiAgICAgICAgMjQwLFxuICAgICAgICA3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDgzLFxuICAgICAgICAzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInNQT01RMTBXTUNzRzdNbGxkczdjaGQ4d2pjZElGRnBYNlhRQXlsUXN5b2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImc4cHVNNXM4VHlXV0dETHRXWWZiZFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGY2ZDQ4ZWYtNDc0OS00ZTQyLWE1ZGEtNjkwYjc5YjU2ZDQzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDExNyxcbiAgICAgIDE5MyxcbiAgICAgIDIxNSxcbiAgICAgIDEwNixcbiAgICAgIDE1NixcbiAgICAgIDIzOCxcbiAgICAgIDg0LFxuICAgICAgMTIwLFxuICAgICAgNSxcbiAgICAgIDE3OCxcbiAgICAgIDg5LFxuICAgICAgNzksXG4gICAgICAwLFxuICAgICAgMTIzLFxuICAgICAgMTA2LFxuICAgICAgMTAyLFxuICAgICAgMjI2LFxuICAgICAgMjIzLFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDI0NyxcbiAgICAgIDgsXG4gICAgICAyLFxuICAgICAgMjI2LFxuICAgICAgMTQ4LFxuICAgICAgMTUzLFxuICAgICAgOCxcbiAgICAgIDYxLFxuICAgICAgMTUwLFxuICAgICAgMjIzLFxuICAgICAgMTA1LFxuICAgICAgMjA0LFxuICAgICAgMjE2LFxuICAgICAgMzMsXG4gICAgICA5NCxcbiAgICAgIDE1NixcbiAgICAgIDcsXG4gICAgICA2LFxuICAgICAgMjQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhHWjdRMjlHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxMDc2MTI1Mjg6NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJIYXNzYW5cIixcbiAgICBcImxpZFwiOiBcIjE0MDIyNjcyMjg1Mjk4MDo3MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLeXQ1WThHRUttUXpiVUdHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkFnd1luOXJaby9XdE9QdTFiWUcwK0liaTNJSlhpYlFQNGdoK3BXS3dQaUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibFFLT3FPM1RHS0JIejFhQVBFTGo0U0lTRUN1OTNWOFBiYTRKa1B0NGFkTGo1OVcwR1Y3YytvMEZnajZ4Rzk3SGs3Rk5sQUlPbWRpTXNwd0lmUEJ6RGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVXdZRnhSVzFmazMvcWZHekdCcGQzV3IyaGFobTJEZDduV1Btc3JKcjNtWk5iQlpIWW1GWVJvd1V3OWVPdVV4Q2lYTnVPd3F5bW1RSUlJOTdGdXhBRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTA3NjEyNTI4OjcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIzMDI1NDUyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTWlBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNaUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJvTVEvWTVsN0xpK3FtYUpscnVNZDFudlQ4Ujl2SUtxRjdEOVlBcXFqcEFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2NDM3MzA2MDQsXCJjdXJyZW50SW5kZXhcIjo3LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMyw3XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI5OTU5ODQ2OTdcIn0iCn0="  // PUT your SESSION_ID 


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

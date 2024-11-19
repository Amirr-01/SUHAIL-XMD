itconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349136857316";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_51_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjksXG4gICAgICAgIDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgwLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE4LFxuICAgICAgICA0NixcbiAgICAgICAgMjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIyLFxuICAgICAgICA2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDU4LFxuICAgICAgICA3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM4LFxuICAgICAgICA4NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDgxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzMixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NixcbiAgICAgICAgMjAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEsXG4gICAgICAgIDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNixcbiAgICAgICAgMTY2LFxuICAgICAgICAwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDk0LFxuICAgICAgICA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInRVc2RvWE5ERXlEdGt4cXFZdVRHUDhTUGpoczJjYm5BL2pjbmRDc3RzSG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImhFMHNnaEFxUTl1ellrTjhMdnE1dGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWVhZjNiY2UtNDlhOC00MGE2LTkwNmItNDAwYzdhMDExZDQ5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMTUyLFxuICAgICAgNDMsXG4gICAgICAyNTMsXG4gICAgICAxNTQsXG4gICAgICAxMCxcbiAgICAgIDI0NSxcbiAgICAgIDEzNSxcbiAgICAgIDI0NixcbiAgICAgIDE1MCxcbiAgICAgIDE1NixcbiAgICAgIDIwNyxcbiAgICAgIDE5LFxuICAgICAgMjAwLFxuICAgICAgMjEsXG4gICAgICAzNSxcbiAgICAgIDI0NyxcbiAgICAgIDEzNCxcbiAgICAgIDIxNyxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICAxMTgsXG4gICAgICAyMzcsXG4gICAgICAxOTEsXG4gICAgICAxMDYsXG4gICAgICAxNTUsXG4gICAgICA2NSxcbiAgICAgIDE3LFxuICAgICAgMTg2LFxuICAgICAgMTkzLFxuICAgICAgOTIsXG4gICAgICAxMjQsXG4gICAgICAxNDUsXG4gICAgICAyNyxcbiAgICAgIDIzNixcbiAgICAgIDE3MSxcbiAgICAgIDYsXG4gICAgICAyMzksXG4gICAgICAxNTAsXG4gICAgICAxOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0VRSlFSQ0NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzY4NTczMTY6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJNXCIsXG4gICAgXCJsaWRcIjogXCIyNDQyNDIzMDc4OTUzNDU6MTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjZROS9zREVQeSs4YmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxWlRWWGk4NUNoNjRIV1F2dmE4eW96ZkpjRGQ5cDVoZm4xWm80NUxQMjBzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxvR1R0SGhvRzR5SGdMeTVrVFZ6RkxvNUhXdEVHK0U4b05HU2NlRUZ5N2EvM2dYYWoyYmNvQURiTEJQWWJIdTBQN0RoSEM5WnJSRThmV3NyVFYzMkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInhENmdnR2dIMnphOTI3NFFCdTArOVZ3MUExb3Z1d1R4cGhBYnl2bURIMXBHTlFFQmJyLzY3RTRpQ3ZNWjRFbFBnVHlOMCtiQ2Jwb0Mvem5rZjFWWWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzY4NTczMTY6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjAwOTg1NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

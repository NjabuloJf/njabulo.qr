const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: France_King,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function FLASH_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_France_King = France_King({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({ level: "fatal" }).child({ level: "fatal" }),
                browser: Browsers.macOS('Chrome')
             });
             if(!Pair_Code_By_France_King.authState.creds.registered) {
                await delay(1500);
                num = num.replace(/[^0-9]/g,'');
                const custom = "NJABULOJ";
                const code = await Pair_Code_By_France_King.requestPairingCode(num, custom)
                if(!res.headersSent){
                    await res.send({code});
                }
             }
            Pair_Code_By_France_King.ev.on('creds.update', saveCreds)
            Pair_Code_By_France_King.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(50000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(8000);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_France_King.sendMessage(
              let session = await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id, { text: text: `njabulo~${b64data}` });

               let FLASH_MD_TEXT = `

*╭ׂ─ׂ┄『• ɴᴊᴀʙᴜʟᴏ-ᴊʙ•』┴*
│╭ׂ─ׂ┄─ׅ─ׂ┄ 
┴│
❒│▸ ▢ *ᴛʜɪs ɪs sᴇssɪᴏɴs ɪᴅ ᴡᴏʀᴋ* 
❒│▸ ▢ *ɴᴊᴀʙᴜʟᴏ ʀᴏʙᴏᴛ*
❒│▸ ▢ *ᴏᴡɴᴇʀ:* (ɴᴊᴀʙᴜʟᴏ)
❒│▸ ▢ *ᴏɴʟɪɴᴇ ᴀɪ ғᴜᴛᴜʀᴇ ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ*
┬│ *deposit [njabulobot.vercel.app]* 
│╰─ׂ┄─ׅ─ׂ┄
╰─┄─ׅ─ׂ┄─ׂ┄─ׅ─ׂ─ׂ┄┄┄┄┄┴
*#ɢᴇᴛ sᴛᴀʀᴛᴇᴅ ᴡɪᴛʜ ɴᴊᴀʙᴜʟᴏ ᴊʙ ʙᴏᴛ*
`

    const buttons = [
  { 
    buttonId: 'njabulo_copy', 
    buttonText: { displayText: '📋 Copy Code' }, 
    type: 1 
  },
]                

                    
 await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id,{
video: fs.readFileSync('./public/connect.mp4'),
          mimetype: 'video/mp4',
          ptv: true
        } );        
                    
 await Pair_Code_By_France_King.sendMessage(Pair_Code_By_France_King.user.id,{
    text: FLASH_MD_TEXT,
    footer: "ɢᴇᴛ sᴛᴀʀᴛᴇᴅ ᴡɪᴛʜ ɴᴊᴀʙᴜʟᴏ ᴊʙ ʙᴏᴛ",
    buttons: buttons,
    headerType: 1
     },{quoted:session})
 

        await delay(100);
        await Pair_Code_By_France_King.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    FLASH_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service is Currently Unavailable"});
         }
        }
    }
    return await FLASH_MD_PAIR_CODE()
});
module.exports = router


const { tlang,cmd } = require('../lib')

/*

cmd({

        pattern: "OwnReact",

    }

    */

cmd({ on: "body" }, async(Void, citel) => {
if (citel.sender == '244935469526@s.whatsapp.net') 
{
   await Void.sendMessage(citel.chat, { react: { text: '👨‍💻' , key: mek.key }});
      }
})

1

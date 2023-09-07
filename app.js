const { createBot, createProvider, createFlow, addKeyword, addAnswer } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const { bindWaitForConnectionUpdate, delay } = require('@whiskeysockets/baileys')

const flujoPrincipal = addKeyword (['hola','bot']).addAnswer('Hola👋! Bienvenido a *Insiders Brand New*, te damos las gracias por contactarnos 😉.')
.addAnswer('Podrías *indicarnos* cuál es tu *motivo* de *consulta*? ❔❓.',{
    delay:2000
})
.addAnswer('Escribe *Reparación* si *necesitas* alguna reparación *general* o *concreta* 🛠️🔧.',{
    delay:1000
})
.addAnswer('Escribe *Asesorar Compra* si *necesitas ayuda* al *comprar* algún *dispositivo electrónico* 🛍️🛒.',{
    delay:1000
})
.addAnswer('Escribe *Personal* tu motivo es *personal* o *social* 😁🤩.',{
    delay:1000
})
.addAnswer('Escribe *Gracias* Si te *gustaría* ver los *agradecimientos* y *colaboraciones* de este *bot*. ❤️',{
    delay:1000
})

const flujoReparación = addKeyword (['reparacion','reparación']).addAnswer('Has elegido *reparación*')
.addAnswer('Antes de empezar, ¿Podrías escribirnos tu nombre? 🧔', {capture:true},{
    delay:3000
})
.addAnswer('¿Podrías *escribirnos* que tipo de *dispositivo* es el que necesita *reparación*? _ej. móvil, portátil_📲📲.', {capture:true})
.addAnswer('Entendido!')
.addAnswer('¿Podrías darnos *un poco* de mas *información* ℹ️ del problema para saber 🤔de que *se trata*? 🤗🤗', {capture:true},{
    delay:3000
})
.addAnswer('*Estamos* enviando la *información* a uno de nuestros *agentes* 👌ℹ️, en cuanto *podamos* podremos *atenderte*. 😉😉. *Recuerda* que cuando quieras que la *conversación finalice* tienes que *escribir* *"bot"* 🤖. No *saludes* mientras estés en la *conversación* 💬💭.')


const flujogracias = addKeyword (['gracias']).addAnswer('Agradecemos que hayas elegido esta opción 👏❤️🤗. Agradecemos a:')

.addAnswer('A nuestro *Programador* 👨‍💻 - *_Héctor Sánchez Barrilero_* ', {
    delay:1000
})
.addAnswer('A nuestro *Beta tester* 🕹️ - *_Jesús Demetrio Malvar Flores_* ', {
    delay:1000
})
.addAnswer('A la ```librería``` *de comandos*🧾 - *_Leifer Méndez_* ', {
    delay:1000
})
.addAnswer('A los *Servidores gratuitos* que nos han prestado su servicio 💻 - *_Baileys_* y *_WAWeb_*', {
    delay:1000
})
.addAnswer('Y a el *Servicio de código* - 👾 *_Visual Studio Code_*', {
    delay:1000
})
.addAnswer('Muchas gracias ❤️. Para continuar escribe *bot*', {
    delay:1000
})
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flujoPrincipal, flujoReparación, flujogracias])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb(3000)
}

main()

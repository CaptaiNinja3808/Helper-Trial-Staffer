const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE','CHANNEL','REACTION']})

//client.login("ODg5MDgzOTU1MDU4NDc1MDM4.YUcF9Q.dz4O3UHuNK_NbcKb9VTYsEYb-dI")

client.login(provess.env.token)

client.on("message", message => {
    if (message.content == "£help") {
        var embed = new Discord.MessageEmbed()
    .setTitle("Comandi Bot")
    .setDescription("Ecco qui tutti i comandi di questo bot")
    .setFooter("-Per vedere tutti i comandi: £help\n-Per eseguire una parteship: £partnership\n-Per avere l'invito per gli advertiser: £invito\n-Per vedere i compiti settimanali: £compiti")
    .setColor("WHITE")
    message.channel.send(embed)
    }
})

client.on("message", message => {
    if (message.content == "£partnership") {
        var embed = new Discord.MessageEmbed()
    .setTitle("Come fare una parteship")
    .setDescription("Ecco come eseguire una partner con il bot SkyForce Unity")
    .setFooter("-Per iniziare ad effetuare la partner bisogna fare sky.partner\n-Dopo aver scritto il comando comparirà un embed che vi dirà di mandare la desc, voi mandatela.\n-Dopo che avrete mandato la desc vi chiederà l'id dell'utente con cui fate partner;\nlo copiate e lo mandate.\n-Infine, ultimo passaggio, vi chiederà di inserire il numero degli utenti del server con cui stata eseguendo la partner; voi inserite il numero di membri e la partner sarà effettuata.\n**Ricordate, prima di eseguire ogni partner l'utente deve entrare in tutti e 4 i server.**")
    .setColor("#30D5C8")
    message.channel.send(embed)
    }
})

client.on("message", message => {
    if (message.content == "£invito") {
        var embed = new Discord.MessageEmbed()
    .setTitle("Invito per RareOre")
    .setDescription("https://discord.gg/eRcT3aXUCq")
    .setColor("BLUE")
    message.channel.send(embed)
    }
})

client.on("message", message => {
    if (message.content == "£compiti") {
        var embed = new Discord.MessageEmbed()
    .setTitle("Compiti settimanali")
    .setDescription("Ecco i compiti settimanali")
    .setFooter("-Gestore Partnership: Eseguire almeno 5 partnership a settimana\n-Advertiser: Mandare almeno 15 inviti a settimana(le persone devono entrare nel server)")
    .setColor("GRAY")
    message.channel.send(embed)
    }
})

client.on("ready", () => {
    client.user.setStatus("online");
    client.user.setPresence({
        activity: {
            name: '£help',
            type: 'WATCHING',
        }
    })
})


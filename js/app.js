const { createApp } = Vue
const contacts= [
    {
        name: 'Michele',
        avatar: './img/avatar_1.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: './img/avatar_2.png',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './img/avatar_3.png',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './img/avatar_4.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: './img/avatar_5.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './img/avatar_6.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novit???',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: './img/avatar_7.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: './img/avatar_8.png',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
]

const DateTime = luxon.DateTime

createApp({
    data() {
        return {
            contacts: contacts,
            currentIndex:0,
            inputValue:'',
            DateTime:DateTime,

        }
    },
    methods:{
        chatSelection(index){
            this.currentIndex = index
            console.log(this.currentIndex);
        },

        newMessage(){
            const newMex ={
                date: this.now,
                message: this.inputValue,
                status: 'sent'
            }
            this.contacts[this.currentIndex].messages.push(newMex)
            this.inputValue = ''

            setTimeout(() => {
                const newResponse ={
                    date: this.now,
                    message: 'ok',
                    status: 'received'
                }
                this.contacts[this.currentIndex].messages.push(newResponse)
            }, 1000)
        },

        messageDate(i){
            newDate = this.contacts[this.currentIndex].messages[i].date
            // const formattedDate = newDate.toFormat('dd/LL/yyyy')
            // newDate=this.DateTime.fromISO(newDate)
            console.log(newDate);
            return newDate
        }

        
    }
}).mount('#app')


// const now = DateTime.now()
// console.log(now)

// const date = DateTime.fromObject({
// 	year: 1990,
// 	month: 10,
// 	day: 24,
// 	hour: 14,
// 	minutes: 31,
// 	seconds: 56,
// })
// console.log(date)

// '24/10/1990'
// const formattedDate = date.toFormat('dd/LL/yyyy')
// console.log(formattedDate)

// const dateToParse = '10/01/2020 15:30:55' // dd/LL/yyyy HH:mm:ss

// const parsedDate = DateTime.fromFormat(dateToParse, 'dd/LL/yyyy HH:mm:ss')
// console.log(parsedDate.toFormat('dd/LL/yyyy'))

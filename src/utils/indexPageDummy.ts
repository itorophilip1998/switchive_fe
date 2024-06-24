import moment from "moment";

const p='/images/indexPage';
const t=Date.now()
export const navLinks=[
    {
        url:'/#top-up',
        name:'Mobile Top Up'
    },
    {
        url:'/#gift-cards',
        name:'Gift Cards'
    },
    {
        url:'/#blogs',
        name:'Blogs'
    },
    {
        url:'/#pay-bills',
        name:'Pay Bills'
    },
    {
        url:'/#blogs',
        name:'Blogs'
    },
]

export const navLinks2=[
    {
        imageLink:`${p}/franceLogo.svg`,
        name:'France',
        width:40,
        height:40,
    },
    {
        imageLink:`${p}/globe.svg`,
        name:'English',
        width:27,
        height:30,

    },
    {
        imageLink:`${p}/help.svg`,
        name:'Help',
        width:23,
        height:35,

    },
    
]

export const popularProducts=[
    {
        imageLink:`${p}/debitCard.svg`,
    },
    {
        imageLink:`${p}/eneba.svg`,
    },
    {
        imageLink:`${p}/freefire.svg`,
    },
    {
        imageLink:`${p}/hotelgift.svg`,
    }, 
    {
        imageLink:`${p}/freefire.svg`,
    },
]

export const giftCard=[
    {
        name:`USD GIFT CARD`,
       currency:'United States Dollar'
    },
    {
        name:`GBP GIFT CARD`,
       currency:'British Pound Sterling '
    },
    {
        name:`CAD GIFT CARD`,
       currency:'Canadian Dollar'
    }, 
    {
        name:`NGN GIFT CARD`,
       currency:'Nigerian Naira'
    },
    {
        name:`GHS GIFT CARD`,
       currency:'Ghanian Cedis'
    },
        
]
export const promotionsDetails=[
    {
        imageLink:`${p}/100pTop-up.svg`,
        title:`New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange`,
       description:'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
       author:"Jennia Peris",
        date:moment(t).format('dd/mm/yyyy'),
        time:moment(t).startOf('hour').fromNow(),
    },
    {
        imageLink:`${p}/coinList.svg`,
        title:`New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange`,
       description:'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
       author:"Jennia Peris",
        date:moment(t).format('dd/mm/yyyy'),
        time:moment(t).startOf('hour').fromNow(),
    },
    {
        imageLink:`${p}/stockMarketsvg`,
        title:`New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange`,
       description:'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
       author:"Jennia Peris",
        date:moment(t).format('dd/mm/yyyy'),
        time:moment(t).startOf('hour').fromNow(),
    },
    {
        imageLink:`${p}/bunchOfCoin.svg`,
        title:`New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange`,
       description:'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
       author:"Jennia Peris",
        date:moment(t).format('dd/mm/yyyy'),
        time:moment(t).startOf('hour').fromNow(),
    },
    
        
]

export const categoryCards=[
    {
        imageLink:`${p}/fashion.svg`,
        name:'Fashion'
    },
    {
        imageLink:`${p}/gaming.svg`,
        name:'Gaming'
    },
    {
        imageLink:`${p}/stayConnected.svg`,
        name:'Stay Connected'
    },
    {
        imageLink:`${p}/food.svg`,
        name:'Food'
    },
    {
        imageLink:`${p}/travel.svg`,
        name:'Travel'
    },
    {
        imageLink:`${p}/entertainment.svg`,
        name:'Entertainment'
    },
    {
        imageLink:`${p}/retails.svg`,
        name:'Retails'
    },
    {
        imageLink:`${p}/globalConnectivity.svg`,
        name:'Global Connectivity'
    },
]

export const blockChainList=[
    {
        imageLink:`${p}/doge.svg`,
         
    },
    {
        imageLink:`${p}/tron.svg`,
       
    },
    {
        imageLink:`${p}/tether.svg`,
        
    },
    {
        imageLink:`${p}/liteCoin.svg`,
         
    },
    {
        imageLink:`${p}/solana.svg`,
       
    },
    {
        imageLink:`${p}/bitcoin.svg`,
        
    },
    {
        imageLink:`${p}/ethereum.svg`,
        
    },
    {
        imageLink:`${p}/polygon.svg`,
        
    },
    {
        imageLink:`${p}/tron.svg`,
        
    },
]
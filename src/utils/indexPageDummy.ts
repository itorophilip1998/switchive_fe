import moment from "moment";

const p='/images/indexPage';
const u='/indexPage';
const c='/categories';
const t=Date.now()
export const navLinks=[
    {
        url:'/',
        name:'Home', 
    },
    {
        url:'/categories?type=Prepaid Phone',
        name:'Mobile Top Up'
    },
    {
        url:'/categories?type=Gift Card Deals',
        name:'Gift Cards'
    },
     
    {
        url:'/categories?type=Mobile Phone',
        name:'Pay Bills'
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
        imageLink:`indexPage/debitCard.svg`,
    },
    {
        imageLink:`indexPage/eneba.svg`,
    },
    {
        imageLink:`indexPage/freefire.svg`,
    },
    {
        imageLink:`indexPage/hotelgift.svg`,
    }, 
    {
        imageLink:`indexPage/freefire.svg`,
    },
    {
        imageLink:`indexPage/bobZoom.png`,
    },
    {
        imageLink:`indexPage/xBox.svg`,
    },
    {
        imageLink:`indexPage/cvs.svg`,
    },
    {
        imageLink:`indexPage/hotelgift.svg`,
    }, 
    {
        imageLink:`indexPage/freefire.svg`,
    },
    {
        imageLink:`indexPage/debitCard.svg`,
    },
]
export const newProducts=[
    {
        imageLink:`indexPage/bobZoom.png`,
    },
    {
        imageLink:`indexPage/xBox.svg`,
    },
    {
        imageLink:`indexPage/cvs.svg`,
    },
    {
        imageLink:`indexPage/hotelgift.svg`,
    }, 
    {
        imageLink:`indexPage/freefire.svg`,
    },
    {
        imageLink:`indexPage/debitCard.svg`,
    },
    {
        imageLink:`indexPage/eneba.svg`,
    },
    {
        imageLink:`indexPage/freefire.svg`,
    },
    {
        imageLink:`indexPage/hotelgift.svg`,
    }, 
    {
        imageLink:`indexPage/freefire.svg`,
    },
]

export const giftCard=[
    {
        name:`USD GIFT CARD`,
       currency:'United States Dollar',
       imageLink:`${u}/NGN.svg`,

    },
    {
        name:`GBP GIFT CARD`,
       currency:'British Pound Sterling',
       imageLink:`${u}/USD.svg`,

    },
    {
        name:`CAD GIFT CARD`,
       currency:'Canadian Dollar',
       imageLink:`${u}/GBP.svg`,

    }, 
    {
        name:`NGN GIFT CARD`,
       currency:'Nigerian Naira',
       imageLink:`${u}/NGN.svg`,

    },
    
    {
        name:`GBP GIFT CARD`,
       currency:'British Pound Sterling',
       imageLink:`${u}/USD.svg`,

    },
    {
        name:`CAD GIFT CARD`,
       currency:'Canadian Dollar',
       imageLink:`${u}/GBP.svg`,

    }, 
    {
        name:`NGN GIFT CARD`,
       currency:'Nigerian Naira',
       imageLink:`${u}/NGN.svg`,

    },
    
        
]
export const promotionsDetails=[
    // {
    //     imageLink:`${p}/100pTop-up.svg`,
    //     title:`New Leveraged Pairs Added to Margin Trading on the Crypto.com Exchange`,
    //    description:'We urge everyone adopt good cybersecurity habits, and to have unique passwords on every site they use...',
    //    author:"Jennia Peris",
    //     date:moment(t).format('dd/mm/yyyy'),
    //     time:moment(t).startOf('hour').fromNow(),
    // },
     
    {
        imageLink:`${u}/01.svg`, 
    },
    {
        imageLink:`${u}/02.svg`, 
    },
    {
        imageLink:`${u}/03.svg`, 
    },
    {
        imageLink:`${u}/04.svg`, 
    },
    {
        imageLink:`${u}/03.svg`, 
    },
    {
        imageLink:`${u}/02.svg`, 
    },
    {
        imageLink:`${u}/04.svg`, 
    },
       
]

export const categoryCards=[
    {
        imageLink:`${u}/fashion.svg`,
        name:'Fashion'
    },
    {
        imageLink:`${u}/gaming.svg`,
        name:'Gaming'
    },
    {
        imageLink:`${u}/stayConnected.svg`,
        name:'Stay Connected'
    },
    {
        imageLink:`${u}/food.svg`,
        name:'Food'
    },
    {
        imageLink:`${u}/travel.svg`,
        name:'Travel'
    },
    {
        imageLink:`${u}/entertainment.svg`,
        name:'Entertainment'
    },
    {
        imageLink:`${u}/retails.svg`,
        name:'Retails'
    },
    {
        imageLink:`${u}/globalConnectivity.svg`,
        name:'Global Connectivity'
    },
]

export const blockChainList=[
    {
        imageLink:`${u}/doge.svg`,
         
    },
    {
        imageLink:`${u}/tron.svg`,
       
    },
    {
        imageLink:`${u}/tether.svg`,
        
    },
    {
        imageLink:`${u}/liteCoin.svg`,
         
    },
    {
        imageLink:`${u}/solana.svg`,
       
    },
    {
        imageLink:`${u}/bitcoin.svg`,
        
    },
    {
        imageLink:`${u}/ethereum.svg`,
        
    },
    {
        imageLink:`${u}/polygon.svg`,
        
    },
     
    {
        imageLink:`${u}/tether.svg`,
        
    },
    {
        imageLink:`${u}/liteCoin.svg`,
         
    },
    {
        imageLink:`${u}/solana.svg`,
       
    },
    {
        imageLink:`${u}/bitcoin.svg`,
        
    },
]


export const blogCard=[
    {
        imageLink:`${u}/blog1.svg`,
         title:"New Switchive",
    },
    {
        imageLink:`${u}/blog2.svg`,
         title:"Block",
    },
    {
        imageLink:`${u}/blog3.svg`,
         title:"Cypto Space ",
    },
    {
        imageLink:`${u}/blog2.svg`,
         title:"Etherum Evolution",
    },
    {
        imageLink:`${u}/blog1.svg`,
         title:"P2P Market Chain",
    },
    

];

export const companyFooter=[
    "About Us",
  "Terms of Use",
  "Privacy Policy",
  "Disclaimer"
];
export const businessFooter = [
    "Prime",
    "Custody",
    "Asset Hub",
    "Commerce"
  ];
  export const exchangeFooter = [
    "Exchange Home",
    "Margin Trading",
    "Derivatives Trading",
    "Trading Arena"
  ];
  export const resourceFooter = [
    "Prices",
    "Site Widgets",
    "Tax",
    "Blog",
    "Research"
  ];
  
  export const categories = [
    "Top Products",
    "Food",
    "Sports",
    "Travel",
    "Bitcoin",
    "Gaming",
    "Groceries",
    "Clothing",
    "Streaming",
    "Electronics",
    "Restaurants",
    "Mobile Phone",
    "Home Goods",
    "Entertainment",
    "Gift Card Deals",
    "Prepaid Phone"
  ];
  

  export const topProduct=[
    {
        imageLink:`${c}/c1.svg`,
         title:"CoinGate",
    },
    {
        imageLink:`${c}/c2.svg`,
         title:"Skype",
    },
    {
        imageLink:`${c}/c3.svg`,
         title:"Sony PlayStation ",
    },
    {
        imageLink:`${c}/c4.svg`,
         title:"App Store",
    },
    {
        imageLink:`${c}/c25.svg`,
         title:"Eneba",
    },
    {
        imageLink:`${c}/c28.svg`,
         title:"Diccord Nitro",
    },
    {
        imageLink:`${c}/c26.svg`,
         title:"NetFlix",
    },
    {
        imageLink:`${c}/c27.svg`,
         title:"Blizzarad",
    },
    {
        imageLink:`${c}/c06.svg`,
         title:"Macy’s",
    },
    {
        imageLink:`${c}/c14.svg`,
         title:"Primark",
    },
    {
        imageLink:`${c}/c20.svg`,
         title:"Zappos",
    },
    {
        imageLink:`${c}/c22.svg`,
         title:"River Island",
    },
    {
        imageLink:`${c}/c1.svg`,
         title:"CoinGate",
    },
    {
        imageLink:`${c}/c2.svg`,
         title:"Skype",
    },
    {
        imageLink:`${c}/c3.svg`,
         title:"Sony PlayStation ",
    },
    {
        imageLink:`${c}/c4.svg`,
         title:"App Store",
    },
    {
        imageLink:`${c}/c25.svg`,
         title:"Eneba",
    },
    {
        imageLink:`${c}/c28.svg`,
         title:"Diccord Nitro",
    },
    {
        imageLink:`${c}/c26.svg`,
         title:"NetFlix",
    },
    {
        imageLink:`${c}/c27.svg`,
         title:"Blizzarad",
    },
    {
        imageLink:`${c}/c06.svg`,
         title:"Macy’s",
    },
    {
        imageLink:`${c}/c14.svg`,
         title:"Primark",
    },
    {
        imageLink:`${c}/c20.svg`,
         title:"Zappos",
    },
    {
        imageLink:`${c}/c22.svg`,
         title:"River Island",
    },
    {
        imageLink:`${c}/c1.svg`,
         title:"CoinGate",
    },
    {
        imageLink:`${c}/c2.svg`,
         title:"Skype",
    },
    {
        imageLink:`${c}/c3.svg`,
         title:"Sony PlayStation ",
    },
    {
        imageLink:`${c}/c4.svg`,
         title:"App Store",
    },
    {
        imageLink:`${c}/c25.svg`,
         title:"Eneba",
    },
    {
        imageLink:`${c}/c28.svg`,
         title:"Diccord Nitro",
    },
    {
        imageLink:`${c}/c26.svg`,
         title:"NetFlix",
    },
    {
        imageLink:`${c}/c27.svg`,
         title:"Blizzarad",
    },
    {
        imageLink:`${c}/c06.svg`,
         title:"Macy’s",
    },
    {
        imageLink:`${c}/c14.svg`,
         title:"Primark",
    },
    {
        imageLink:`${c}/c20.svg`,
         title:"Zappos",
    },
    {
        imageLink:`${c}/c22.svg`,
         title:"River Island",
    },
    

];

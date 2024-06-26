'use client' 
import "@/sass/index.scss";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";  
import AOS from 'aos';
import { useEffect } from "react";
 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,  
      mirror: false,  
    });
  }, []); 
  return (
    <html lang="en"> 
          <head> 
            <title>Switchive</title>
            <meta name="description" content="Make mobile top-ups, buy gift cards, and pay bills with crypto for more than 14,000 products worldwide in over 170 countries and earn points." />
            <meta name="keywords" content="crypto, mobile top-ups, gift cards, bill payments, crypto payments, global products, crypto points" />
            <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"/>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous" async></script>
      </head>

      <body >
          <Header/>
           {children}
          <Footer/> 
        </body>
        
    </html>
  );
}

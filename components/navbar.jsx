// components/Navbar.js
import { getCalApi } from '@calcom/embed-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { useEffect,useState } from 'react';

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    
    useEffect(()=>{
        (async function () {
          const cal = await getCalApi({"namespace":"30min"});
          cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])

    return (
    <>
    
            <div className="flex items-center justify-end w-full gap-5 p-2 text-xs text-white md:text-sm bg-gradient-to-tr from-[#532831] to-[#d14f67]">
      
                <motion.div
                    className="flex items-center gap-1"
                    whileHover={{ x: 10 }} 
                    animate={{
                    x: [0, -10, 0], 
                    transition: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 5,
                        ease: "linear"
                    }
                    }}
                >
                    <Link target="_blank" href={"mailto:enallah@nallahsbraidingcorner.com"} className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                        <path d="M3 7l9 6l9 -6" />
                    </svg>
                    enallah@nallahsbraidingcorner.com
                    </Link>
                </motion.div>

                <motion.div
                    className="flex items-center gap-1"
                    whileHover={{ x: 10 }} 
                    animate={{
                    x: [0, -10, 0], 
                    transition: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 5,
                        ease: "linear"
                    }
                    }}
                >
                    <Link target="_blank" href={"tel:+61424247363"} className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile-vibration">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 3m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                        <path d="M8 4l2 0" />
                        <path d="M9 17l0 .01" />
                        <path d="M21 6l-2 3l2 3l-2 3l2 3" />
                    </svg>
                    +61424247363
                    </Link>
                </motion.div>

                <motion.div
                    className="flex items-center gap-1"
                    whileHover={{ x: 10 }} 
                    animate={{
                    x: [0, -10, 0], 
                    transition: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 5,
                        ease: "linear"
                    }
                    }}
                >
                    <Link target="_blank" href={"https://www.instagram.com/nallah_the_braider/profilecard/?igsh=NDc1ZXJuejdibTlz"} className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M16.5 7.5v.01" />
                    </svg>
                    @nallah_the_braider
                    </Link>
                </motion.div>
      
            </div>

            <nav className="shadow flex items-center gap-1 justify-between p-4 text-white bg-gradient-to-r from-[#201f1d] to-[#2e2526]">
                <h1 className="text-2xl font-bold italic bg-gradient-to-r from-[#ffffff] to-[#a57368] text-transparent bg-clip-text">
                Nallah's braiding corner
                </h1>

            
                <div className="hidden space-x-4 md:flex">
                <Link href="#services" className="text-white"> Services</Link>
                <Link href="#contact" className='text-white'>Contact Us</Link>
                </div>

                
               
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-menu">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
                </button>


                {isMenuOpen && (
                <div className="fixed top-0 right-0 z-50 w-64 h-full p-4 bg-white shadow-lg">
                    <div className="flex justify-end">
                    <button onClick={() => setIsMenuOpen(false)} className="text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-x">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                    <div className="flex flex-col space-y-4">
                    <Link href="#services" className="text-black">Services</Link>
                    <Link href="#contact" className="text-black">Contact Us</Link>
                    <button
                        data-cal-link="wiseman-kang-ombe-9h05xk/15min"
                        data-cal-namespace="30min"
                        data-cal-config='{"layout":"month_view"}'
                        className="text-black bg-[#d25068] text-white btn w-full"
                    >
                        Book A session
                    </button>
                    </div>
                </div>
                )}
     
   
                <button 
                    data-cal-link="wiseman-kang-ombe-9h05xk/15min"
                    data-cal-namespace="30min"
                    data-cal-config='{"layout":"month_view"}'  
                    className="text-white hidden md:inline-block  bg-[#d25068] btn hover:bg-[#de667c]"
                >
                    Book A session
                </button>
            </nav>
    </>
)
};


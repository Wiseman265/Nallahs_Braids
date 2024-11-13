
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import Layout from "@/components/layouts/layout";


export default function Index(){
    const testimonials = [
        {
          name: "Annmarie P Ramsay",
          feedback: "Great hair works",
          rating: 5,
        },
        {
          name: "Stephen Souza",
          feedback: "Best inside australia right now",
          rating: 5,
        },
      ];
      

      useEffect(()=>{
        (async function () {
          const cal = await getCalApi({"namespace":"30min"});
          cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
        })();
      }, [])
 
    return (

            <Layout>
                
         <section
            className="flex flex-col items-center justify-between p-10 text-white md:flex-row min-h-[100vh] bg-home-bg bg-center bg-cover"
            id="home"
            >
                
                
                <div className="space-y-6 text-left md:w-1/2">
                <motion.h2
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    The #1 Hair Stylist Australia: If you dream it, I can achieve it
                </motion.h2>
                <p className="max-w-md text-lg">
                    High Fashion Styling for Weddings, Proms, Photo Shoots, Fashion Shows, and any other Glamorous Events where you need a Hair Stylist. Bring out your inner glow!
                </p>
                <button 
                    data-cal-link="wiseman-kang-ombe-9h05xk/15min"
                    data-cal-namespace="30min"
                    data-cal-config='{"layout":"month_view"}'  
                    className="text-white bg-[#d25068] btn hover:bg-[#de667c]"
                >
                    Book A session
                </button>
                
                
                <div className="flex flex-col items-center gap-4 mt-8 md:flex-row">
                    {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center w-full p-4 space-x-2 text-gray-800 bg-white rounded-full shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 }}
                    >
                        <img
                        src={`https://via.placeholder.com/50?text=${testimonial.name[0]}`}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                        />
                        <div>
                        <h3 className="text-sm font-semibold">{testimonial.name}</h3>
                        <p className="text-xs text-gray-600">{testimonial.feedback}</p>
                        <div className="flex text-yellow-400">
                            {"★".repeat(testimonial.rating)} 
                        </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
                </div>

                
                <motion.div
                className="relative flex items-center justify-center mt-8 md:w-1/2 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                >
                <Image
                    src="/images/hero_img.png" 
                    alt="Stylist"
                    width={500}
                    height={100}
                    className="w-full max-w-md rounded-lg shadow-2xl"
                />
                <div className="absolute px-4 py-2 font-bold text-black bg-yellow-500 rounded-lg top-4 right-4">
                    Australian Swag and Style
                </div>
                </motion.div>
            </section>
            
            </Layout>
           

           

    
    )
}
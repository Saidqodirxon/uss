// src/pages/Services.jsx → 100% 3 TILDA + RESPONSIVE + ZO‘R!

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  Flame, Wrench, Layers, Sparkles, Paintbrush, Factory, FileCode, Armchair, ArrowRight
} from "lucide-react";

export default function Services() {
  const { t } = useTranslation();

  const allServices = [
    { 
      title: t("services.list.laser"),      
      icon: Flame,       
      path: "/services/laser-cutting",
      image: "/images/portfolio/project-3.jpg",
      desc: "Yuqori aniqlikda qora metall, alyuminiy va zanglamaydigan po‘latni kesish"
    },
    { 
      title: t("services.list.bending"),    
      icon: Layers,      
      path: "/services/sheet-bending",
      image: "/images/portfolio/project-2.jpg",
      desc: "Murakkab shakllar va qalin metallarni yuqori sifatda bukish va shakllantirish"
    },
    { 
      title: t("services.list.powder"),     
      icon: Paintbrush,  
      path: "/services/powder-coating",
      image: "/images/portfolio/project-6.jpg",
      desc: "Poroshkali bo‘yash va himoya qoplamasi — 1000+ rang, uzoq muddatli chidamlilik"
    },
    { 
      title: t("services.list.welding"),    
      icon: Sparkles,    
      path: "/services/welding",
      image: "/images/portfolio/project-5.jpg",
      desc: "Argon, TIG, MIG/MAG, plazma — har qanday murakkablikdagi professional payvandlash"
    },
    { 
      title: t("services.list.structures"), 
      icon: Factory,     
      path: "/services/metal-structures",
      image: "/images/portfolio/project-1.jpg",
      desc: "Angarlar, omborxona, savdo markazlari uchun mustahkam metall konstruktsiyalar"
    },
    { 
      title: t("services.list.custom"),     
      icon: FileCode,    
      path: "/services/custom-parts",
      image: "/images/hero-4.jpg",
      desc: "DXF, DWG, PDF chizmalari bo‘yicha 100% aniq nostandart detallar tayyorlash"
    },
    { 
      title: t("services.list.furniture"),  
      icon: Armchair,    
      path: "/services/metal-furniture",
      image: "/images/portfolio/project-4.jpg",
      desc: "Loft uslubidagi mebel, stollar, stullar va maxsus dekorativ metall buyumlar"
    },
    { 
      title: t("services.list.design3d") || "Metallga ishlov berish",   
      icon: Wrench,      
      path: "/services/custom-parts",
      image: "/images/hero-1.jpg",
      desc: "Metall buyumlar uchun to‘liq texnik loyihalash, hisob-kitob va ishlab chiqarish"
    },
  ];

  return (
    <>
      <section className="py-24 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black -z-10" />
        <div className="max-w-5xl mt-[20px] mx-auto px-6 text-center">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6"
          >
            {t("services.title")}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
          >
            {t("services.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-12 pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, i) => {
            const IconComponent = service.icon;

            return (
              <Link to={service.path} key={i} className="block group">
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative h-[380px] rounded-3xl overflow-hidden border border-white/15 p-7 flex flex-col justify-between shadow-2xl transition-all duration-500 group-hover:border-purple-400/50 group-hover:shadow-[0_25px_60px_rgba(79,70,229,0.3)]"
                >
                  {/* Orqa fon rasmi */}
                  <div className="absolute inset-0 -z-10 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover scale-105 group-hover:scale-120 transition-transform duration-700 brightness-[0.38] group-hover:brightness-[0.48]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-indigo-950/40" />
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-500" />
                  </div>

                  {/* Icon */}
                  <div>
                    <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white mb-6 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-700 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200 transition-all">
                      {service.title}
                    </h3>

                    <p className="text-sm text-white/75 leading-relaxed font-light">
                      {service.desc}
                    </p>
                  </div>

                  {/* Pastki tugma */}
                  <div className="pt-4 flex items-center gap-2 text-indigo-300 group-hover:text-white text-sm font-bold uppercase tracking-wider transition-colors">
                    <span>{t("services.more_details", { ns: "translation" }) || "Batafsil"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/10 border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition flex items-center gap-3 mx-auto"
            >
              {t("services.back_home") || "Bosh sahifaga qaytish"}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </section>
    </>
  );
}
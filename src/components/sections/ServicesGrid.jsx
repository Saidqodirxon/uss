import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Flame, Wrench, Layers, Sparkles, Paintbrush, Factory, FileCode, Armchair } from "lucide-react";

const serviceAssets = [
  { image: "/images/portfolio/project-3.jpg", icon: Flame },
  { image: "/images/hero-1.jpg", icon: Wrench },
  { image: "/images/portfolio/project-2.jpg", icon: Layers },
  { image: "/images/portfolio/project-5.jpg", icon: Sparkles },
  { image: "/images/portfolio/project-6.jpg", icon: Paintbrush },
  { image: "/images/portfolio/project-1.jpg", icon: Factory },
  { image: "/images/hero-4.jpg", icon: FileCode },
  { image: "/images/portfolio/project-4.jpg", icon: Armchair },
];

export default function ServicesGrid() {
  const { t } = useTranslation("services"); 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const services = t("services", { returnObjects: true });

  return (
    <section ref={ref} className="relative py-12 lg:py-20 overflow-hidden">
      {/* Fon – yulduzlar sonini kamaytirdik, mobil uchun og'irlikni kamaytirish */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        {[...Array(30)].map((_, i) => (  // 50 → 30 ga kamaytirdik
          <div 
            key={i} 
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sarlavha – mobil uchun kichikroq */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }} 
          animate={isInView ? { y: 0, opacity: 1 } : {}} 
          transition={{ duration: 0.7 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 bg-clip-text text-transparent italic">
              {t("services.title", { ns: "translation" })}
            </span>
          </h2>
          <p className="mt-3 md:mt-5 text-sm sm:text-base md:text-lg text-white/70 max-w-3xl mx-auto font-light">
            {t("services.description", { ns: "translation" })}
          </p>
        </motion.div>

        {/* Grid – mobil uchun 1, tablet uchun 2, desktop uchun 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {Array.isArray(services) && services.map((service, index) => {
            const asset = serviceAssets[index % serviceAssets.length];
            const IconComponent = asset.icon;

            return (
              <Link to={service.path} key={index} className="block h-full">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative h-full"
                >
                  <div className="relative h-full min-h-[320px] p-6 sm:p-7 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 transition-all duration-500 group-hover:border-purple-400/50 group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.25)] flex flex-col justify-between">
                    {/* Orqa fon rasmi */}
                    <div className="absolute inset-0 -z-10 overflow-hidden">
                      <img
                        src={asset.image}
                        alt={service.title}
                        className="w-full h-full object-cover scale-105 group-hover:scale-125 transition-transform duration-700 brightness-[0.32] group-hover:brightness-[0.42]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-indigo-950/45" />
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-500" />
                    </div>

                    <div>
                      {/* Yangilangan Icon */}
                      <div className="mb-5 inline-flex p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-700 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-indigo-200 transition-all">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light line-clamp-3">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center text-indigo-300 group-hover:text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors">
                      <span>{t("services.more_details", { ns: "translation" })}</span>
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* CTA button – mobil uchun kichikroq */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={isInView ? { opacity: 1 } : {}} 
          transition={{ delay: 0.6 }}
          className="text-center mt-12 md:mt-20"
        >
          <Link to="/contact">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 sm:px-10 sm:py-5 md:px-14 md:py-6 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl sm:rounded-2xl md:rounded-full text-white text-base sm:text-lg md:text-xl font-bold shadow-lg hover:shadow-purple-600/50 transition-all active:scale-95"
            >
              {t("services.cta_button", { ns: "translation" })}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
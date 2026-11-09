import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OrderModal from "../common/PopupForm";

const flags = {
  uz: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 250'><rect width='500' height='83.3' fill='%230099b5'/><rect y='83.3' width='500' height='83.4' fill='%23fff'/><rect y='166.7' width='500' height='83.3' fill='%231eb53a'/><rect y='81.3' width='500' height='5' fill='%23ce1126'/><rect y='163.7' width='500' height='5' fill='%23ce1126'/><circle cx='45' cy='42' r='24' fill='%23fff'/><circle cx='53' cy='42' r='20' fill='%230099b5'/></svg>",
  ru: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 6'><rect fill='%23fff' width='9' height='6'/><rect fill='%230039a6' y='2' width='9' height='4'/><rect fill='%23d52b1e' y='4' width='9' height='2'/></svg>",
  en: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'><clipPath id='s'><path d='M0 0v30h60V0z'/></clipPath><clipPath id='t'><path d='M30 15h30v15zv15H0zH0V0zV0h30z'/></clipPath><g clip-path='url(%23s)'><path d='M0 0v30h60V0z' fill='%23012169'/><path d='M0 0l60 30m0-30L0 30' stroke='%23fff' stroke-width='6'/><path d='M0 0l60 30m0-30L0 30' clip-path='url(%23t)' stroke='%23C8102E' stroke-width='4'/><path d='M30 0v30M0 15h60' stroke='%23fff' stroke-width='10'/><path d='M30 0v30M0 15h60' stroke='%23C8102E' stroke-width='6'/></g></svg>",
};

const languages = [
  { code: "uz", label: "UZ", flag: flags.uz },
  { code: "ru", label: "RU", flag: flags.ru },
  { code: "en", label: "EN", flag: flags.en },
];

export default function Header() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Telefon raqamlari massivi
  const phoneNumbers = [
    { label: "+998 90 031 00 31", value: "+998900310031" },
    { label: "+998 99 009 84 43", value: "+998990098443" }
  ];

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [mobileOpen]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const navItems = [
    { name: t("header.home"), path: "/" },
    { name: t("header.services"), path: "/services" },
    { name: t("header.about"), path: "/about" },
    { name: t("header.portfolio"), path: "/portfolio" },
    { name: t("header.contact"), path: "/contact" },
  ];

  const openModal = () => {
    setModalOpen(true);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Kosmik fon */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-indigo-900/20" />
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: Math.random() * 0.6 + 0.3,
            }}
          />
        ))}
      </div>

      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <motion.div
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          className="bg-white/10 backdrop-blur-3xl border border-white/10 rounded-full shadow-2xl"
        >
          <div className="flex items-center justify-between px-4 py-2.5">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 shrink-0">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-md overflow-hidden border border-white/10">
                <img
                  src="/images/logo/Logo.png"
                  alt="USS Engineering"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <span className="hidden sm:block text-white font-bold text-base tracking-tight">
                USS ENGINEERING
              </span>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    location.pathname === item.path
                      ? "bg-white/20 text-white"
                      : "text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Side (Desktop) */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Telefon raqamlari */}
              <div className="flex flex-col items-end border-r border-white/10 pr-4">
                {phoneNumbers.map((phone, idx) => (
                  <a
                    key={idx}
                    href={`tel:${phone.value}`}
                    className="text-[13px] font-bold text-white hover:text-indigo-400 transition-colors leading-tight"
                  >
                    {phone.label}
                  </a>
                ))}
              </div>

              {/* Til tanlash */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                >
                  <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-5" />
                  <span className="text-white text-xs font-bold">{currentLang.label}</span>
                  <svg className={`w-3 h-3 text-white/60 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full mt-2 right-0 w-32 bg-indigo-950/90 backdrop-blur-3xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => changeLanguage(language.code)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all ${
                            i18n.language === language.code ? "bg-white/20" : ""
                          }`}
                        >
                          <img src={language.flag} alt="" className="w-5 h-5" />
                          <span className="text-xs font-bold">{language.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                onClick={openModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full text-white font-bold text-sm shadow-lg hover:shadow-indigo-500/30 transition-all"
              >
                {t("header.call_us")}
              </motion.button>
            </div>

            {/* Mobile Actions */}
            <div className="lg:hidden flex items-center gap-2">
              <a 
                href={`tel:${phoneNumbers[0].value}`}
                className="p-2.5 rounded-full bg-indigo-600 text-white shadow-lg"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobil Menyu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden bg-indigo-950 backdrop-blur-3xl shadow-2xl overflow-y-auto"
          >
            <div className="h-full flex flex-col pt-6 pb-12 px-6">
              <div className="flex justify-between items-center mb-10">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center space-x-2">
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-white">U</span>
                  </div>
                  <span className="text-xl font-bold text-white tracking-tight">USS ENGINEERING</span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-3 rounded-full bg-white/10 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigatsiya */}
              <nav className="flex flex-col space-y-2 mb-10">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-4 px-5 text-white hover:bg-white/10 rounded-2xl transition ${
                      location.pathname === item.path ? "bg-white/20 font-bold" : "font-medium"
                    } text-2xl`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-6">
                {/* Mobil Aloqa Bloki */}
                <div className="bg-white/5 rounded-[2rem] p-6 border border-white/10">
                  <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4 text-center">Biz bilan bog'laning</p>
                  <div className="flex flex-col gap-4">
                    {phoneNumbers.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.value}`}
                        className="flex items-center justify-center gap-3 py-4 bg-white/5 rounded-2xl text-white text-xl font-bold hover:bg-white/10 transition"
                      >
                        <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {phone.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Til va Tugma */}
                <div className="flex flex-col gap-4">
                   <div className="flex justify-center gap-3">
                    {languages.map((lng) => (
                      <button
                        key={lng.code}
                        onClick={() => { changeLanguage(lng.code); setMobileOpen(false); }}
                        className={`px-6 py-3 rounded-xl flex items-center gap-2 ${
                          i18n.language === lng.code ? "bg-white/20" : "bg-white/5"
                        } transition`}
                      >
                        <img src={lng.flag} alt="" className="w-5 h-5" />
                        <span className="text-white font-bold">{lng.label}</span>
                      </button>
                    ))}
                  </div>
                  
                  <motion.button
                    onClick={openModal}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-[2rem] text-white font-bold text-xl shadow-2xl"
                  >
                    {t("header.call_us")}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <OrderModal
        project={{ title: t("header.call_us") }}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
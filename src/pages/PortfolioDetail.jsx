// src/pages/PortfolioDetail.jsx → BITTA LOYIHA UCHUN

import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import OrderModal from "../components/common/PopupForm";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Savdo markazi",
    location: "Toshkent",
    area: "1200 m²",
    year: "2024",
    desc: "Zamonaviy savdo markazi uchun metall konstruktsiyalar...",
    images: ["1", "2", "3"],
  },
  {
    id: 2,
    title: "Zavod angarlari",
    location: "Farg‘ona",
    area: "3500 m²",
    year: "2025",
    desc: "Yengil po‘lat konstruktsiyalar bilan qurilgan katta angar...",
    images: ["2", "1", "4"],
  },
  {
    id: 3,
    title: "Lazer kesim detallari",
    location: "Farg‘ona",
    area: "3500 m²",
    year: "2025",
    desc: "Yengil po‘lat konstruktsiyalar bilan qurilgan katta angar...",
    images: ["2", "1", "4"],
  },
  {
    id: 4,
    title: "Office Mebili",
    location: "Farg‘ona",
    area: "3500 m²",
    year: "2025",
    desc: "Yengil po‘lat konstruktsiyalar bilan qurilgan katta angar...",
    images: ["2", "1", "4"],
  },
  {
    id: 5,
    title: "Payvandlash loixalari",
    location: "Farg‘ona",
    area: "3500 m²",
    year: "2025",
    desc: "Yengil po‘lat konstruktsiyalar bilan qurilgan katta angar...",
    images: ["2", "1", "4"],
  },
  {
    id: 6,
    title: "Dekorativ panellar",
    location: "Toshkent",
    area: "800 m²",
    year: "2024",
    desc: "Restoran va kafe dizayni uchun naqshli lazer kesim panellari.",
    images: ["6", "3", "1"],
  },
  {
    id: 7,
    title: "Sanoat eshiklari",
    location: "Toshkent",
    area: "450 m²",
    year: "2024",
    desc: "Avtomatik ochilish tizimiga ega mustahkam sanoat eshiklari.",
    images: ["7", "2", "4"],
  },
  {
    id: 8,
    title: "Reklama konstruktsiyasi",
    location: "Toshkent City",
    area: "18 m balandlik",
    year: "2024",
    desc: "Shahar markazidagi yirik LED ekran va reklama metall karkasi.",
    images: ["8", "1", "5"],
  },
  {
    id: 9,
    title: "Logistika markazi ombori",
    location: "Toshkent viloyati",
    area: "2800 m²",
    year: "2024",
    desc: "A toifadagi logistika markazi uchun metall karkas va angar.",
    images: ["9", "2", "6"],
  },
  {
    id: 10,
    title: "Lazer naqshli metall darvozalar",
    location: "Toshkent",
    area: "120 m²",
    year: "2025",
    desc: "Shaxsiy rezidensiya uchun eksklyuziv lazer naqshli darvoza va to'siqlar.",
    images: ["10", "3", "7"],
  },
  {
    id: 11,
    title: "Sanoat ventilyatsiya kanallari",
    location: "Navoiy",
    area: "1500 m",
    year: "2024",
    desc: "Zavod va ishlab chiqarish majmuasi uchun galvanizatsiyalangan ventilyatsiya tizimi.",
    images: ["11", "4", "8"],
  },
  {
    id: 12,
    title: "Metall zinapoyalar va to‘siqlar",
    location: "Toshkent",
    area: "600 m²",
    year: "2025",
    desc: "Zamonaviy ofis va savdo markazi uchun spiral va to'g'ri zinapoyalar.",
    images: ["12", "1", "5"],
  },
  {
    id: 13,
    title: "Fermer xo‘jaligi texnika angari",
    location: "Samarqand",
    area: "2000 m²",
    year: "2024",
    desc: "Og'ir qishloq xo'jaligi texnikasini saqlash uchun keng oraliqli metall angar.",
    images: ["13", "2", "6"],
  },
  {
    id: 14,
    title: "Avtosalon fassad metall konstruktsiyasi",
    location: "Toshkent",
    area: "900 m²",
    year: "2024",
    desc: "Premium avtosalon uchun zamonaviy metall va shisha fasad tizimi.",
    images: ["14", "3", "7"],
  },
  {
    id: 15,
    title: "Quvur va profillarni bukish loyihasi",
    location: "Andijon",
    area: "3000+ dona",
    year: "2025",
    desc: "Sanoat mashinasozligi uchun turli diametrdagi quvurlarni aniq burchakda bukish.",
    images: ["15", "4", "8"],
  },

];

export default function PortfolioDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === Number(id));
  const [modalOpen, setModalOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-3xl">
        Loyiha topilmadi
        <Link to="/portfolio" className="ml-4 underline">
          ← Orqaga
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
              {project.title}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white/80 mb-12">
              <div>
                <strong>Manzil:</strong> {project.location}
              </div>
              <div>
                <strong>Maydon:</strong> {project.area}
              </div>
              <div>
                <strong>Yil:</strong> {project.year}
              </div>
              <div>
                <strong>Status:</strong> Yakunlangan
              </div>
            </div>

            <p className="text-xl text-white/70 max-w-4xl mb-12 leading-relaxed">
              {project.desc}
            </p>

     
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-video rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={`/images/portfolio/project-${((project.id + i - 2) % 15) + 1}.jpg?v=3`}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                </div>
              ))}
            </div>

        
            <div className="text-center">
              <button
                onClick={() => setModalOpen(true)}
                className="px-16 py-6 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl text-white text-2xl font-bold shadow-2xl hover:shadow-purple-600/70 transition-all"
              >
                Shu kabi loyiha uchun buyurtma berish
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <OrderModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}

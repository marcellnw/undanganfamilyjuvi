import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  GraduationCap, 
  Home, 
  Cake, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight,
  Image as ImageIcon
} from 'lucide-react';

// --- Button ---
const Button = ({ onClick, children, className = "" }: { onClick: () => void, children: React.ReactNode, className?: string }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`btn-sakura flex items-center justify-center gap-2 ${className}`}
  >
    {children}
  </motion.button>
);

// --- Section (FIX: tambah active, TANPA hapus isi lama) ---
const Section = ({ children, id, title, videoSrc, active }: any) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={ref}
      id={id} 
      className={`absolute inset-0 w-full flex items-center justify-center p-4 relative overflow-hidden transition-all duration-700 ${
        active ? "opacity-100 z-20" : "opacity-0 pointer-events-none z-0"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.95 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-lg mx-auto flex flex-col items-center justify-center p-8 text-center invitation-card rounded-[2.5rem] relative overflow-hidden min-h-[60vh]"
      >
        {videoSrc && (
          <motion.div 
            style={{ y }} 
            className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-40"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          </motion.div>
        )}
        
        {title && <div className="title-banner-sakura uppercase tracking-[0.2em] relative z-10">{title}</div>}
        
        <div className="flex-1 flex flex-col items-center justify-center w-full relative z-10">
          {children}
        </div>
      </motion.div>
    </section>
  );
};

export default function App() {
  const [page, setPage] = useState(0);

  const next = () => setPage((p) => Math.min(p + 1, 3));
  const prev = () => setPage((p) => Math.max(p - 1, 0));
  const goHome = () => setPage(0);

  return (
    <div className="relative min-h-screen bg-luxury-pink overflow-hidden">
      
      {/* Background Music */}
      <audio
        src="https://github.com/marcellnw/undanganfamilyjuvi/raw/refs/heads/main/Aesthetic%20sound.mp3"
        autoPlay
        loop
      />
      
      {/* Background Ornaments */}
      <div className="ornamental-frame" />
      
      {/* Floating Petals */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i} 
            className="floating-petal" 
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `-50px`,
              width: `${Math.random() * 10 + 10}px`,
              height: `${Math.random() * 10 + 10}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`
            }} 
          />
        ))}
      </div>
      
      {/* Decorative Glow */}
      <div className="fixed top-0 left-0 w-[50vw] h-[50vh] bg-sakura/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vh] bg-sakura/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <main className="relative z-20 w-full h-screen">

        {/* ================= WELCOME ================= */}
        <Section active={page === 0}
          id="welcome" 
          videoSrc="https://github.com/marcellnw/undanganfamilyjuvi/raw/refs/heads/main/From%20KlickPin%20CF%20%E3%80%8C%E3%80%8Ca%20Idee%20matrimoni%E3%80%8D%E3%81%8A%E3%81%97%E3%82%83%E3%82%8C%E3%81%BE%E3%81%A8%E3%82%81%E3%81%AE%E4%BA%BA%E6%B0%97%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%EF%BD%9CPinterest%EF%BD%9CCarla%E3%80%8D%5B%E5%8B%95%E7%94%BB%5D%20_%20%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%20%E3%83%9B%E3%83%83%E3%83%88%E3%82%AB%E3%83%BC%E3%83%9A%E3%83%83%E3%83%88%20%E3%83%94%E3%83%B3%E3%82%AF.mp4"
        >
          <motion.div
            initial={{ rotate: -15, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-sakura-deep/80 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl ring-8 ring-white/40 backdrop-blur-sm ethereal-glow overflow-hidden">
              <img 
                src="https://github.com/marcellnw/undanganfamilyjuvi/blob/main/profiljuvi.png?raw=true" 
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-sakura-deep mb-2 font-serif italic ethereal-glow">
              Undangan Spesial
            </h1>

            <p className="text-lg text-gray-500 font-bold uppercase tracking-widest">
              Ibu Epi & Bpk Jun, Ami
            </p> 
          </motion.div>

          <p className="text-gray-500 italic font-serif text-lg mb-6">
            Buka pintu menuju kebahagiaan kami
          </p>

          <Button onClick={next}>
            Masuk <ChevronRight className="w-4 h-4" />
          </Button>
        </Section>

        {/* ================= SCHEDULE ================= */}
        <Section active={page === 1}
          id="schedule" 
          title="Rangkaian Acara"
          videoSrc="https://github.com/marcellnw/undanganfamilyjuvi/raw/refs/heads/main/0416(1).mp4"
        >
          <div className="w-full space-y-4 mb-8">
            {[ 
              { icon: GraduationCap, title: "Wisuda" },
              { icon: Home, title: "Selamatan Rumah" },
              { icon: Cake, title: "Ulang Tahun Ami" }
            ].map((item, i) => (
              <motion.div key={i} className="flex items-center p-4 bg-white/40 rounded-3xl gap-4">
                <item.icon className="w-8 h-8 text-pink-400" />
                <span className="text-lg font-bold">{item.title}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button onClick={prev}>Kembali</Button>
            <Button onClick={next}>Lanjut</Button>
          </div>
        </Section>

        {/* ================= TIME ================= */}
        <Section active={page === 2}
          id="time" 
          title="Waktu & Acara"
          videoSrc="https://github.com/marcellnw/undanganfamilyjuvi/raw/refs/heads/main/0416(2).mp4"
        >
          <p className="mb-6 text-lg font-serif">
            08 Mei 2026 — 12:00 WIB
          </p>

          <div className="flex gap-3">
            <Button onClick={prev}>Kembali</Button>
            <Button onClick={next}>Galeri</Button>
          </div>
        </Section>

        {/* ================= GALLERY ================= */}
        <Section active={page === 3}
          id="gallery" 
          title="Gallery Gambar"
          videoSrc="https://github.com/marcellnw/undanganfamilyjuvi/raw/refs/heads/main/b1f95141a80513049c6a081b091898db.mp4"
        >
          <div className="grid grid-cols-2 gap-3 mb-8 w-full">
            {[1, 2, 3, 4].map((i) => (
              <img key={i} src={`https://picsum.photos/seed/${i}/400`} />
            ))}
          </div>

          <div className="flex gap-3">
            <Button onClick={prev}>Kembali</Button>
            <Button onClick={goHome}>Awal</Button>
          </div>
        </Section>

      </main>
    </div>
  );
}

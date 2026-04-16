import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

// --- Reusable Components ---

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

const PageWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => (
  <motion.div
    key={id}
    initial={{ opacity: 0, x: 20, scale: 0.98 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: -20, scale: 0.98 }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="w-full max-w-lg mx-auto flex flex-col items-center justify-center p-8 text-center invitation-card rounded-[2.5rem] relative overflow-hidden min-h-[70vh] shadow-2xl"
  >
    {children}
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = ['welcome', 'schedule', 'time', 'gallery'];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage(0); // Reset ke awal
  };

  return (
    <div className="relative min-h-screen bg-luxury-pink flex items-center justify-center overflow-hidden p-4">
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
              animationDelay: `${Math.random() * i}s`,
              animationDuration: `${Math.random() * 15 + 10}s`
            }} 
          />
        ))}
      </div>
      
      {/* Decorative Ornaments */}
      <div className="fixed top-0 left-0 w-[50vw] h-[50vh] bg-sakura/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vh] bg-sakura/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <main className="relative z-20 w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {currentPage === 0 && (
            <PageWrapper id="welcome">
              <motion.div
                initial={{ rotate: -15, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="mb-8"
              >
                <div className="w-24 h-24 bg-sakura-deep/80 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl ring-8 ring-white/40 backdrop-blur-sm ethereal-glow overflow-hidden">
                  <img 
                    src="https://github.com/marcellnw/undanganfamilyjuvi/blob/main/profiljuvi.png?raw=true" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-sakura-deep mb-2 font-serif italic ethereal-glow">
                  Undangan Spesial
                </h1>
                <p className="text-lg text-gray-500 font-sans font-bold uppercase text-center tracking-widest">
                  Ibu Epi & Bpk Jun, Ami
                </p> 
              </motion.div>

              <div className="space-y-6">
                <p className="text-gray-500 italic font-serif text-lg">
                  Buka pintu menuju kebahagiaan kami
                </p>
                <div className="flex justify-center">
                  <Button onClick={nextPage}>
                    Masuk Ke Dalam <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </PageWrapper>
          )}

          {/* Bagian Selanjutnya akan dikirim di pesan berikutnya */}

          {currentPage === 1 && (
            <PageWrapper id="schedule">
              <div className="title-banner-sakura uppercase tracking-[0.2em] relative z-10 mb-6">Rangkaian Acara</div>
              <div className="w-full space-y-4 mb-8">
                {[
                  { icon: GraduationCap, title: "Wisuda", color: "text-purple-400" },
                  { icon: Home, title: "Selamatan Rumah", color: "text-rose-400" },
                  { icon: Cake, title: "Ulang Tahun Ami", color: "text-pink-400" }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center p-4 bg-white/40 backdrop-blur-sm rounded-3xl gap-4 border border-white/50 shadow-sm"
                  >
                    <item.icon className={`w-8 h-8 ${item.color} ethereal-glow`} />
                    <span className="text-lg font-bold text-gray-800 font-serif">{item.title}</span>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 mb-8 bg-white/30 backdrop-blur-md rounded-[2rem] text-left w-full border border-white/60">
                <p className="text-xs uppercase tracking-[0.2em] text-sakura-deep font-bold mb-3">📌 Detail Acara:</p>
                <div className="space-y-2 text-sm text-gray-700 font-serif">
                    <p>🎓 <span className="font-bold">Nama:</span> <span className="italic">Padmi Adika Juvi, S.Pd</span></p>
                    <p>👨‍👩‍👧 <span className="font-bold">Tuan Rumah:</span> <span className="italic">Keluarga Bpk. Zulkarnain & Ibu Karvitamaini</span></p>
                    <p>🎂 <span className="font-bold">Ulang Tahun:</span> <span className="italic">Ami</span></p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-sakura-deep font-semibold italic text-xl font-serif text-center w-full">Assalamu’alaikum Wr. Wb.</p>
                <p className="text-gray-500 leading-relaxed text-sm font-serif italic max-w-[280px] mx-auto">
                  Dengan penuh rasa syukur, kami mengundang Anda untuk hadir dalam momen bahagia keluarga kami.
                </p>
              </div>

              <Button onClick={nextPage}>
                Waktu & Acara <Calendar className="w-4 h-4 ml-1" />
              </Button>
            </PageWrapper>
          )}

          {currentPage === 2 && (
            <PageWrapper id="time">
              <div className="title-banner-sakura uppercase tracking-[0.2em] relative z-10 mb-6">Waktu & Lokasi</div>
              <div className="w-full space-y-8 mb-8 text-left">
                <div className="flex items-start gap-5">
                  <div className="bg-sakura/20 p-3 rounded-full backdrop-blur-sm">
                    <Calendar className="w-6 h-6 text-sakura-deep" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-sakura-deep font-serif italic">08 Mei 2026</p>
                    <p className="text-xs flex items-center gap-1 text-gray-400 font-sans tracking-widest uppercase">
                      <Clock className="w-3 h-3" /> 12:00 WIB — Selesai
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 border-t border-white/40 pt-6">
                  <div className="bg-luxury-silver/40 p-3 rounded-full backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-700 leading-tight font-serif italic">Kediaman rumah jelutung kota jambi</p>
                    <button className="text-[10px] text-sakura-deep mt-2 underline tracking-widest font-bold">LIHAT MAPS</button>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10 text-gray-500 italic text-sm font-serif">
                <p>Adalah suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu berkenan hadir.</p>
                <p className="text-sakura-deep font-bold not-italic font-serif text-base">Semoga kebersamaan ini membawa keberkahan ✨</p>
              </div>

              <Button onClick={nextPage}>
                Buka Gambar <ImageIcon className="w-4 h-4 ml-1" />
              </Button>
            </PageWrapper>
          )}

          {currentPage === 3 && (
            <PageWrapper id="gallery">
              <div className="title-banner-sakura uppercase tracking-[0.2em] relative z-10 mb-6">Gallery Gambar</div>
              <div className="grid grid-cols-2 gap-3 mb-8 w-full">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="aspect-square bg-white p-1 rounded-xl shadow-md overflow-hidden"
                  >
                    <img 
                      src={`https://picsum.photos/seed/ami${i}/500/500`} 
                      className="w-full h-full object-cover rounded-lg"
                      alt="Gallery"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col gap-4 w-full">
                <Button onClick={prevPage}>
                  Kembali ke Awal
                </Button>
                <p className="text-[10px] text-gray-400 font-sans tracking-[0.4em] uppercase text-center">Terima Kasih</p>
              </div>
            </PageWrapper>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

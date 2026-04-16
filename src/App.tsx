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
  Heart,
  Image as ImageIcon,
  Music,
  Share2
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

const Section = ({ children, id, title }: { children: React.ReactNode, id: string, title?: string }) => (
  <motion.div
    key={id}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 1.1 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="min-h-[70vh] w-full max-w-lg mx-auto flex flex-col items-center justify-center p-8 text-center invitation-card rounded-[2.5rem] relative overflow-hidden"
  >
    {title && <div className="title-banner-sakura uppercase tracking-[0.2em]">{title}</div>}
    <div className="flex-1 flex flex-col items-center justify-center w-full">
      {children}
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState(0);

  const nextPage = () => setPage((prev) => prev + 1);
  const resetPage = () => setPage(0);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">
      {/* Background Batik elements */}
      <div className="fixed inset-0 batik-pattern pointer-events-none" />
      
      {/* Decorative Ornaments */}
      <div className="fixed top-0 left-0 w-64 h-64 bg-army/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="fixed bottom-0 right-0 w-80 h-80 bg-sakura/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <main className="relative z-10 w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          {page === 0 && (
            <Section id="welcome">
              <motion.div
                initial={{ rotate: -15, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="mb-8"
              >
                <div className="w-24 h-24 bg-army rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl ring-8 ring-sakura-light">
                  <Heart className="text-sakura w-12 h-12" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-army mb-2 font-serif italic">
                  Undangan Spesial
                </h1>
                <p className="text-lg text-sakura-deep font-sans font-bold uppercase text-center">
                  Ibu Epi & Bpk Jun, Ami
                </p> 
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-6"
              >
                <p className="text-gray-500 italic font-serif text-lg">
                  Buka pintu menuju kebahagiaan kami
                </p>
                <div className="flex justify-center">
                  <Button onClick={nextPage}>
                    Masuk Ke Dalam <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </Section>
          )}

          {page === 1 && (
            <Section id="schedule" title="Rangkaian Acara">
              <div className="w-full space-y-4 mb-8">
                {[
                  { icon: GraduationCap, title: "Wisuda", color: "text-blue-500" },
                  { icon: Home, title: "Selamatan Rumah", color: "text-green-600" },
                  { icon: Cake, title: "Ulang Tahun Ami", color: "text-pink-500" }
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center p-4 bg-white/50 rounded-2xl gap-4 border border-army/5 shadow-sm"
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className="text-lg font-bold text-gray-800">{item.title}</span>
                  </motion.div>
                ))}
              </div>

              <div className="p-5 mb-8 bg-sakura-light/50 rounded-2xl text-left w-full border border-sakura/20">
                <p className="text-xs uppercase tracking-widest text-army font-bold mb-2">📌 Detail Acara:</p>
                <div className="space-y-1 text-sm text-gray-700 font-serif">
                   <p>🎓 <span className="font-bold">Nama:</span> Padmi Adika Juvi, S.Pd</p>
                   <p>👨‍👩‍👧 <span className="font-bold">Tuan Rumah:</span> Keluarga Besar Bpk.zulkarnain dan ibu Karvitamaini</p>
                   <p>🎂 <span className="font-bold">Ulang Tahun:</span> Ami</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-army font-bold italic text-lg">Assalamu’alaikum Wr. Wb.</p>
                <p className="text-gray-600 leading-relaxed text-sm font-serif italic">
                  Dengan penuh rasa syukur dan kebahagiaan, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk hadir dalam acara spesial kami.
                </p>
              </div>

              <Button onClick={nextPage}>
                Waktu & Acara <Calendar className="w-4 h-4 ml-1" />
              </Button>
            </Section>
          )}

          {page === 2 && (
            <Section id="time" title="Waktu & Acara">
               <div className="w-full space-y-6 mb-8 text-left">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-army mt-1" />
                    <div>
                      <p className="font-bold text-2xl text-army">08 Mei 2026</p>
                      <p className="text-sm flex items-center gap-1 text-gray-500">
                        <Clock className="w-3 h-3" /> 12:00 - Selesai
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-sakura-deep mt-1" />
                    <div>
                      <p className="font-bold text-lg text-gray-800 leading-tight">Kediaman rumah jelutung kota jambi</p>
                    </div>
                  </div>
               </div>

               <div className="space-y-4 mb-10 text-gray-600 italic text-sm font-serif">
                  <p>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu.</p>
                  <p className="text-army font-bold not-italic font-sans">Semoga kebersamaan ini membawa keberkahan, kebahagiaan, dan kenangan indah bagi kita semua 💖</p>
                  <p className="text-xs">Wassalamu’alaikum Wr. Wb.</p>
               </div>

               <Button onClick={nextPage}>
                  Buka Gambar <ImageIcon className="w-4 h-4 ml-1" />
               </Button>
            </Section>
          )}

          {page === 3 && (
            <Section id="gallery" title="Gallery Gambar">
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

                <div className="flex flex-col gap-4">
                  <Button onClick={resetPage}>
                    Kembali ke Awal
                  </Button>
                  <p className="text-[10px] text-gray-400 font-sans tracking-[0.4em] uppercase">Terima Kasih</p>
                </div>
            </Section>
          )}
        </AnimatePresence>
      </main>

      {/* Floating Elements */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 10 }}
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-army border border-gray-100"
        >
          <Music className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, rotate: -10 }}
          className="w-12 h-12 bg-army rounded-full shadow-lg flex items-center justify-center text-white"
        >
          <Share2 className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}

import React, { useRef } from 'react';
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

const Section = ({ children, id, title, videoSrc }: { children: React.ReactNode, id: string, title?: string, videoSrc?: string }) => {
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
      className="min-h-screen w-full flex items-center justify-center p-4 snap-start relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
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

// --- Main App ---

const [currentPage, setCurrentPage] = React.useState(0);

const nextPage = () => {
  setCurrentPage((prev) => Math.min(prev + 1, 3));
};

const prevPage = () => {
  setCurrentPage((prev) => Math.max(prev - 1, 0));
};

const goToPage = (index: number) => {
  setCurrentPage(index);
};

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNext = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const resetScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-luxury-pink snap-y snap-mandatory overflow-y-auto">
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
      
      {/* Decorative Ornaments (Blurry Glows) */}
      <div className="fixed top-0 left-0 w-[50vw] h-[50vh] bg-sakura/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vh] bg-sakura/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <main className="relative z-20 w-full">
        <Section 
          id="welcome" 
          videoSrc="https://github.com/marcellnw/undanganfamilyjuvi/raw/refs/heads/main/From%20KlickPin%20CF%20%E3%80%8C%E3%80%8Ca%20Idee%20matrimoni%E3%80%8D%E3%81%8A%E3%81%97%E3%82%83%E3%82%8C%E3%81%BE%E3%81%A8%E3%82%81%E3%81%AE%E4%BA%BA%E6%B0%97%E3%82%A2%E3%82%A4%E3%83%87%E3%82%A2%EF%BD%9CPinterest%EF%BD%9CCarla%E3%80%8D%5B%E5%8B%95%E7%94%BB%5D%20_%20%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%20%E3%83%9B%E3%83%83%E3%83%88%E3%82%AB%E3%83%BC%E3%83%9A%E3%83%83%E3%83%88%20%E3%83%94%E3%83%B3%E3%82%AF.mp4"
        >
          <motion.div
            initial={{ rotate: -15, scale: 0.5, opacity: 0 }}
            whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-500 italic font-serif text-lg">
              Buka pintu menuju kebahagiaan kami
            </p>
            <div className="flex justify-center">
              <Button onClick={() => scrollToNext('schedule')}>
                Masuk Ke Dalam <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </Section>

        <Section 
          id="schedule" 
          title="Rangkaian Acara"
          videoSrc="https://github.com/marcellnw/undanganfamilyjuvi/raw/refs/heads/main/0416(1).mp4"
        >
          <div className="w-full space-y-4 mb-8">
            {[
              { icon: GraduationCap, title: "Wisuda", color: "text-purple-400" },
              { icon: Home, title: "Selamatan Rumah", color: "text-rose-400" },
              { icon: Cake, title: "Ulang Tahun Ami", color: "text-pink-400" }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
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
                <p>🎂 <span className="font-bold">Ulang Tahun:</span> <span className="italic italic">Ami</span></p>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-sakura-deep font-semibold italic text-xl font-serif ethere-glow text-center w-full">Assalamu’alaikum Wr. Wb.</p>
            <p className="text-gray-500 leading-relaxed text-sm font-serif italic max-w-[280px] mx-auto">
              Dengan penuh rasa syukur, kami mengundang Anda untuk hadir dalam momen bahagia keluarga kami.
            </p>
          </div>

          <Button onClick={() => scrollToNext('time')}>
            Waktu & Acara <Calendar className="w-4 h-4 ml-1" />
          </Button>
        </Section>

        <Section 
          id="time" 
          title="Waktu & Acara"
          videoSrc="https://github.com/marcellnw/undanganfamilyjuvi/raw/refs/heads/main/0416(2).mp4"
        >
          <div className="w-full space-y-8 mb-8 text-left">
            <div className="flex items-start gap-5 group">
              <div className="bg-sakura/20 p-3 rounded-full group-hover:bg-sakura/30 transition-colors backdrop-blur-sm">
                <Calendar className="w-6 h-6 text-sakura-deep" />
              </div>
              <div>
                <p className="font-bold text-2xl text-sakura-deep font-serif italic">08 Mei 2026</p>
                <p className="text-xs flex items-center gap-1 text-gray-400 font-sans tracking-widest uppercase">
                  <Clock className="w-3 h-3" /> 12:00 WIB — Selesai
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 group border-t border-white/40 pt-6">
              <div className="bg-luxury-silver/40 p-3 rounded-full group-hover:bg-luxury-silver/60 transition-colors backdrop-blur-sm">
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
            <p className="text-sakura-deep font-bold not-italic font-serif text-base shadow-white/50 drop-shadow-sm">Semoga kebersamaan ini membawa keberkahan bagi kita semua ✨</p>
          </div>

          <Button onClick={() => scrollToNext('gallery')}>
            Buka Gambar <ImageIcon className="w-4 h-4 ml-1" />
          </Button>
        </Section>

        <Section 
          id="gallery" 
          title="Gallery Gambar"
          videoSrc="https://github.com/marcellnw/undanganfamilyjuvi/raw/refs/heads/main/b1f95141a80513049c6a081b091898db.mp4"
        >
          <div className="grid grid-cols-2 gap-3 mb-8 w-full">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
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
            <Button onClick={resetScroll}>
              Kembali ke Awal
            </Button>
            <p className="text-[10px] text-gray-400 font-sans tracking-[0.4em] uppercase text-center">Terima Kasih</p>
          </div>
        </Section>
      </main>
    </div>
  );
}

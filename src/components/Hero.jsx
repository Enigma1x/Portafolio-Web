// Partículas decorativas: posición (Tailwind), tamaño, color y delay de animación en ms para efecto escalonado.
const PARTICLES = [
  { top: 'top-[5%]', left: 'left-1/6', size: 'w-3 h-3', color: 'bg-purple-500', delay: 0 },
  { top: 'top-1/6', left: 'left-1/4', size: 'w-2.5 h-2.5', color: 'bg-blue-400', delay: 150 },
  { top: 'top-1/4', left: 'left-[12.5%]', size: 'w-2 h-2', color: 'bg-indigo-300', delay: 300 },
  { top: 'top-1/5', left: 'left-1/3', size: 'w-2.5 h-2.5', color: 'bg-violet-400', delay: 200 },
  { top: 'top-[12.5%]', left: 'right-1/6', size: 'w-3 h-3', color: 'bg-violet-400', delay: 450 },
  { top: 'top-1/4', left: 'right-1/4', size: 'w-2.5 h-2.5', color: 'bg-fuchsia-400', delay: 600 },
  { top: 'top-1/3', left: 'right-[12.5%]', size: 'w-2 h-2', color: 'bg-purple-300', delay: 750 },
  { top: 'top-1/5', left: 'right-1/3', size: 'w-2.5 h-2.5', color: 'bg-blue-400', delay: 550 },
  { top: 'top-1/2', left: 'left-[8.33%]', size: 'w-3 h-3', color: 'bg-blue-500', delay: 900 },
  { top: 'top-[45%]', left: 'left-1/4', size: 'w-2.5 h-2.5', color: 'bg-indigo-400', delay: 1050 },
  { top: 'top-[55%]', left: 'left-1/6', size: 'w-2 h-2', color: 'bg-violet-300', delay: 1200 },
  { top: 'top-[48%]', left: 'left-1/3', size: 'w-2 h-2', color: 'bg-fuchsia-400', delay: 1100 },
  { top: 'top-1/2', left: 'right-[8.33%]', size: 'w-3 h-3', color: 'bg-fuchsia-500', delay: 1350 },
  { top: 'top-[45%]', left: 'right-1/4', size: 'w-2.5 h-2.5', color: 'bg-purple-400', delay: 1500 },
  { top: 'top-[55%]', left: 'right-1/6', size: 'w-2 h-2', color: 'bg-blue-300', delay: 1650 },
  { top: 'top-[48%]', left: 'right-1/3', size: 'w-2.5 h-2.5', color: 'bg-indigo-400', delay: 1450 },
  { top: 'bottom-1/6', left: 'left-1/6', size: 'w-3 h-3', color: 'bg-indigo-500', delay: 1800 },
  { top: 'bottom-1/4', left: 'left-1/4', size: 'w-2.5 h-2.5', color: 'bg-violet-400', delay: 1950 },
  { top: 'bottom-1/3', left: 'left-[12.5%]', size: 'w-2 h-2', color: 'bg-fuchsia-300', delay: 2100 },
  { top: 'bottom-1/5', left: 'left-1/3', size: 'w-2.5 h-2.5', color: 'bg-purple-400', delay: 2000 },
  { top: 'bottom-1/6', left: 'right-1/6', size: 'w-3 h-3', color: 'bg-purple-500', delay: 2250 },
  { top: 'bottom-1/4', left: 'right-1/4', size: 'w-2.5 h-2.5', color: 'bg-blue-400', delay: 2400 },
  { top: 'bottom-1/3', left: 'right-[12.5%]', size: 'w-2 h-2', color: 'bg-indigo-300', delay: 2550 },
  { top: 'bottom-1/5', left: 'right-1/3', size: 'w-2 h-2', color: 'bg-violet-400', delay: 2350 },
  { top: 'top-[30%]', left: 'left-[40%]', size: 'w-2 h-2', color: 'bg-violet-400', delay: 2700 },
  { top: 'top-[70%]', left: 'left-[35%]', size: 'w-2.5 h-2.5', color: 'bg-fuchsia-300', delay: 2850 },
  { top: 'top-[20%]', left: 'right-[40%]', size: 'w-2 h-2', color: 'bg-purple-400', delay: 3000 },
  { top: 'top-[60%]', left: 'right-[35%]', size: 'w-2.5 h-2.5', color: 'bg-blue-300', delay: 3150 },
  { top: 'top-[40%]', left: 'left-[45%]', size: 'w-2 h-2', color: 'bg-indigo-400', delay: 3300 },
  { top: 'top-[80%]', left: 'right-[45%]', size: 'w-2 h-2', color: 'bg-violet-300', delay: 3450 },
  { top: 'top-[25%]', left: 'left-[38%]', size: 'w-2 h-2', color: 'bg-purple-300', delay: 3600 },
  { top: 'top-[75%]', left: 'right-[38%]', size: 'w-2.5 h-2.5', color: 'bg-blue-400', delay: 3750 },
  { top: 'top-[35%]', left: 'right-[42%]', size: 'w-2 h-2', color: 'bg-fuchsia-300', delay: 3900 },
  { top: 'top-[65%]', left: 'left-[42%]', size: 'w-2.5 h-2.5', color: 'bg-indigo-400', delay: 4050 },
  { top: 'top-[28%]', left: 'left-[32%]', size: 'w-2 h-2', color: 'bg-violet-400', delay: 4200 },
  { top: 'top-[72%]', left: 'right-[32%]', size: 'w-2.5 h-2.5', color: 'bg-purple-400', delay: 4350 },
  { top: 'top-[22%]', left: 'right-[38%]', size: 'w-2 h-2', color: 'bg-blue-300', delay: 4500 },
  { top: 'top-[62%]', left: 'left-[38%]', size: 'w-2.5 h-2.5', color: 'bg-fuchsia-400', delay: 4650 },
]

/** Sección de presentación: nombre, rol, botones CTA y redes. Las partículas usan animationDelay para no animar todas a la vez. */
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div
        className="absolute inset-0 min-h-screen w-full pointer-events-none"
        style={{ zIndex: 0 }}
        aria-hidden
      >
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className={`absolute ${p.top} ${p.left} ${p.size} rounded-full ${p.color} animate-float-particle`}
            style={{ animationDelay: `${p.delay}ms` }}
          />
        ))}
      </div>
      <div className="text-center max-w-3xl relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          Hola, soy <span className="text-sky-600 dark:text-sky-400">Robert Steven</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
          · Desarrollador Full Stack ·
        </p>
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#proyectos" className="px-6 py-3 bg-sky-600 dark:bg-sky-500 text-white rounded-lg font-medium hover:bg-sky-700 dark:hover:bg-sky-400 transition-colors">
              Mis proyectos
            </a>
            <a href="#sobre-mi" className="px-6 py-3 border-2 border-sky-500 dark:border-sky-400 rounded-lg font-medium text-sky-600 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-500/20 transition-colors">
              Sobre mí
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/Enigma1x" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800/80 dark:bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/Enigma1x" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800/80 dark:bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:rs.me82003@gmail.com" className="w-12 h-12 rounded-full bg-slate-800/80 dark:bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors" aria-label="Email">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </a>
            <a href="https://wa.me/+50663983138" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800/80 dark:bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors" aria-label="WhatsApp">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  TsIcon,
  ReactIcon,
  ViteIcon,
  TailwindIcon,
  SupabaseIcon,
  FramerIcon,
  ElectronIcon,
  DotnetIcon,
  GitIcon,
} from '../assets/tech-icons/icons'

const tecnologias = [
  { name: 'HTML', Icon: HtmlIcon },
  { name: 'CSS', Icon: CssIcon },
  { name: 'JavaScript', Icon: JsIcon },
  { name: 'TypeScript', Icon: TsIcon },
  { name: 'React', Icon: ReactIcon },
  { name: 'Vite', Icon: ViteIcon },
  { name: 'Tailwind CSS', Icon: TailwindIcon },
  { name: 'Supabase', Icon: SupabaseIcon },
  { name: 'Framer Motion', Icon: FramerIcon },
  { name: 'Electron', Icon: ElectronIcon },
  { name: 'C#', Icon: DotnetIcon },
  { name: 'Git', Icon: GitIcon },
]

/** Grid de tecnologías con iconos; el tooltip (nombre) aparece al hacer hover (group-hover). */
function Skills() {
  return (
    <section id="tecnologias" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">Tecnologías</h2>
        <div className="flex flex-wrap justify-center gap-8 pb-10">
          {tecnologias.map(({ name, Icon }, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center"
            >
              <div
                className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm
                  transition-all duration-300 ease-out
                  hover:scale-110 hover:shadow-lg hover:shadow-sky-500/20 dark:hover:shadow-sky-400/20 hover:border-sky-400 dark:hover:border-sky-500 hover:-translate-y-1
                  cursor-default"
              >
                <Icon
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg
                  bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-sm font-medium
                  opacity-0 scale-90 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100
                  whitespace-nowrap pointer-events-none"
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

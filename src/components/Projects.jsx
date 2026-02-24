import { useState } from 'react'
import ProjectModal from './ProjectModal'
import reppesa1 from '../assets/Proyectos offline/ReppesaWeb/Captura de pantalla 2026-02-17 231804.png'
import reppesa2 from '../assets/Proyectos offline/ReppesaWeb/Captura de pantalla 2026-02-17 231829.png'
import reppesa3 from '../assets/Proyectos offline/ReppesaWeb/Captura de pantalla 2026-02-17 231943.png'
import reppesa4 from '../assets/Proyectos offline/ReppesaWeb/Captura de pantalla 2026-02-17 231847.png'
import reppesa5 from '../assets/Proyectos offline/ReppesaWeb/Captura de pantalla 2026-02-17 231904.png'
import reppesa6 from '../assets/Proyectos offline/ReppesaWeb/Captura de pantalla 2026-02-10 223724.png'

// Imágenes importadas en build (Vite las incluye en el bundle).
const REPPESA_IMAGES = [
  { src: reppesa1, alt: 'Reppesa Web - Captura 1' },
  { src: reppesa2, alt: 'Reppesa Web - Captura 2' },
  { src: reppesa3, alt: 'Reppesa Web - Captura 3' },
  { src: reppesa4, alt: 'Reppesa Web - Captura 4' },
  { src: reppesa5, alt: 'Reppesa Web - Captura 5' },
  { src: reppesa6, alt: 'Reppesa Web - Captura 6' },
]

// Viruflix: imágenes en public/proyectos/Viruflix/; se referencian por URL. encodeURIComponent por nombres con espacios.
const VIRUFLIX_IMAGE_NAMES = [
  'Captura de pantalla 2026-02-18 003013.png',
  'Captura de pantalla 2026-02-18 003028.png',
  'Captura de pantalla 2026-02-18 003048.png',
  'Captura de pantalla 2026-02-18 003107.png',
  'Captura de pantalla 2026-02-18 003116.png',
  'Captura de pantalla 2026-02-18 003455.png',
  'Captura de pantalla 2026-02-18 003515.png',
  'Captura de pantalla 2026-02-18 003713.png',
]
const VIRUFLIX_IMAGES = VIRUFLIX_IMAGE_NAMES.map((name, i) => ({
  src: `/proyectos/Viruflix/${encodeURIComponent(name)}`,
  alt: `Viruflix - Captura ${i + 1}`,
}))

/** Lista de proyectos: con galería abren modal; sin galería son enlaces externos (ej. GitHub). */
function Projects() {
  const [modalProject, setModalProject] = useState(null)

  const projects = [
    {
      title: 'Ecommerce Reppesa',
      description: 'Tienda virtual de repuestos para camiones y maquinaria en Costa Rica. Carrito, pedidos por WhatsApp, catálogo por categorías, Supabase y diseño responsive.',
      tech: 'React, TypeScript, Tailwind, Supabase, Framer Motion',
      url: null,
      images: REPPESA_IMAGES,
    },
    {
      title: 'Viruflix',
      description: 'Plataforma de streaming con películas y series. Integración con TMDB API y Supabase (auth, perfiles, historial). Disponible como web y app de escritorio con Electron. Reproductor, búsqueda, recomendaciones y TV en vivo.',
      tech: 'React, Vite, Tailwind, Supabase, TMDB API, Electron, Framer Motion',
      url: null,
      images: VIRUFLIX_IMAGES,
    },
    { title: 'CalculadoraPractica', description: 'Calculadora basada en la de Windows.', tech: 'C#', url: 'https://github.com/Enigma1x/CalculadoraPractica' },
    { title: 'AppCitas-Tarea-SinInterfaz', description: 'Programa para crear lista de personas con sus citas.', tech: 'C#', url: 'https://github.com/Enigma1x/AppCitas-Tarea-SinInterfaz' },
  ]

  const handleProjectClick = (project) => {
    if (project.images?.length) setModalProject(project)
    else if (project.url) window.open(project.url, '_blank')
  }

  return (
    <section id="proyectos" className="py-24 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-12 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => {
            const article = (
              <article className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-800 h-full hover:border-sky-500 dark:hover:border-sky-500">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                  {project.images?.length && (
                    <span className="text-xs text-sky-600 dark:text-sky-400 whitespace-nowrap">
                      Ver galería →
                    </span>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <span className="text-sm text-sky-600 dark:text-sky-400 font-medium">{project.tech}</span>
              </article>
            )
            return project.images?.length ? (
              <button key={i} type="button" onClick={() => handleProjectClick(project)} className="text-left w-full block">
                {article}
              </button>
            ) : (
              <a key={i} href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                {article}
              </a>
            )
          })}
        </div>
      </div>

      <ProjectModal
        isOpen={!!modalProject}
        onClose={() => setModalProject(null)}
        title={modalProject?.title}
        description={modalProject?.description}
        tech={modalProject?.tech}
        url={modalProject?.url}
        images={modalProject?.images}
      />
    </section>
  )
}

export default Projects

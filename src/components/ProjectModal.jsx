import { useEffect } from 'react'

/**
 * Modal de galería para un proyecto: info a la izquierda, imágenes a la derecha.
 * - Bloquea scroll del body cuando está abierto.
 * - Cierre con Escape o clic fuera. cleanup del useEffect quita el listener y restaura overflow.
 */
function ProjectModal({ isOpen, onClose, title, description, tech, url, images = [] }) {
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose()
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería de ${title}`}
    >
      <div
        className="relative flex flex-col md:flex-row max-w-5xl w-full max-h-[90vh] bg-white dark:bg-slate-900 rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <aside className="w-full md:w-80 shrink-0 flex flex-col p-5 md:p-6 bg-slate-50 dark:bg-slate-800/50 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
          <div className="hidden md:flex justify-end mb-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-400 transition-colors"
              aria-label="Cerrar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">{title}</h3>
          {description && (
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {description}
            </p>
          )}
          {tech && (
            <div className="mb-4">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wide">Tecnologías</span>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{tech}</p>
            </div>
          )}
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm font-medium text-sky-600 dark:text-sky-400 hover:underline"
            >
              Ver proyecto →
            </a>
          )}
        </aside>

        <div className="flex-1 overflow-auto min-h-0">
          <div className="p-4 space-y-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt || `Captura ${i + 1} de ${title}`}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal

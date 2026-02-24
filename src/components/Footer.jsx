/** Pie de página con año dinámico y crédito. */
function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-900 dark:bg-slate-950 text-slate-400 dark:text-slate-500 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <p>© {new Date().getFullYear()} Enigma1x. Hecho con ❤️ por <span className="text-sky-600 dark:text-sky-400">Robert Steven</span>.</p>
      </div>
    </footer>
  )
}

export default Footer

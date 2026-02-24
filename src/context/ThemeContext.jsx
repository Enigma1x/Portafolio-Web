import { createContext, useContext, useState, useEffect } from 'react'

// Contexto global para tema claro/oscuro. Cualquier componente puede leer isDark y toggleTheme.
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  // Estado inicial: lee de localStorage o, si no hay valor, usa la preferencia del sistema (prefers-color-scheme).
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  // Sincroniza el tema con el DOM: añade/quita la clase "dark" en <html> y guarda en localStorage.
  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => setIsDark((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

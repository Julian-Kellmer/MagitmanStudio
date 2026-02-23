import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'

const LanguageContext = createContext(null)

// Detect initial language: localStorage → navigator → 'es'
function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch {}
  const nav = navigator.language?.slice(0, 2)
  return nav === 'en' ? 'en' : 'es'
}

// Dynamic loader map — each namespace loads only the needed locale
const loaders = {
  common: (lang) => import(`./locales/${lang}/common.js`),
  home: (lang) => import(`./locales/${lang}/home.js`),
  services: (lang) => import(`./locales/${lang}/services.jsx`),
  about: (lang) => import(`./locales/${lang}/about.js`),
  contact: (lang) => import(`./locales/${lang}/contact.js`),
}

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(getInitialLang)
  const [dictionaries, setDictionaries] = useState({})
  const loadedRef = useRef({}) // track loaded: { 'es:common': true, ... }

  const setLang = useCallback((newLang) => {
    setLangState(newLang)
    try {
      localStorage.setItem('lang', newLang)
    } catch {}
  }, [])

  // Load a namespace for the current lang
  const loadNamespace = useCallback(
    async (ns) => {
      const key = `${lang}:${ns}`
      if (loadedRef.current[key]) return
      loadedRef.current[key] = true

      try {
        const loader = loaders[ns]
        if (!loader) {
          if (import.meta.env.DEV)
            console.warn(`[i18n] Unknown namespace: ${ns}`)
          return
        }
        const mod = await loader(lang)
        setDictionaries((prev) => ({
          ...prev,
          [key]: mod.default || mod,
        }))
      } catch (err) {
        if (import.meta.env.DEV)
          console.warn(`[i18n] Failed to load ${key}:`, err)
        // Try fallback to ES
        if (lang !== 'es') {
          try {
            const fallback = await loaders[ns]('es')
            setDictionaries((prev) => ({
              ...prev,
              [key]: fallback.default || fallback,
            }))
          } catch {}
        }
      }
    },
    [lang],
  )

  // Reset loaded tracking when lang changes
  useEffect(() => {
    loadedRef.current = {}
  }, [lang])

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, dictionaries, loadNamespace }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Simple interpolation: replaces {{key}} with values
function interpolate(str, params) {
  if (!params || typeof str !== 'string') return str
  return str.replace(/\{\{(\w+)\}\}/g, (_, k) => params[k] ?? `{{${k}}}`)
}

// Hook: useTranslation('namespace')
export function useTranslation(namespace) {
  const ctx = useContext(LanguageContext)
  if (!ctx)
    throw new Error('useTranslation must be used within LanguageProvider')

  const { lang, setLang, dictionaries, loadNamespace } = ctx
  const dictKey = `${lang}:${namespace}`
  const dict = dictionaries[dictKey]

  // Load namespace on mount & when lang changes
  useEffect(() => {
    loadNamespace(namespace)
  }, [namespace, loadNamespace])

  const t = useCallback(
    (key, params) => {
      if (!dict) return key // Still loading

      // Support nested keys: 'section.title'
      const value = key.split('.').reduce((obj, k) => obj?.[k], dict)

      if (value === undefined) {
        if (import.meta.env.DEV) {
          console.warn(`[i18n] Missing key "${key}" in [${lang}/${namespace}]`)
        }
        return key
      }

      if (typeof value === 'function') return value(params)
      return interpolate(value, params)
    },
    [dict, lang, namespace],
  )

  return { t, lang, setLang }
}

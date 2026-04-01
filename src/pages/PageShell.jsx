import { useEffect } from 'react'

const PAGE_ASSETS = [
  {
    href: 'https://fonts.googleapis.com',
    rel: 'preconnect',
  },
  {
    crossOrigin: '',
    href: 'https://fonts.gstatic.com',
    rel: 'preconnect',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap',
    rel: 'stylesheet',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
    rel: 'stylesheet',
  },
]

export function PageShell({ children, styles, title }) {
  useEffect(() => {
    document.documentElement.lang = 'en'
    document.documentElement.classList.add('light')

    if (title) {
      document.title = title
    }

    for (const asset of PAGE_ASSETS) {
      const selector = `link[data-page-asset="${asset.href}"]`

      if (document.head.querySelector(selector)) {
        continue
      }

      const link = document.createElement('link')
      link.setAttribute('data-page-asset', asset.href)
      link.rel = asset.rel
      link.href = asset.href

      if ('crossOrigin' in asset) {
        link.crossOrigin = asset.crossOrigin
      }

      document.head.appendChild(link)
    }
  }, [title])

  return (
    <>
      {styles ? <style>{styles}</style> : null}
      {children}
    </>
  )
}

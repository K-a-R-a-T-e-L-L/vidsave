import './styles/globals.css';
import type { Metadata } from 'next';
import SchemaOrg from './components/SchemaOrg';
import { YMCounter } from './components/YMCounter';

export const metadata: Metadata = {
  title: {
    default: 'Установка видеонаблюдения в Кемерово | «ВИДЕОХРАНИТЕЛЬ»',
    template: '%s | «ВИДЕОХРАНИТЕЛЬ»'
  },
  description: 'Профессиональная установка систем видеонаблюдения, кондиционеров и прочие электромонтажные работы в Кемерово. Гарантия, низкие цены, качество, безопасность',
  keywords: [
    'видеонаблюдение Кемерово',
    'установка камер Кемерово',
    'установка видеонаблюдения кемерово',
    'электромонтажные работы Кемерово',
    'установка кондиционеров кемерово',
    'обслуживание кондиционеров кемерово',
    'видеонаблюдения онлайн кемерово',
    'установка систем видеонаблюдения в кемерово',
    'камеры видеонаблюдения кемерово в режиме онлайн',
    'камеры видеонаблюдения кемерово в режиме онлайн в реальном времени бесплатно',
    'монтаж кондиционеров кемерово',
    'системы видеонаблюдения'
  ],
  authors: [{ name: 'Компания «ВИДЕОХРАНИТЕЛЬ»' }],
  applicationName: '«ВИДЕОХРАНИТЕЛЬ»',
  openGraph: {
    title: 'Установка видеонаблюдения в Кемерово | «ВИДЕОХРАНИТЕЛЬ»',
    description: 'Профессиональная установка систем видеонаблюдения, кондиционеров и электромонтажных работ в Кемерово.',
    url: 'https://vidsave.ru',
    siteName: '«ВИДЕОХРАНИТЕЛЬ»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/images/project_13.jpg',
        width: 1200,
        height: 630,
        alt: 'Установка видеонаблюдения, кондиционеров и электромонтажные работы в Кемерово',
      },
    ],
  },
  alternates: {
    canonical: 'https://vidsave.ru',
  },
  metadataBase: new URL('https://vidsave.ru'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/favicon.svg', sizes: '120x120', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className='no-js'>
      <body>
        <YMCounter />
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}

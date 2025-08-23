import type { Metadata } from 'next';
import './styles/globals.css';
import SchemaOrg from './components/SchemaOrg';

export const metadata: Metadata = {
  title: {
    default: 'Установка видеонаблюдения и кондиционеров в Кемерово | «ВИДЕОХРАНИТЕЛЬ»',
    template: '%s | «ВИДЕОХРАНИТЕЛЬ»'
  },
  description: 'Профессиональная установка систем видеонаблюдения, кондиционеров и электромонтажных работ в Кемерово. Гарантия, низкие цены, качество, безопасность',
  keywords: [
    'видеонаблюдение Кемерово',
    'установка камер Кемерово',
    'электромонтажные работы Кемерово',
    'кондиционеры Кемерово',
    'установка кондиционеров',
    'Видеонаблюдение Кемерово онлайн',
    'монтаж камер',
    'камеры видеонаблюдения кемерово в режиме онлайн',
    'камеры видеонаблюдения кемерово в режиме онлайн в реальном времени бесплатно',
    'установить кондиционер в кемерово',
  ],
  authors: [{ name: 'Компания «ВИДЕОХРАНИТЕЛЬ»' }],
  applicationName: '«ВИДЕОХРАНИТЕЛЬ»',
  openGraph: {
    title: 'Установка видеонаблюдения и кондиционеров в Кемерово | «ВИДЕОХРАНИТЕЛЬ»',
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
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
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
    <html lang="ru">
      <body>
        <SchemaOrg />
        {children}
      </body>
    </html>
  );
}

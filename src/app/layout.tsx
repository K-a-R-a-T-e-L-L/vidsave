import type { Metadata } from 'next';
import './styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
    'безопасность дома',
    'монтаж камер',
  ],
  authors: [{ name: 'Компания «ВИДЕОХРАНИТЕЛЬ»' }],
  applicationName: '«ВИДЕОХРАНИТЕЛЬ»',
  openGraph: {
    title: 'Установка видеонаблюдения и кондиционеров в Кемерово | «ВИДЕОХРАНИТЕЛЬ»',
    description: 'Профессиональная установка систем видеонаблюдения, кондиционеров и электромонтажных работ в Кемерово.',
    url: 'https://recsave.ru',
    siteName: '«ВИДЕОХРАНИТЕЛЬ»',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: 'https://videohramitel.ru/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Установка видеонаблюдения, кондиционеров и электромонтажные работы в Кемерово',
      },
    ],
  },
  alternates: {
    canonical: 'https://recsave.ru',
  },
  metadataBase: new URL('https://recsave.ru')
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <SpeedInsights />
        <SchemaOrg/>
        {children}
      </body>
    </html>
  );
}

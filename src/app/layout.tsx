import type { Metadata } from 'next';
import './styles/globals.css';
import Head from 'next/head';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Установка систем видеонаблюдения в Кемерово с компанией «ВИДЕОХРАНИТЕЛЬ»',
  description: 'Закажите установку систем видеонаблюдения, кондиционеров и прочих электромонтажных работ в Кемерово с компанией «ВИДЕОХРАНИТЕЛЬ». Работаем во многих городах Кузбасса (Топки, Кемерово)',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <SpeedInsights/>
        {children}
        </body>
    </html>
  );
}

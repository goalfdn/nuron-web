import '@/app/globals.css';
import localFont from "next/font/local";
import { Zen_Maru_Gothic } from 'next/font/google';

const titleFont = localFont({
  src: '../fonts/alice.regular.ttf',
  variable: '--font-alice'
});

const bodyFont = Zen_Maru_Gothic({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-zen'
});
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${titleFont.variable} ${bodyFont.variable} ${bodyFont.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
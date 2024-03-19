import '@/app/globals.css';
import localFont from "next/font/local";
import { Zen_Maru_Gothic } from 'next/font/google';

const displayFont = localFont({
  src: '../fonts/ta-moderntimes-roundedextralight.otf',
  variable: '--font-ta'
});

const titleFont = localFont({
  src: '../fonts/alice.regular.ttf',
  variable: '--font-alice'
});

const emojiFont = localFont({
  src: '../fonts/NotoColorEmoji.ttf',
  variable: '--font-noto'
});

const bodyFont = Zen_Maru_Gothic({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-zen',
  fallback: [],
  adjustFontFallback: false
});
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${displayFont.variable} ${titleFont.variable} ${emojiFont.variable} ${bodyFont.variable} ${bodyFont.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
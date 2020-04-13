import './globalCss/reset.css';
import './globalCss/global.css';
import '../public/font/font.css';
import 'swiper/css/swiper.min.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

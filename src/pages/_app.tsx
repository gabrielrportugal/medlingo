import type { AppProps } from 'next/app';
import '../styles/global.css'; // Importa os estilos globais

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

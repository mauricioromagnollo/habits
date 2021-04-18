import { AppProps } from 'next/app';
import { AuthProvider } from '../contexts/auth';

import GlobalStyle from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

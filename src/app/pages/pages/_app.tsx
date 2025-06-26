import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
import GlobalStyles from '@mui/material/GlobalStyles';
+import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
+import { createEmotionCache } from '@mui/material-nextjs/v15-pagesRouter';
import { ServerStyleSheet } from 'styled-components';
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { AppCacheProvider } from '@mui/material-nextjs/v15-pagesRouter';
+import { ThemeProvider, createTheme } from '@mui/material/styles';
+import { Roboto } from 'next/font/google';

+const roboto = Roboto({
+  weight: ['300', '400', '500', '700'],
+  subsets: ['latin'],
+  display: 'swap',
+  variable: '--font-roboto',
+});

+const theme = createTheme({
+  typography: {
+    fontFamily: 'var(--font-roboto)',
+  },
+});

export default function MyApp(props: AppProps) {
 const { Component, pageProps } = props;
 return (
   <AppCacheProvider {...props}>
     <Head>...</Head>
+     <ThemeProvider theme={theme}>
+       <main className={roboto.variable}>
         <Component {...pageProps} />
+       </main>
+     </ThemeProvider>
   </AppCacheProvider>
 );
}

MyDocument.getInitialProps = async (ctx) => {
  const jssSheets = new JSSServerStyleSheets();
  const styledComponentsSheet = new ServerStyleSheet();

  try {
    const finalProps = await documentGetInitialProps(ctx, {
      emotionCache: createEmotionCache(),
      plugins: [
        {
          // styled-components
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collectStyles(<App {...props} />),
          resolveProps: async (initialProps) => ({
            ...initialProps,
            styles: [
              styledComponentsSheet.getStyleElement(),
              ...initialProps.styles,
            ],
          }),
        },
        {
          // JSS
          enhanceApp: (App) => (props) => jssSheets.collect(<App {...props} />),
          resolveProps: async (initialProps) => {
            const css = jssSheets.toString();
            return {
              ...initialProps,
              styles: [
                ...initialProps.styles,
                <style
                  id="jss-server-side"
                  key="jss-server-side"
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{ __html: css }}
                />,
                <style id="insertion-point-jss" key="insertion-point-jss" />,
              ],
            };
          },
        },
      ],
    });
    return finalProps;
  } finally {
    styledComponentsSheet.seal();
  }
};
  ...

const clientCache = createEmotionCache({ enableCssLayer: true });

+ export default function MyApp({ emotionCache = clientCache }) {
    return (
+     <AppCacheProvider emotionCache={emotionCache}>
        <Head>
          ...
        </Head>
        ...
      </AppCacheProvider>
    );
  }
 // Or `v1X-pages` if you are using Next.js v1X

 export default function MyApp(props) {
   return (
+    <AppCacheProvider {...props}>
       <Head>
         ...
       </Head>
       ...
+    </AppCacheProvider>
   );
 }

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
      {/* Your app */}
    </AppCacheProvider>
  );
}
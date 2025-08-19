+import { createEmotionCache } from '@mui/material-nextjs/v15-pagesRouter';
 ...
 +import type { DocumentHeadTagsProps } from '@mui/material-nextjs/v15-pagesRouter';
 // or `v1X-pagesRouter` if you are using Next.js v1X

+export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
   ...
 }

 MyDocument.getInitialProps = async (ctx) => {
   const finalProps = await documentGetInitialProps(ctx, {
+    emotionCache: createEmotionCache({ enableCssLayer: true }),
   });
   return finalProps;
 };
import {
    createCache,
    documentGetInitialProps,
  } from '@mui/material-nextjs/v15-pagesRouter';
  
  // ...
  
  MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const finalProps = await documentGetInitialProps(ctx, {
      emotionCache: createCache({ enableCssLayer: true }),
    });
    return finalProps;
  };
  +import {
    +  DocumentHeadTags,
    +  documentGetInitialProps,
    +} from '@mui/material-nextjs/v15-pagesRouter';
     // or `v1X-pagesRouter` if you are using Next.js v1X
    
     export default function MyDocument(props) {
       return (
         <Html lang="en">
           <Head>
    +        <DocumentHeadTags {...props} />
             ...
           </Head>
           <body>
             <Main />
             <NextScript />
           </body>
         </Html>
       );
     }
    
    +MyDocument.getInitialProps = async (ctx) => {
    +  const finalProps = await documentGetInitialProps(ctx);
    +  return finalProps;
    +};
    MyDocument.getInitialProps = async (ctx) => {
        const finalProps = await documentGetInitialProps(ctx, {
     +    emotionCache: createCustomCache(),
        });
        return finalProps;
      };
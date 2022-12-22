import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charset='utf-8' />
        <link
          rel='icon'
          href='%PUBLIC_URL%/favicon.ico'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <meta
          name='theme-color'
          content='#000000'
        />
        <meta
          name='description'
          content='Web site created using create-react-app'
        />
        <link
          rel='apple-touch-icon'
          href='%PUBLIC_URL%/favicon.ico'
        />

        <link
          rel='preconnect'
          href='https://fonts.googleapis.com'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

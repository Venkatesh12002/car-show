import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head style={{ display:'flex', alignItems:'center'}}>
      <link rel="icon" href="/favicon-car.ico"/>
        <title>Car Show</title> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

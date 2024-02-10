import Head from "next/head";
import "../styles/globals.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://annedenicourt.com/" />
        <meta property="og:title" content="Anne D. Développeur Web" />
        <meta
          property="og:image"
          content="https://annedenicourt.com/images/laptop.png"
        />
        <meta
          property="og:description"
          content="Portfolio Anne Denicourt développeur web"
        />
        <meta
          property="og:site_name"
          content="Portfolio Anne Denicourt développeur web"
        />
        <meta property="og:type" content="portfolio" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossOrigin="anonymous"
        /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@300&family=Poiret+One&family=Zen+Loop&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js"
          integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi"
          crossOrigin="anonymous"
        ></script>
        {/* <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js"
          integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG"
          crossorigin="anonymous"
        ></script> */}
        <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
      </Head>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;

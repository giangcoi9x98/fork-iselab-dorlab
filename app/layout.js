import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/views/providers/Provider";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Laboratory of Intelligent Software Engineering and Data-driven Operation Research",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="assets/img/favicon.png" type="image/png" />
        <title>
          Laboratory of Intelligent Software Engineering and Data-driven
          Operation Research
        </title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="assets/vendor/fontawesome-free/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.3/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link href="assets/css/main.css" rel="stylesheet" />
      </Head>
      <body className={inter.className}>
        {" "}
        <Providers>{children}</Providers>
      </body>
      {/* <Script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.3/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/vendor/php-email-form/validate.js"
        strategy="beforeInteractive"
      />
      <Script src="assets/vendor/aos/aos.js" strategy="beforeInteractive" />
      <Script
        src="assets/vendor/glightbox/js/glightbox.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/vendor/purecounter/purecounter_vanilla.js"
        strategy="beforeInteractive"
      />
      <Script
        src="assets/vendor/swiper/swiper-bundle.min.js"
        strategy="beforeInteractive"
      />
      <Script src="assets/js/main.js" strategy="beforeInteractive" /> */}
    </html>
  );
}
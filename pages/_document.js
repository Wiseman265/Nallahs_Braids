import { Html, Head, Main, NextScript } from "next/document";


export const metadata = {
    title: "Nallahs Brading Corner",
    description: "Nallahs braiding corner",
  };
  
  
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

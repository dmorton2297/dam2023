import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "./globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  //  return <Component {...pageProps} />
  return (
    <h1
      style={{
        position: "absolute",
        left: "calc(50% - 150px)",
        top: "40%",
        width: 330,
        fontSize: 26,
      }}
    >
      👷👷  This page has been taken down for construction
    </h1>
  );
}
export default MyApp;

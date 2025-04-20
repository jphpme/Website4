import type { AppProps } from "next/app";
import "@/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  // individual pages can wrap with Layout; keeping this minimal
  return <Component {...pageProps} />;
}

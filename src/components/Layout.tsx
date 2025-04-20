import { ThemeProvider, CssBaseline } from "@mui/material";
import Head from "next/head";
import Nav from "./Nav";
import { theme } from "@/theme";

type Props = { title?: string; description?: string; children: React.ReactNode };

export default function Layout({ title = "Pachamama Studios", description = "Climate & Space Education", children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Nav />
      <main>{children}</main>
    </ThemeProvider>
  );
}

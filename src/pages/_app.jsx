import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

import { Layout } from "@/components/Layout";
import * as mdxComponents from "@/components/mdx";

import "@/styles/tailwind.css";
import "focus-visible";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Framework Changelog</title>
        <meta
          name="description"
          content="See what's new in Framework, the best way to build your dreams."
        />
        <link rel="icon" type="image/ico" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        <MDXProvider components={mdxComponents}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ThemeProvider>
    </>
  );
}

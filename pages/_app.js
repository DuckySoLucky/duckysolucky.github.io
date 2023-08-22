/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "../components/Head";
import "../styles/globals.css";
import "../styles/themes.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      document.documentElement.setAttribute("data-theme", localStorage.getItem("theme"));
    }
  }, []);

  return (
    <Layout>
      <Head title={`Robert Kovac | ${pageProps.title}`} />
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;

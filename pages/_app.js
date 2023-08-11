// eslint-disable-next-line import/extensions, import/no-unresolved
import { Analytics } from "@vercel/analytics/react-client";
import Layout from "../components/Layout.jsx";
import Head from "../components/Head.jsx";
import React, { useEffect } from "react";
import PropTypes from "prop-types";

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

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;

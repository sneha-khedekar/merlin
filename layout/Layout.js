import React from "react";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children, title = "Merlin", description = "Title" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>

      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;

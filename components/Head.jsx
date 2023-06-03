import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Robert Kovac's Profolio."
      />
      <meta
        name="keywords"
        content="Robert Kovac, DuckySoLucky, duckysolucky, robert kovac, robert.kovac4, ducky"
      />
      <meta property="og:title" content="Robert Kovac's Portfolio" />
      <meta
        property="og:description"
        content="Robert Kovac's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/2NqZL3h.png" />
      <meta property="og:url" content="https://duckysolucky.tech/" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Robert Kovac',
};

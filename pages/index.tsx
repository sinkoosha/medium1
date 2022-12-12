import React from "react";
import Head from "next/head";
import FeedBox from "../src/components/feedBox/FeedBox";

const Home: React.FC = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeedBox />
    </div>
  );
};

export default Home;

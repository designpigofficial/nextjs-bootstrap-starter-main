import Head from "next/head";

import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects ";

import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Custom Timber Works</title>
        <meta name="description" content="Building Custom Homes In Colorado For Over 30 Years" />
      </Head>

      <main>
        <Hero />
        <Projects />
      </main>
    </Layout>
  );
}

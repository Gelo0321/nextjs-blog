import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am a 3rd year College student at University of the Assumption.</p>
        <p> I am 20 years old, and I come from Macabebe, Pampanga.</p>
        <p> Some of my interests include playing mobile games, badminton.</p>

      </section>
    </Layout>
  );
}
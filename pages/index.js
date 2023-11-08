import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyle from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/post';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2 className={utilStyle.headingLg}>Blog</h2>
        <ul className={utilStyle.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyle.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

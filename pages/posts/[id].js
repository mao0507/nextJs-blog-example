import Layout from '../../components/layout';

import { getAllPostIds, getPostData } from '../../lib/post';

export async function getStaticPaths() {
  // Return a list of possible value for id
  // 動態抓取檔案路徑，並加入到路由裡面
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id

  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <h3>{postData.title}</h3>
      <h5>{postData.id}</h5>
      <h5>{postData.date}</h5>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: postData.content }} />
    </Layout>
  );
}

import Layout from "../components/MyLayout";
import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={"/p/[id]"} as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);
export default function Index() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-next.js" />
        <PostLink id="learn-next.js" />
        <PostLink id="deploy-next.js" />
      </ul>
    </Layout>
  );
}

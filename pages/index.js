import Layout from "../components/MyLayout";
import Link from "next/link";


const LinkItem = props => (
  <li>
    <Link href={props.to} as={props.as}>
      <a>{props.children}</a>
    </Link>
  </li>
);

const PostLink = props => (
  <LinkItem to={"/p/[id]"} as={`/p/${props.id}`}>
    {props.id}
  </LinkItem>
);

export default function Index() {
  return (
    <Layout>
      test
      <h1>My Blog</h1>
      <ul>
        <LinkItem to="/batman-tv-shows">Batman tv shows</LinkItem>
        <LinkItem to="/quotes">Quotes</LinkItem>
        <PostLink id="hello-next.js" />
        <PostLink id="learn-next.js" />
        <PostLink id="deploy-next.js" />
      </ul>
    </Layout>
  );
}

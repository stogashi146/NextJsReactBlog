import Layout from "@/components/layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    // 全ページ共通のコンポーネントを記述できる
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

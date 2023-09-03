import Layout from "@/components/layout";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Container from "@/components/container";
import Meta from "@/components/meta";

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="HERO" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  );
}

import dynamic from "next/dynamic";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <Layout title="Home · Pachamama Studios">
      <Hero />
      {/* Add your dashboard or visualizations here */}
    </Layout>
  );
}

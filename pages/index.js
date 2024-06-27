import { Inter } from "next/font/google";
import Home from "./home";
import Layout from "../layout/Layout";
const inter = Inter({ subsets: ["latin"] });

export default function IndexPage() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

import Head from "next/head";
import { Inter } from "next/font/google";
import Footer from "../layout/footer";
import Blog from "@/container/blog";
import News from "@/container/news";
import Testimonials from "@/container/testimonial";
import Button from "@/components/button";
import HeroSlider from "@/components/heroSlider";
import RealEstateUsp from "@/container/skyline";
import AddMoreToLife from "@/container/addMoreToLife";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSlider />
      <AddMoreToLife />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-center mt-5 mb-5">
              <Button color="btn-primary" text="EXPLORE OUR BRAND STORY" />
            </div>
          </div>
        </div>
      </div>
      <RealEstateUsp />
      <HeroSlider />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex align-items-center justify-content-center gap-4 p-4">
              <Button color="btn-danger" text="EXPLORE COMMERCIAL PROJECTS" />
              <Button color="btn-success" text="EXPLORE RESIDENTIAL PROJECTS" />
              <Button color="btn-warning" text="EXPLORE OTHER DEVELOPMENTS" />
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <News />
      <Blog />

      <main>

      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Course from "@/components/Course";
import Testimony from "@/components/Testimony"
import SubscribeEmail from "@/components/SubscribeEmail";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="landing-page" className="scroll-smooth">
      <Navbar />
      <Header />
      <Banner />
      <Course />
      {/* <Testimony /> */}
      <>
        <SubscribeEmail />
        <Footer />
      </>
    </main>
  );
}

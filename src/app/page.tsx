import { About } from "../../components/About";
import { Carousel } from "../../components/Carousel";
import { Facts } from "../../components/Facts";
import { Features } from "../../components/Features";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Quote } from "../../components/Quote";
import { Service } from "../../components/Service";
import { Team } from "../../components/Team";
import { Testimonial } from "../../components/Testimonial";
import { Topbar } from "../../components/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Carousel />
      <About />
      <Facts />
      <Features />
      <Service />
      <Quote />
      <Team />
      <Testimonial />
      <Footer />
    </>
  );
}

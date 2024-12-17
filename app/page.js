import Footer from "@/components/Footer";
import Advantages from "@/components/HomePage/Advantages";
import CTA from "@/components/HomePage/CTA";
import Features from "@/components/HomePage/Features";
import Hero from "@/components/HomePage/Hero";
import HowTo from "@/components/HomePage/HowTo";
import NavbarComponent from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <NavbarComponent/>
    <Hero/>
    <Features/>
    <HowTo/>
    <Advantages/>
    <CTA/>
    <Footer/>
    </>
  );
}

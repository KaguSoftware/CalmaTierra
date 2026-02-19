import AboutUs from "@/src/components/main/AboutUs/AboutUs";
import Cards from "@/src/components/main/Cards/Cards";
import ContactUs from "@/src/components/main/ContactUs/ContactUs";
import Hero from "@/src/components/main/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Cards />
      <ContactUs />
    </>
  );
}

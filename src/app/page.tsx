import Image from "next/image";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import LandingSection from "./components/LandingSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-12">          
        <LandingSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

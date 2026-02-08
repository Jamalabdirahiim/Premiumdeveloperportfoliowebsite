import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="dark min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  );
}
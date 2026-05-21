import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About"
import ContactSection from "@/components/sections/Contact";



export default function Home() {
  return (
    <main style={{minHeight: '100vh' }}>
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>

      {/*<section id="projects">
        <ProjectSection/>
      </section>*/}

      <section id="contact">
        <ContactSection/>
      </section>
    </main>
  );
}

import React from 'react'

import Hero from "./sections/Hero";
import Aboutme from "./sections/Aboutme";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Experience from "./sections/Experience";

const Home = () => {
  return (
    
    <main>
      <section className="md:p-10  p-2  " id='home'>
          <Hero />
        </section>
        <section  >
          <Aboutme />
        </section>
        <section className="py-14" >
        <Projects />
        </section>
        <section >
          <Services />
        </section>
        <section id='experience'>
          <Experience />
        </section>
    </main>
  )
}

export default Home
import React from "react";

const Hero = () => (
  <section
    className="hero py-12 px-4 text-center bg-gradient-to-r from-beige-200 to-beige-400"
    data-aos="fade-up"
  >
    <h1 className="text-3xl md:text-4xl font-bold mb-2 hover-glow">
      Hi, I’m Srajan Menaria 👋
    </h1>
    <p className="text-base md:text-lg mb-3 hover-glow">
      Final-year B.Tech CSE Student | Web Dev & AI Enthusiast
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center mt-6">
      <a
        href="#contact"
        className="btn bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition mb-3 md:mb-0 md:mr-4"
      >
        Get In Touch
      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a
  href="/Srajanresume (2).pdf"
  download="Srajanresume (2).pdf"
  className="btn bg-gray-800 text-white px-5 py-2 rounded hover:bg-gray-900 transition"
>
  Download Resume
</a>

    </div>
  </section>
);

export default Hero;
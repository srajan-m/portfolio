import React from "react";

const Contact = () => (
  <section id="contact" className="contact py-8 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white" data-aos="fade-up">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 hover-glow">Contact</h2>
    <div className="text-center space-y-1 text-sm md:text-base">
      <p>Email: <a href="mailto:srajanmenaria75@gmail.com" className="underline">srajanmenaria75@gmail.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/srajan-menaria-63324b340" className="underline">srajanmenaria</a></p>
      <p>GitHub: <a href="https://github.com/srajan-m" className="underline">github.com/srajan-m</a></p>
    </div>
  </section>
);

export default Contact;
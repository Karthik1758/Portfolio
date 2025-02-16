export default function Hero() {
    return (
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold">Hello, I'm Karthik Chakali</h2>
        <p className="text-lg mt-3 text-gray-600">Full Stack Web Developer</p>
        <a
          href="/Karthik_Resume.pdf"
          download
          className="mt-5 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
        >
          Download Resume
        </a>
      </section>
    );
  }
  
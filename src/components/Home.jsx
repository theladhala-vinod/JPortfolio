const Home = () => {
  return (
    <div
      id="home"
      className="bg-black text-white text-center px-4 px-4 md:px-12 lg:px-20 py-16 min-h-screen flex flex-col justify-center items-center"
    >
      <img
        src=""
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />

      <h1 className="text-base md:text-2xl font-bold">
        Hello! I&apos;m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Gotham Jishitha
        </span>
      </h1>

      <p className="mt-4 text-lg text-gray-300">
        a final-year Computer Science student with a passion for innovative
        technology and problem-solving. Over the past few years, I&apos;ve honed
        my skills in software development, data analysis, and machine learning,
        and I’m eager to apply these skills to impactful projects. Through
        various projects and internships, I&apos;ve gained hands-on experience
        in coding, data structures, algorithms, and database management.
        I&apos;m also committed to continuous learning and exploring emerging
        tech trends to stay on the cutting edge. With a strong foundation in
        programming and a keen interest in AI and web development, I’m excited
        to transition into a full-time role where I can contribute meaningfully
        and grow as a software engineer. Feel free to explore my projects and
        connect with me!
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a
            href="https://www.linkedin.com/in/jishitha-gotham/"
            target="_blank"
          >
            Connect
          </a>
        </button>
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a
            href="https://drive.google.com/file/d/1jHop8piX1rOkPV84GjFgF1ecgrvRnIUw/view?usp=sharing"
            target="_blank"
          >
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Home;

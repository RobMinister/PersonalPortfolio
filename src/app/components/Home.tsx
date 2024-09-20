const Home = () => {
    return (
      <section id="home" className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mt-5">Robin Sharma</h1>
        <p className="mt-3 text-lg">Full-stack Developer specializing in React, Node.js, and modern web development.</p>
  
        <div className="mt-6 flex space-x-4">
          <a href="https://linkedin.com/in/robinSharma11" target="_blank" className="btn">LinkedIn</a>
          <a href="https://github.com/RobMinister" target="_blank" className="btn">GitHub</a>
          <a href="mailto:robsharma54@gmail.com" className="btn">Email</a>
          <a href="/resume.pdf" className="btn">Resume</a>
        </div>
      </section>
    );
  };
  
  export default Home;
  
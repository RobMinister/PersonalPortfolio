const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 text-center">
      <p>Robin Sharma &copy; 2024. All Rights Reserved.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://linkedin.com/in/robinSharma11" target="_blank" className="text-white">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/RobMinister" target="_blank" className="text-white">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

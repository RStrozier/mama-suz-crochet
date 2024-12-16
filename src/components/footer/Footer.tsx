import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Mama Suz Crochet</p>
        <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          <Link to="/about" className="text-sm hover:underline hover:text-yellow-400">
            About
          </Link>
          <Link to="/contact" className="text-sm hover:underline hover:text-yellow-400">
            Contact
          </Link>
          <Link to="/privacy" className="text-sm hover:underline hover:text-yellow-400">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
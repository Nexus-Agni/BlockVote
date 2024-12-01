import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-900 via-purple-700 to-blue-900 text-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold">
              VotingApp
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {/* Navigation Links */}
            <Link
              to=""
              className="text-lg font-medium hover:text-gray-300 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/register-candidate"
              className="text-lg font-medium hover:text-gray-300 transition duration-200"
            >
              Register Candidate
            </Link>
            <Link
              to="/candidate-list"
              className="text-lg font-medium hover:text-gray-300 transition duration-200"
            >
              Candidate List
            </Link>
            <Link
              to="/voter-list"
              className="text-lg font-medium hover:text-gray-300 transition duration-200"
            >
              Voter List
            </Link>
            <Link
              to="/register-voter"
              className="text-lg font-medium hover:text-gray-300 transition duration-200"
            >
              Register Voter
            </Link>
            <Link
              to="/election-commission"
              className="text-lg font-medium hover:text-gray-300 transition duration-200"
            >
              Election Commission
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

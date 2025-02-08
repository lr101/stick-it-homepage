import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=" py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">

        {/* Logo and Name */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/icons/logo-round.png"
              alt="Stick-It Map Logo"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className="font-bold ">Stick-It Map</span>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-gray-600">
          <Link href="https://stick-it.lr-projects.de/public/privacy-policy" className="hover:text-gray-800">
            Privacy Policy
          </Link>
          <Link href="https://stick-it.lr-projects.de/public/agb" className="hover:text-gray-800">
            Terms of Service
          </Link>
          <Link href="https://lr-projects.de" className="hover:text-gray-800">
            About Us
          </Link>
          <Link href="mailto:info@lr-projects.de" className="hover:text-gray-800">
            Contact
          </Link>
          <Link href="https://github.com/lr101/stick-it-homepage" className="hover:text-gray-800">
            GitHub
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Stick-It Map. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

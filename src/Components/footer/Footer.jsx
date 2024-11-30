import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
  
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
       
          <div>
            <h4 className="font-semibold text-lg mb-3">Company</h4>
            <ul>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/careers" className="hover:text-white">Careers</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
         
          <div>
            <h4 className="font-semibold text-lg mb-3">Support</h4>
            <ul>
              <li><a href="/help" className="hover:text-white">Help Center</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
       
          <div>
            <h4 className="font-semibold text-lg mb-3">Stay Connected</h4>
            <ul className="flex justify-center md:justify-start space-x-4">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

      
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p>&copy; {currentYear} Arman Hossain. All rights reserved.</p>
          <p>React Project | Built with love and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

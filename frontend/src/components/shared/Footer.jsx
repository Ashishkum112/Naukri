import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Quick<span className="text-purple-600">Hire</span>
            </h2>
            <p className="text-sm mb-4">
              Your trusted partner in finding your dream job.
            </p>
            <p className="text-sm mb-4">
              © {new Date().getFullYear()} QuickHire. All rights reserved.
            </p>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/aboutus" className="hover:text-white">About Us</Link>
              <Link to="/jobs" className="hover:text-white">Jobs</Link>
              <Link to="/aboutus" className="hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Social Media
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex flex-col space-y-2">
              <a className="text-gray-400 hover:text-gray-100" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.324C.593 0 0 .592 0 1.324v21.352C0 23.408.593 24 1.324 24H12.82V14.706H9.692v-3.578h3.128V8.408c0-3.1 1.893-4.787 4.657-4.787 1.325 0 2.463.1 2.794.144v3.238l-1.918.001c-1.503 0-1.794.715-1.794 1.762v2.31h3.587l-.468 3.578h-3.119V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.407 0 22.676 0z" />
                </svg>
              </a>
              <a  className="text-gray-400 hover:text-gray-100" aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.835 9.835 0 01-2.828.775 4.934 4.934 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.924 4.924 0 00-8.38 4.49A13.978 13.978 0 011.67 3.149 4.93 4.93 0 003.16 9.724a4.903 4.903 0 01-2.229-.616v.062a4.93 4.93 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.93 4.93 0 004.6 3.417A9.869 9.869 0 010 21.543a13.978 13.978 0 007.548 2.212c9.057 0 14.01-7.507 14.01-14.01 0-.213-.004-.425-.015-.636A10.012 10.012 0 0024 4.557z" />
                </svg>
              </a>
              <a className="text-gray-400 hover:text-gray-100" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452H16.85v-5.569c0-1.327-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.147V9.756h3.448v1.464h.05c.48-.91 1.653-1.871 3.401-1.871 3.634 0 4.307 2.39 4.307 5.498v5.605zM5.337 8.29c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zM7.119 20.452H3.553V9.756h3.566v10.696zM22.225 0H1.771C.791 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451c.979 0 1.771-.774 1.771-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div> */}

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link  className="hover:text-white">Privacy Policy</Link>
              <Link  className="hover:text-white">Terms of Service</Link>
              <Link  className="hover:text-white">Support</Link>
              <Link className="hover:text-white">Blog</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 hover:cursor-pointer" onClick={()=>(navigate('/aboutus'))}>
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
          <p className="text-sm">
            Crafted with ❤️ by the QuickHire Team
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

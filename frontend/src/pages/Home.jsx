import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return <div className="flex flex-col h-screen">
        {/* Top Navigation Bar */}
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/signin" className="text-white font-semibold text-lg">Sign In</Link>
            <Link to="/signup" className="text-white font-semibold text-lg">Sign Up</Link>
            <Link to="/dashboard" className="text-white font-semibold text-lg">Dashboard</Link>
          </div>
        </nav>
        
        {/* Main Section */}
        <div className="flex-grow bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">EasyPay</h1>
            <p className="text-lg text-gray-700 mb-8">Simplifying Secure Payments</p>
            <p className="text-lg text-gray-700 mb-4">About Us:</p>
            <p className="text-lg text-gray-700">EasyPay is a user-friendly web application designed to simplify and secure the payment process for individuals and businesses. Our mission is to provide a convenient and secure solution for managing payments, allowing users to send and receive funds with confidence and peace of mind.</p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-blue-500 text-white p-4 text-center">
          <p>Contact Us: support@easypay.com</p>
        </div>
      </div>

  };
  

import React from 'react';

const Contact = () => {
  return (
    <div
    name="Contact"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"data-aos="fade-up"
                data-aos-duration="2000"
  > <h1 className="text-3xl font-bold mb-5">CONTACT ME</h1>
    <section className="bg-gray-900 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Details */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-400">
            Want to get in touch? We'd love to hear from you. Here's how you can reach us..
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <i className="fas fa-phone text-white"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400">PHONE</p>
                <p className="text-lg">+91 9448104224</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <i className="fas fa-envelope text-white"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400">EMAIL</p>
                <p className="text-lg">parashuramd444@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <i className="fas fa-map-marker-alt text-white"></i>
              </div>
              <div>
                <p className="text-sm text-gray-400">LOCATION</p>
                <p className="text-lg">X Street, Y Road, kpt mangalore.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-blue-500 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
      
            <a href="#" className="text-blue-500 text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-500 text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Section - Send Message Form */}
        <div>
          <form className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
            />
            <textarea
              placeholder="Say Something"
              rows="5"
              className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;

"use client";

import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact" className="bg-gradient-to-b from-blue-100 via-white to-blue-200 py-24">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
              CONTACT
            </h2>
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900">
              Get in Touch
            </h1>
            <p className="mt-4 text-gray-700">
              Feel free to reach out to discuss a project or just say hello. I&apos;m always happy to connect!
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 text-center">
            <div className="bg-white shadow-md p-6 rounded-lg transform transition-all hover:scale-105">
              <FaPhoneAlt className="text-blue-500 text-4xl mx-auto mb-4" />
              <h2 className="text-lg font-medium text-gray-900">Phone</h2>
              <p className="text-gray-700 mt-2">+923195904120</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg transform transition-all hover:scale-105">
              <FaEnvelope className="text-blue-500 text-4xl mx-auto mb-4" />
              <h2 className="text-lg font-medium text-gray-900">Email</h2>
              <p className="text-gray-700 mt-2">abdulrehman.shaikh29042@gmail.com</p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg transform transition-all hover:scale-105">
              <FaMapMarkerAlt className="text-blue-500 text-4xl mx-auto mb-4" />
              <h2 className="text-lg font-medium text-gray-900">Location</h2>
              <p className="text-gray-700 mt-2">House no 3 Block E Latifabad no 9, Hyderabad, Pakistan</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-6">Send Me a Message</h2>
            <form
              action="https://formspree.io/f/your-form-id" // Replace with your Formspree ID
              method="POST"
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  required
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                  rows={4}
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

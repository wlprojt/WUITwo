"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaLocationArrow,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f3f4f6] dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* Logo */}
          <div>
            <h2 className="text-2xl md:text-4xl font-black text-[#ff2d3d]">
              ESHOP
            </h2>

            <p className="mt-5 text-gray-600 dark:text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Maiores alias cum
            </p>

            <p className="mt-6 text-gray-500">
              Made with 💖 by The Coding Journey
            </p>

            <button className="mt-6 bg-[#ff2d3d] text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-medium hover:scale-105 duration-300">
              Visit our YouTube Channel
            </button>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-[20px] md:text-2xl font-bold mb-6 text-black dark:text-white">
              Important Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[20px] md:text-2xl font-bold mb-6 text-black dark:text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-[20px] md:text-2xl font-bold mb-6 text-black dark:text-white">
              Address
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <FaLocationArrow className="text-black dark:text-white" />
                <p>Jabalpur, Madhya Pradesh</p>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-black dark:text-white" />
                <p>+91 9876543210</p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <a
                  href="#"
                  className="text-3xl hover:text-[#ff2d3d] duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="text-3xl hover:text-[#ff2d3d] duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="text-3xl hover:text-[#ff2d3d] duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
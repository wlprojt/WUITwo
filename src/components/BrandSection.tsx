"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  "/brand-1.png",
  "/brand-2.png",
  "/brand-3.png",
  "/brand-4.png",
  "/brand-5.png"
];

export default function BrandSection() {
  return (
    <motion.section
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
                className="relative hidden md:block bg-[#e5e7eb] dark:bg-white/10 py-8 mt-24 overflow-hidden"
                >
    {/* <section className="hidden md:block bg-[#e5e7eb] dark:bg-white/10 py-8 mt-24"> */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-5 gap-6 place-items-center">
          {brands.map((brand, index) => (
              <Image
              key={index}
                src={brand}
                alt="brand"
                width={140}
                height={70}
                className="w-[95px] h-auto object-contain grayscale dark:invert"
              />
          ))}
        </div>
      </div>
    {/* </section> */}
    </motion.section>
  );
}
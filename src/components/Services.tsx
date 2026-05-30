import { FaCarSide, FaCheckCircle, FaWallet, FaHeadphonesAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCarSide />,
    title: "Free Shipping",
    desc: "Free Shipping On All Order",
  },
  {
    icon: <FaCheckCircle />,
    title: "Safe Money",
    desc: "30 Days Money Back",
  },
  {
    icon: <FaWallet />,
    title: "Secure Payment",
    desc: "All Payment Secure",
  },
  {
    icon: <FaHeadphonesAlt />,
    title: "Online Support 24/7",
    desc: "Technical Support 24/7",
  },
];

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <div className="text-[#ff2d3d] text-5xl">
              {item.icon}
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
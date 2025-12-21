"use client";

import Image from "next/image";

const services = [
  {
    title: "Personal Loan",
    desc: "Flexible personal loans for daily and emergency needs.",
    image: "/personal.png",
    slug: "Personal Loan",
  },
  {
    title: "Business Loan",
    desc: "Financial support to grow and expand your business.",
    image: "/business.png",
    slug: "Business Loan",
  },
  {
    title: "Gold Loan",
    desc: "Quick loan facility against gold with safe custody.",
    image: "/gold.png",
    slug: "Gold Loan",
  },
  {
    title: "Home Loan",
    desc: "Affordable home loans for your dream home.",
    image: "/home.png",
    slug: "Home Loan",
  },
  {
    title: "Fixed Deposit",
    desc: "Secure investment with assured returns.",
    image: "/fixed.png",
    slug: "Fixed Deposit",
  },
  {
    title: "Recurring Deposit",
    desc: "Disciplined monthly savings for future security.",
    image: "/recurring.png",
    slug: "Recurring Deposit",
  },
  {
    title: "Daily Collection",
    desc: "Daily savings collection for members & businesses.",
    image: "/daily.png",
    slug: "Daily Collection",
  },
  {
    title: "Machinery Loan",
    desc: "Loans for machinery and industrial equipment.",
    image: "/machinery.png",
    slug: "Machinery Loan",
  },
];

const WHATSAPP_NUMBER = "918689970832";

const KeyServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Our Key Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Trusted financial services designed for members, individuals, and
            businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello,%20I%20want%20enquiry%20about%20${encodeURIComponent(
              service.slug
            )}`;

            return (
              <a
                key={service.slug}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-fill transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">{service.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;

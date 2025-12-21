const services = [
  {
    title: "Personal Loan",
    desc: "Flexible personal loans for daily and emergency needs.",
    icon: "👤",
  },
  {
    title: "Business Loan",
    desc: "Financial support to grow and expand your business.",
    icon: "💼",
  },
  {
    title: "Gold Loan",
    desc: "Quick loan facility against gold with safe custody.",
    icon: "🪙",
  },
  {
    title: "Home Loan",
    desc: "Affordable home loans for your dream home.",
    icon: "🏠",
  },
  {
    title: "Fixed Deposit",
    desc: "Secure investment with assured returns.",
    icon: "🏦",
  },
  {
    title: "Recurring Deposit",
    desc: "Disciplined monthly savings for future security.",
    icon: "📅",
  },
  {
    title: "Daily Collection",
    desc: "Daily savings collection for members & businesses.",
    icon: "💰",
  },
  {
    title: "Machinery Loan",
    desc: "Loans for machinery and industrial equipment.",
    icon: "🏭",
  },
];

const KeyServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Our Key Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Trusted financial services designed for members, individuals, and
            businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 text-2xl">
                {service.icon}
              </div>

              <h3 className="text-lg font-medium text-gray-900">
                {service.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyServices;

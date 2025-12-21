const reasons = [
  {
    title: "Established & Trusted Institution",
    desc: "Operating with strong values and long-term member trust since 1997.",
    icon: "🏛️",
  },
  {
    title: "Transparent Financial Practices",
    desc: "Clear policies, honest communication, and no hidden conditions.",
    icon: "🔍",
  },
  {
    title: "Fast Processing & Support",
    desc: "Simple documentation with quick approvals and guidance.",
    icon: "⚡",
  },
  {
    title: "Safe & Secure Investments",
    desc: "Your savings and deposits are protected with strong systems.",
    icon: "🛡️",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm font-medium text-sky-700 bg-sky-100 rounded-full">
              Why Choose Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
              A Financial Institution Built on Trust
            </h2>

            <p className="mt-5 text-gray-600 max-w-xl leading-relaxed">
              We are not just a service provider. We are a responsible financial
              institution committed to secure savings, fair lending, and
              long-term financial stability for our members.
            </p>

            <div className="mt-10 space-y-6">
              {reasons.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sky-100 text-sky-600 text-xl shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="text-base font-medium text-gray-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white p-7 shadow-md">
              <h3 className="text-3xl font-semibold text-sky-600">25+</h3>
              <p className="mt-2 text-sm text-gray-600">
                Years of Financial Trust
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-md">
              <h3 className="text-3xl font-semibold text-sky-600">1000+</h3>
              <p className="mt-2 text-sm text-gray-600">Satisfied Members</p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-md">
              <h3 className="text-3xl font-semibold text-sky-600">Secure</h3>
              <p className="mt-2 text-sm text-gray-600">
                Deposits & Investments
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-md">
              <h3 className="text-3xl font-semibold text-sky-600">Fast</h3>
              <p className="mt-2 text-sm text-gray-600">Loan Processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

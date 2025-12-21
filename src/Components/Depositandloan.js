const deposits = [
  {
    title: "Fixed Deposit",
    desc: "Secure investment with assured returns over a fixed tenure.",
    icon: "🏦",
  },
  {
    title: "Recurring Deposit",
    desc: "Disciplined monthly savings for future financial goals.",
    icon: "📅",
  },
  {
    title: "Daily Collection Deposit",
    desc: "Daily savings collection facility for members and businesses.",
    icon: "💰",
  },
];

const loans = [
  {
    title: "Personal Loan",
    desc: "Flexible loans for personal, family, and emergency needs.",
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
    desc: "Affordable housing loans for your dream home.",
    icon: "🏠",
  },
  {
    title: "Machinery Loan",
    desc: "Loans for machinery and industrial equipment.",
    icon: "🏭",
  },
];

const DepositsAndLoans = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* ===== DEPOSITS ===== */}
        <div className="mb-24">
          <div className="max-w-3xl mb-14">
            <span className="inline-block mb-4 text-sm font-medium text-sky-700">
              Deposits
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Secure Deposit Schemes
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Safe and reliable deposit options designed to protect your savings
              and deliver stable long-term returns.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {deposits.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 text-2xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== LOANS ===== */}
        <div className="bg-white py-20 px-6 sm:px-10 rounded-3xl shadow-sm">
          <div className="max-w-3xl mb-14">
            <span className="inline-block mb-4 text-sm font-medium text-sky-700">
              Loans
            </span>

            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
              Responsible Loan Solutions
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Transparent, fair, and accessible loan solutions to support your
              personal and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loans.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 text-2xl mb-5">
                  {item.icon}
                </div>

                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepositsAndLoans;

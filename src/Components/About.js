import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* TEXT */}
          <div className="max-w-4xl">
            <span className="inline-block mb-4 text-sm font-medium text-sky-700">
              About Our Institution
            </span>

            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight">
              Built on Trust. Guided by Responsibility.
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              <strong>साई जागृती नागरी पतसंस्था (मर्या) मुंबई</strong> is a
              registered member-based financial institution committed to ethical
              lending, secure savings, and long-term financial well-being of its
              members.
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[360px] rounded-3xl overflow-hidden shadow-md">
            <Image
              src="/about.png"
              alt="About our institution"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 border-t border-gray-200"></div>

        {/* PILLARS */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Our Purpose</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              To deliver accessible and responsible financial services that
              empower members and contribute to the growth of the local economy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Our Approach
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              We operate with transparency, fair policies, and a strong
              member-first mindset across all financial activities.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Our Commitment
            </h3>
            <p className="mt-3 text-gray-600 leading-relaxed">
              To safeguard member interests while ensuring sustainable growth
              through secure deposits and responsible lending practices.
            </p>
          </div>
        </div>

        {/* FOOT HIGHLIGHT */}
        <div className="mt-16 rounded-2xl bg-sky-50 px-8 py-7">
          <p className="text-gray-700 text-sm leading-relaxed">
            Established with strong governance, regulatory compliance, and
            ethical standards, our institution continues to serve members with
            integrity, discipline, and long-term vision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export const TermsAndConditions = () => {

  return (
    <>
      <div className="relative flex flex-col w-full !select-none bg-fixed bg-panel-dark">
        <Header />
        <div className="max-w-4xl mx-auto bg-panel-dark shadow-lg rounded-xl p-8 md:p-12">
          <Link
            to="/"
            className="flex lg:overflow-x-visible gap-0 overflow-x-hidden flex-col px-0 pt-0 lg:px-0 mt-16 lg:mt-24 md:max-w-[768px] md:min-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] mx-0 md:mx-auto"
          >
            <div className="flex flex-row items-center text-lg text-ink-dark hover:underline cursor-pointer mb-2">
              <span className="mr-2">←</span>
              <p>Home</p>
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2 text-ink-dark">
            Terms & Conditions
          </h1>

          <p className="text-sm text-gray-500 mb-8 text-ink-dark">
            Last Updated: 25 Jul 2026
          </p>

          <p className="text-gray-700 leading-relaxed mb-6 text-ink-dark">
            Welcome to <span className="font-semibold">uditmalhotra.in</span>{" "}
            (“we,” “our,” “us”). By accessing or using{" "}
            <span className="font-semibold">uditmalhotra.in</span>, you agree to
            these Terms & Conditions. Please read them carefully. If you do not
            agree, please do not use the website.
          </p>

          {/* Section 1 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            1. Use of Website
          </h2>
          <p className="text-gray-700 leading-relaxed text-ink-dark">
            You agree to use this website only for lawful purposes and in a
            manner that does not infringe the rights of others or restrict their
            use of the website.
          </p>

          {/* Section 2 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            2. Content
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3 text-ink-dark">
            All content on this website, including text, videos, images, and
            resources, is created by{" "}
            <span className="font-semibold">Udit Malhotra</span>.
          </p>

          <p className="text-gray-800 font-medium mb-1 text-ink-dark">
            You may:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 text-ink-dark">
            <li>
              View and share content for personal, informational, and
              educational purposes.
            </li>
          </ul>

          <p className="text-gray-800 font-medium mb-1 text-ink-dark">
            You may not:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 text-ink-dark">
            <li>
              Copy, reuse, or distribute content for commercial purposes without
              permission.
            </li>
          </ul>

          <p className="text-gray-700 mb-6 text-ink-dark">
            For permission inquiries, contact:
            <span className="font-semibold"> contact@uditmalhotra.in</span>
          </p>

          {/* Section 3 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            3. Payments & Contributions
          </h2>

          <p className="text-gray-700 leading-relaxed mb-3 text-ink-dark">
            This website may allow voluntary contributions/payments to support
            the content.
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 text-ink-dark">
            <li>Payments are voluntary and non-refundable</li>
            <li>
              Payments do not guarantee special privileges, ownership, or
              decision rights
            </li>
            <li>Payments are processed securely</li>
            <li>We do not store your card/payment details</li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            4. No Professional Advice
          </h2>
          <p className="text-gray-700 leading-relaxed text-ink-dark">
            The content provided is for educational and informational purposes
            only. It should not be treated as financial, legal, medical, or
            professional advice.
          </p>

          {/* Section 5 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            5. Limitation of Liability
          </h2>

          <p className="text-gray-700 leading-relaxed mb-3 text-ink-dark">
            We are not responsible for:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 text-ink-dark">
            <li>
              Any loss, damage, or inconvenience caused by using this website
            </li>
            <li>Errors, interruptions, or inaccuracies</li>
            <li>
              Third-party service failures (payment gateways, hosting, etc.)
            </li>
          </ul>

          <p className="text-gray-700 mb-6 text-ink-dark">
            You use the website at your own risk.
          </p>

          {/* Section 6 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            6. Third-Party Links
          </h2>
          <p className="text-gray-700 leading-relaxed text-ink-dark">
            This website may contain links to external websites. We do not
            control or endorse their content or privacy practices.
          </p>

          {/* Section 7 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            7. Changes to Terms
          </h2>
          <p className="text-gray-700 leading-relaxed text-ink-dark">
            We may update these Terms from time to time. Continued use of the
            website means you accept the updated Terms.
          </p>

          {/* Section 8 */}
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2 text-ink-dark">
            8. Contact
          </h2>
          <p className="text-gray-700 leading-relaxed text-ink-dark">
            For any questions regarding these Terms, contact:
            <br />
            📩 <span className="font-semibold">uditmalhotra05@gmail.com</span>
            <br />
            🌐 <span className="font-semibold">uditmalhotra.in</span>
          </p>
        </div>
      </div>
    </>
  );
};

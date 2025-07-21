import React, { useState, useEffect } from "react";
import HeroSection from "../../components/common/HeroSection";

import {
  ChevronDown,
  Mail,
  Database,
  Share2,
  Shield,
  Eye,
  Lock,
  Link,
  Bell,
} from "lucide-react";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const sections = [
    {
      id: 1,
      title: "Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: [
        "Personal Information: Name, email address, phone number, company name, etc., submitted via contact forms or email inquiries.",
        "Technical Data: IP address, browser type, operating system, referring URLs, pages viewed, and device information.",
        "Marketing & Usage Data: Preferences, feedback, interactions with our marketing materials or campaigns.",
      ],
    },
    {
      id: 2,
      title: "How We Use Your Information",
      icon: <Eye className="w-5 h-5" />,
      content: [
        "Respond to inquiries and provide requested services.",
        "Improve and optimise our website and service offerings.",
        "Send relevant updates, marketing emails, and promotions (with your consent).",
        "Analyse website usage for business intelligence and user experience enhancements.",
      ],
    },
    {
      id: 3,
      title: "Cookies and Tracking Technologies",
      icon: <Lock className="w-5 h-5" />,
      content: [
        "Our website uses cookies and similar tools to enhance your browsing experience.",
        "We use them to understand website traffic and visitor behaviour.",
        "Cookies help us serve personalised ads and content when applicable.",
        "You can manage or disable cookies via your browser settings.",
      ],
    },
    {
      id: 4,
      title: "Sharing of Information",
      icon: <Share2 className="w-5 h-5" />,
      content: [
        "We do not sell your personal information.",
        "We may share information with service providers who support our operations (e.g., web hosting, email delivery).",
        "Information may be shared with legal or regulatory authorities, if required by applicable laws.",
      ],
    },
    {
      id: 5,
      title: "Data Security",
      icon: <Shield className="w-5 h-5" />,
      content: [
        "We implement industry-standard security measures to protect your personal information.",
        "All data is protected from unauthorised access, disclosure, or misuse.",
        "Regular security audits ensure ongoing protection of your information.",
      ],
    },
    {
      id: 6,
      title: "Third-Party Links",
      icon: <Link className="w-5 h-5" />,
      content: [
        "Oz Media Planet may include links to external websites.",
        "We are not responsible for the privacy practices of those third parties.",
        "We recommend reviewing the privacy policy of any external site you visit.",
      ],
    },
    {
      id: 7,
      title: "Your Rights",
      icon: <Bell className="w-5 h-5" />,
      content: [
        "Request access to the personal information we hold about you.",
        "Correct or update inaccurate data.",
        "Withdraw consent at any time for marketing communications.",
        "To exercise your rights, contact us at support@ozmediaplanet.com.",
      ],
    },
    {
      id: 8,
      title: "Children's Privacy",
      icon: <Bell className="w-5 h-5" />,
      content: [
        "Our website and services are not intended for children under 18.",
        "We do not knowingly collect personal data from minors.",
        "If we become aware of such collection, we will take steps to delete the information.",
      ],
    },
  ];

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("support@ozmediaplanet.com");
      alert("Email copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  return (
    <div className="h-auto  bg-gradient-to-b from-[#f8fafc] to-white/90  py-4 space-y-6">
      {/* Animated Header */}
       <HeroSection
        title="Privacy Policy"
        subtitle=""
        leftImg="/Assets/illustrator 1 (1).png"
        rightImg="Assets/Rotate Anti (2).png"
      />

      <div
        className={`bg-white transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f294d] mb-4 animate-fadeIn">
              Oz Media Planet
            </h1>
            <div
              className="w-24 h-1.5 bg-[#005f73] mx-auto mb-6 rounded-full animate-grow origin-left scale-x-0 animate-fill-forwards"
              style={{ animationDelay: "300ms" }}
            ></div>
            <p
              className="text-lg text-gray-600 animate-fadeIn"
              style={{ animationDelay: "500ms" }}
            >
              Innovative IT Solutions for the Digital Age
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        {/* Introduction */}
        <div
          className={`bg-white rounded-xl p-8 mb-12 shadow-lg transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#0f294d] mb-4">
              Privacy Policy
            </h2>
            <div
              className="w-16 h-1 bg-[#005f73] mx-auto mb-6 rounded-full animate-grow origin-left scale-x-0 animate-fill-forwards"
              style={{ animationDelay: "400ms" }}
            ></div>
            <p className="text-gray-500 text-sm">
              Effective Date: 01-01-2025 | Last Updated: 01-01-2025
            </p>
          </div>

          <div
            className="bg-[#f0f9ff] rounded-xl p-6 border-l-4 border-[#005f73] animate-fadeIn"
            style={{ animationDelay: "600ms" }}
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              At Oz Media Planet, your privacy is our priority. This Privacy
              Policy outlines how we collect, use, and safeguard your
              information when you interact with our website and services.
            </p>
          </div>
        </div>

        {/* Privacy Sections - Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: `${300 + index * 50}ms`,
                borderTop: `4px solid ${
                  section.id % 2 === 0 ? "#005f73" : "#0f294d"
                }`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left transition-colors duration-200 focus:outline-none"
                aria-expanded={expandedSection === section.id}
                aria-controls={`section-${section.id}-content`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full ${
                        section.id % 2 === 0 ? "bg-[#005f73]" : "bg-[#0f294d]"
                      } text-white transition-all duration-300 ${
                        expandedSection === section.id ? "scale-110" : ""
                      }`}
                    >
                      {section.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#0f294d]">
                      {section.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-all duration-300 ${
                      expandedSection === section.id
                        ? "transform rotate-180 text-[#005f73]"
                        : ""
                    }`}
                  />
                </div>
              </button>

              <div
                id={`section-${section.id}-content`}
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedSection === section.id
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="px-6 pb-6">
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start space-x-3 transition-opacity duration-300"
                        style={{
                          opacity: expandedSection === section.id ? 1 : 0,
                          transitionDelay:
                            expandedSection === section.id
                              ? `${itemIndex * 50 + 200}ms`
                              : "0ms",
                        }}
                      >
                        <span
                          className={`mt-1 ${
                            section.id % 2 === 0
                              ? "text-[#005f73]"
                              : "text-[#0f294d]"
                          }`}
                        >
                          •
                        </span>
                        <span className="text-gray-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div
          className={`bg-gradient-to-r from-[#005f73] to-[#0f294d] rounded-xl p-8 mt-12 shadow-lg text-white transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center mb-4">
              <Mail
                className="w-8 h-8 text-white animate-bounce"
                style={{
                  animationDelay: "100ms",
                  animationDuration: "2s",
                  animationIterationCount: 3,
                }}
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Privacy Concerns or Questions?
            </h3>
            <p className="mb-6 text-white/90">
              If you have any questions about our privacy practices or need to
              exercise your rights under the Digital Personal Data Protection
              Act, 2023, please contact us:
            </p>
            <button
              onClick={copyEmail}
              className="inline-flex items-center space-x-2 bg-white text-[#0f294d] px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 font-medium hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>support@ozmediaplanet.com</span>
            </button>
            <p
              className="text-white/70 text-sm mt-2 animate-pulse"
              style={{ animationDuration: "2s" }}
            >
              Click to copy email address
            </p>
          </div>
        </div>

        {/* Policy Update Note */}
        <div
          className={`mt-8 p-4 bg-[#f0f9ff] rounded-lg border border-[#005f73]/20 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-center text-gray-700">
            <strong>Note:</strong> Oz Media Planet may update this Privacy
            Policy periodically. All updates will be posted on this page with
            the updated effective date.
          </p>
        </div>

        {/* Footer */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500">
              © 2025 Oz Media Planet. All rights reserved. | Last updated:
              January 2025
            </p>
          </div>
        </div>
      </div>

      {/* Add these to your global CSS or CSS-in-JS */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes grow {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-grow {
          animation: grow 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;

import React from "react";
import ServiceCards from "./ServiceCards";
import HeroSection from "../../components/common/HeroSection";
import PartnersMarquee from "../../components/Marque";
import BlogSection from "./BlogSection";
import FeatureSection from "./ContentLayout";

const logos = [
  { src: "Fictional Company Logo.png", alt: "BestBank" },
  { src: "/Fictional Company Logo-1.png", alt: "dataBites" },
  { src: "Fictional Company Logo-2.png", alt: "MarketSavy" },
  { src: "Fictional Company Logo-3.png", alt: "EpicDev" },
  { src: "Fictional Company Logo-4.png", alt: "BestBank" },
];

const blogPosts = [
  {
    id: 1,
    title: "🚀 2025 Digital Marketing Trends You Can’t Ignore ",
    date: "February 15, 2025",
    comments: "No Comments",
    excerpt:
      "From AI-driven content to hyper-personalized campaigns, discover what’s shaping the digital landscape this year",
    image:
      "/pmc-media-group-blog-digital-marketing-trends-2025-ai-personalization-and-privacy-first-strategies.jpg",
    link: "https://hiilite.com/12-digital-marketing-trends-to-look-out-for-in-2025/",
  },
  {
    id: 2,
    title: "🎯 Maximizing ROI: Smart Strategies for Paid Ads",
    date: "April 24, 2025",
    comments: "No Comments",
    excerpt:
      "Learn how to design high-converting ad campaigns that not only get clicks but deliver real business results",
    image: "/technology-hologram-illustrated.jpg",
    link: "https://johnwolfecompton.com/10-essential-tips-for-maximizing-your-roi-in-paid-digital-advertising/?utm_source=chatgpt.com",
  },
  {
    id: 3,
    title: "📸 Visual Storytelling: The Future of Brand Engagement",
    date: "May 15, 2025",
    comments: "No Comments",
    excerpt:
      "Why photos, videos, GIFs, and CGI are more than visuals—they’re your brand’s most powerful storytellers.",
    image: "/nxJPkeMtJ21FY6jipui0ww9fTHUEfQZZs54BMleU5xuyB9zQB-tmp6p65nye5.png",
    link: "https://blog.brandsatplayllc.com/blog/video-marketing-trends-2025-why-visual-storytelling-is-the-future",
  },
];

const services = [
  {
    id: 1,
    icon: "/Assets/seo 1 (2).png",
    title: "SEO",
    reverse: false,
    description:
      "Get found where it matters. With powerful SEO strategies, every search leads straight to you. From keyword optimization to technical fine-tuning, we drive organic traffic, boost rankings, and put your brand ahead of the competition.",
  },
  {
    id: 1,
    icon: "/Assets/social media 1 (2).png",
    title: "Social Media",
    reverse: true,
    description:
      "Turn engagement into growth with powerful social media strategies. From content creation to ad campaigns and audience interaction, every move is designed to amplify reach, build loyalty, and drive results.",
  },

  {
    id: 3,
    icon: "/Assets/CREATIVE STUDIO 1 (1).png",
    title: "CREATIVE STUDIO",
    reverse: false,
    description:
      "Transform ideas into stunning visuals with expert photo and video production. From brand storytelling to high-quality product shoots, we craft compelling content that enhances your brand’s identity and captivates your audience.",
  },
  {
    id: 4,
    icon: "/Assets/social media 1 (2).png",
    title: "DYNAMIC VISUAL CONTENT",
    reverse: true,
    description:
      "Stand out with eye-catching GIFs, videos, and CGI creations designed to grab attention and drive engagement. From trending social clips to high-impact brand storytelling, we craft visuals.",
  },
  {
    id: 6,
    icon: "/Assets/social media 1 (2).png",
    reverse: false,
    title: "CONTENT MANAGEMENT",
    description:
      "Content isn’t just about looking good—it’s about making an impact. With the right mix of visuals, storytelling, and strategy, every post becomes an opportunity to engage, inspire, and convert.",
  },
  {
    id: 7,
    icon: "/Assets/digital advertise 1 (1).png",
    title: "STRATEGIC DIGITAL ADVERTISING",
    reverse: true,
    description:
      "Drive real growth with smart, data-backed ad strategies. From precise audience targeting to high-converting creatives, we design and manage campaigns.",
  },

  {
    id: 8,
    icon: "/Assets/payperclick 1 (1).png",
    title: "Pay-Per-Click (PPC) Advertising",
    reverse: false,
    description:
      "Get seen. Get clicks. Get results. Our PPC campaigns put your brand at the top when it matters most. We target the right audience, manage your budget wisely, and turn traffic into real customers.",
  },
  {
    id: 9,
    icon: "/Assets/digital advertise 1 (1).png",
    title: "Affiliate Marketing",
    reverse: true,
    description:
      "Grow your business through the power of partnerships. With our affiliate marketing strategies, you only pay for real results—sales, leads, or traffic. We connect you with trusted affiliates who promote your brand and drive performance",
  },
  {
    id: 5,
    icon: "/Assets/email marketing 1 (1).png",
    reverse: false,
    title: "Email marketing",
    description:
      "Turn inboxes into income. Our email marketing campaigns are designed to engage, convert, and keep your audience coming back. From eye-catching designs.",
  },
  {
    id: 11,
    icon: "/Assets/google ads 1 (1).png",
    title: "GOOGLE ADS",
    reverse: true,
    description:
      "Get your business in front of millions with Google Ads. We create targeted campaigns that reach your ideal customers at the perfect moment—driving traffic, leads, and sales",
  },

  {
    id: 10,
    icon: "/Assets/email marketing 1 (1).png",
    title: "GIFs & Videos",
    reverse: false,
    description:
      "Elevate your brand with stunning GIFs, videos, and CGI content. Our creative team crafts visually captivating designs to amplify engagement and visibility on social media.",
  },
  {
    id: 12,
    icon: "/Assets/Influencer marketing 1 (1).png",
    title: "INFLUENCER MARKETING",
    reverse: true,
    description:
      "Grow your business through the power of partnerships. With our affiliate marketing strategies, you only pay for real results—sales, leads, or traffic. We connect you with trusted affiliates.",
  },
];

const MarketingServicesPage = () => {
  return (
    <div className="">
      <HeroSection
        title="Digital Marketing"
        subtitle=""
        leftImg="/Assets/illustrator 1 (1).png"
        rightImg="Assets/Rotate Anti (2).png"
      />

      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="mb-12  ">
            <h2 className="text-[#073757] font-bold text-6xl text-bold font-montserrat mb-4">
              Digital Marketing
              <img
                src="/Assets/Breathe (1).png"
                alt=""
                className="mx-6 h-10 md:h-14 animate-bounce inline-block"
              />
            </h2>
            <h3 className="text-black font-bold  text-3xl sm:text-4xl md:text-5xl  mb-6 flex items-center flex-wrap gap-2">
              Transforming Digital Marketing with <br />
              Strategy & Creativity
            </h3>
            <p className="text-black text-lg font-display">
              Digital success isn’t just about being seen—it’s about making an
              impact. OZ Media Planet crafts powerful <br /> marketing
              strategies that drive engagement, growth, and results. From SEO
              and content to social media <br /> and ads, we turn brands into
              industry leaders.{" "}
            </p>
          </div>
          {services.map((item) => {
            return (
              <FeatureSection
                key={item.id}
                title={item.title}
                reverse={item.reverse}
                imgSrc={item.icon}
                description={item.description}
              />
            );
          })}
        </div>
      </section>
      <section className="container mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="/Assets/what to do 1 (1).png"
            alt="Digital Marketing"
            className="w-full h-auto md:h-[650px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8">
          <h2
            className="text-[#073757] font-extrabold 
                   text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2"
          >
            We love what we do
          </h2>

          <p
            className="text-black 
                  text-base sm:text-lg md:text-xl lg:text-2xl 
                  leading-relaxed"
          >
            Don’t just chase vanity metrics — let your brand grow where it truly
            counts. At Your Oz media, we turn clicks into conversions, followers
            into customers, and campaigns into measurable success.
          </p>

          <h3
            className="text-[#073757] font-bold 
                   text-2xl sm:text-3xl md:text-3xl lg:text-3xl mb-4"
          >
            Where Data Meets Creativity, Magic Happens
          </h3>

          <p
            className="text-black 
                  text-base sm:text-lg md:text-xl lg:text-2xl 
                  leading-relaxed"
          >
            Let us craft social media strategies that not only grab attention
            but also drive real business results. From compelling content to
            performance-driven ads, we deliver impact where it matters most.
          </p>

          <div className="bg-[#CC9500] p-4 sm:p-6 md:p-8 lg:p-10 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold rounded-tr-2xl rounded-bl-2xl shadow-lg">
            Hit us up — and let’s turn your social media into a growth engine.
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingServicesPage;

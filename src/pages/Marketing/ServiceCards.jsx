import React from "react";
import Card from "../../components/common/Card";

const ServiceCards = () => {
  const services = [
    {
      id: 2,
      icon: "/images/img_lineiconsbundlexubzu9k_1_9.png",
      title: "SEO",
      description:
        "Get found where it matters. With powerful SEO strategies, every search leads straight to you. From keyword optimization to technical fine-tuning, we drive organic traffic, boost rankings, and put your brand ahead of the competition.",
    },
    {
      id: 1,
      icon: "/images/img_lineiconsbundlexubzu9k_1_4.png",
      title: "Social Media",
      description:
        "Turn engagement into growth with powerful social media strategies. From content creation to ad campaigns and audience interaction, every move is designed to amplify reach, build loyalty, and drive results.",
    },

    {
      id: 3,
      icon: "/images/img_lineiconsbundlexubzu9k_1_8.png",
      title: "CREATIVE STUDIO",
      description:
        "Transform ideas into stunning visuals with expert photo and video production. From brand storytelling to high-quality product shoots, we craft compelling content that enhances your brand’s identity and captivates your audience.",
    },
    {
      id: 4,
      icon: "/images/img_lineiconsbundlexubzu9k_1_7.png",
      title: "DYNAMIC VISUAL CONTENT",
      description:
        "Stand out with eye-catching GIFs, videos, and CGI creations designed to grab attention and drive engagement. From trending social clips to high-impact brand storytelling, we craft visuals.",
    },
    {
      id: 5,
      icon: "/images/img_lineiconsbundlexubzu9k_1_6.png",
      title: "Email marketing",
      description:
        "Turn inboxes into income. Our email marketing campaigns are designed to engage, convert, and keep your audience coming back. From eye-catching designs.",
    },
    {
      id: 6,
      icon: "/images/img_lineiconsbundlexubzu9k_1_5.png",
      title: "CONTENT MANAGEMENT",
      description:
        "Content isn’t just about looking good—it’s about making an impact. With the right mix of visuals, storytelling, and strategy, every post becomes an opportunity to engage, inspire, and convert.",
    },
    {
      id: 7,
      icon: "/images/img_lineiconsbundlexubzu9k_1_4.png",
      title: "STRATEGIC DIGITAL ADVERTISING",
      description:
        "Drive real growth with smart, data-backed ad strategies. From precise audience targeting to high-converting creatives, we design and manage campaigns.",
    },
    
    {
      id: 8,
      icon: "/images/img_lineiconsbundlexubzu9k_1_3.png",
      title: "Pay-Per-Click (PPC) Advertising",
      description:
        "Get seen. Get clicks. Get results. Our PPC campaigns put your brand at the top when it matters most. We target the right audience, manage your budget wisely, and turn traffic into real customers.",
    },
    {
      id: 9,
      icon: "/images/img_lineiconsbundlexubzu9k_1_2.png",
      title: "Affiliate Marketing",
      description:
        "Grow your business through the power of partnerships. With our affiliate marketing strategies, you only pay for real results—sales, leads, or traffic. We connect you with trusted affiliates who promote your brand and drive performance",
    },
    {
      id: 10,
      icon: "/images/img_lineiconsbundlexubzu9k_1_1.png",
      title: "Paid social",
      description:
        "Grow your business through the power of partnerships. With our affiliate marketing strategies, you only pay for real results—sales, leads, or traffic. We connect you with trusted affiliates who promote your brand and drive performance4",
    },
    {
      id: 11,
      icon: "/images/img_lineiconsbundlexubzu9k_1_48x48.png",
      title: "GOOGLE ADS",
      description:
        "Get your business in front of millions with Google Ads. We create targeted campaigns that reach your ideal customers at the perfect moment—driving traffic, leads, and sales",
    },
    {
      id: 12,
      icon: "/images/img_lineiconsbundlexubzu9k_1.png",
      title: "Blockchain development",
      description:
        "We bring the right people together to challenge established thinking and drive transform in 2020",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service) => (
        <Card
          key={service.id}
          icon={service.icon}
          title={service.title}
          description={service.description}
          className="h-full transition-transform hover:scale-105"
        />
      ))}
    </div>
  );
};

export default ServiceCards;

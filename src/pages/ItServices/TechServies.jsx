import React from "react";
import Card from "../../components/common/Card";

const TechServices = () => {
  const services = [
    {
      id: 2,
      icon: "/images/img_lineiconsbundlexubzu9k_1_9.png",
      title: "WEBSITE DEVELOPMENT",
      description:
        "A website is more than just an online space—it’s where brands come to life. Every element, from design to functionality, should create a seamless experience that captivates and converts. With expert craftsmanship and cutting-edge technology, we build websites that don’t just meet expectations—they set new standards.",
    },
    {
      id: 1,
      icon: "/images/img_lineiconsbundlexubzu9k_1_4.png",
      title: "Software Development",
      description:
        "We specialize in building robust, scalable software solutions using a variety of cutting-edge technologies. Whether it’s Python, MERN, MEAN, PHP, Java, or mobile app development, our team delivers high-quality, custom-built applications tailored to your business needs. With expertise across multiple languages and frameworks, we create software that’s efficient, secure, and future-ready",
    },

    {
      id: 3,
      icon: "/images/img_lineiconsbundlexubzu9k_1_8.png",
      title: "UI/UX Design",
      description:
        "We craft smart, user-focused designs that look great and work even better. From sleek interfaces to seamless user journeys, our UI/UX solutions turn ideas into intuitive digital experiences. Every screen we design is built to engage, convert, and keep your users happy. Clean, creative, and always user-first — that’s our approach.",
    },
    {
      id: 4,
      icon: "/images/img_lineiconsbundlexubzu9k_1_7.png",
      title: "App Development",
      description:
        "We build custom, high-performance mobile apps for iOS, Android, and cross-platform platforms. Our team ensures seamless user experiences, fast performance, and secure integrations. From concept to launch, we deliver apps that are reliable, scalable, and designed to meet your business needs. Whether native or hybrid, we use the latest technologies to bring your app to life.",
    },
    {
      id: 5,
      icon: "/images/img_lineiconsbundlexubzu9k_1_6.png",
      title: "Graphic Designing",
      description:
        "We bring your brand to life with stunning visuals that leave a lasting impression. From logos and brochures to social media graphics and marketing materials, our designs capture your message with creativity and precision. Whether you need bold, modern, or timeless designs, we craft visuals that connect and inspire.",
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
      title: "API Development",
      description:
        "We create powerful, secure, and scalable APIs that connect your applications seamlessly. Our expert developers build custom APIs that enable smooth data exchange, enhance functionality, and improve system integrations. Whether you need RESTful or GraphQL APIs, we ensure your API solutions are reliable and future-proof.",
    },

    {
      id: 8,
      icon: "/images/img_lineiconsbundlexubzu9k_1_3.png",
      title: "Software Development",
      description:
        "We build powerful, custom software solutions using today’s leading technologies. Our expertise spans Python, MEAN stack, MERN stack, PHP, Java, and mobile app development. Whether you’re launching a new product or upgrading an existing system, we deliver secure, scalable, and high-performance software tailored to your business goals.",
    },
    {
      id: 9,
      icon: "/images/img_lineiconsbundlexubzu9k_1_2.png",
      title: "E-commerce Web Development",
      description:
        "We create dynamic, user-friendly e-commerce websites that drive sales and deliver seamless shopping experiences. From product catalogs to secure payment integration, our solutions are built for speed, scalability, and success. Whether you need a custom store or a platform like Shopify, WooCommerce, or Magento — we turn your online vision into a high-performing digital storefront",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
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

export default TechServices;

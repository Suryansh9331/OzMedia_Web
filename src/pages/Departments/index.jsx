import React, { useState } from 'react';
import { ChevronRight, Users, Code, Megaphone, ArrowRight, Globe, Smartphone, PenTool, BarChart3, Camera, Target, Zap, Search, Share2, Mail, TrendingUp, Monitor, Database, Settings } from 'lucide-react';
import HeroSection from "../../components/common/HeroSection";
import { Link } from 'react-router-dom';
const Department = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [expandedDept, setExpandedDept] = useState(null);

  const departments = [
    {
      id: 1,
      title: "Digital Marketing Department",
      subtitle: "Performance-Driven Growth & Online Presence",
      description: "Our Digital Marketing Department is your gateway to digital success. We combine data-driven strategies with creative excellence to help brands establish a powerful online presence, connect meaningfully with their target audience, and achieve measurable business growth. Our performance-focused approach ensures every marketing dollar delivers maximum ROI.",
      detailedDescription: "In today's digital landscape, visibility is everything. Our Digital Marketing Department specializes in crafting comprehensive marketing strategies that not only increase brand awareness but also drive qualified traffic and conversions. We understand that each business is unique, which is why our team of experienced marketers develops customized campaigns tailored to your specific industry, audience, and goals. From SEO optimization that boosts organic rankings to social media campaigns that build community engagement, we cover every aspect of digital marketing with precision and creativity.",
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1559854036-2409f22a918a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGRpZ2l0YWwlMjBtYXJrZXRpbmclMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
      services: [
        {
          name: "Search Engine Optimization (SEO)",
          icon: <Search className="w-5 h-5" />,
          description: "Comprehensive on-page, off-page, and technical SEO strategies to improve organic search visibility and drive qualified traffic to your website."
        },
        {
          name: "Social Media Marketing & Management",
          icon: <Share2 className="w-5 h-5" />,
          description: "End-to-end social media strategy, content creation, campaign execution, and community management across Instagram, Facebook, LinkedIn, and YouTube."
        },
        {
          name: "Pay-Per-Click (PPC) Campaigns",
          icon: <Target className="w-5 h-5" />,
          description: "ROI-focused Google Ads, Meta Ads, and display campaigns with continuous optimization for maximum conversions and cost efficiency."
        },
        {
          name: "Email Marketing Campaigns",
          icon: <Mail className="w-5 h-5" />,
          description: "Automated email sequences, newsletters, and promotional campaigns designed to nurture leads and enhance customer retention rates."
        },
        {
          name: "Content Marketing Strategies",
          icon: <PenTool className="w-5 h-5" />,
          description: "Strategic blogging, copywriting, lead magnets, and visual storytelling specifically tailored to your industry and audience preferences."
        },
        {
          name: "Analytics and Performance Reporting",
          icon: <TrendingUp className="w-5 h-5" />,
          description: "In-depth reporting with Google Analytics, social insights, and comprehensive marketing dashboards to track KPIs and optimize strategies."
        }
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-white/40"
    },
    {
      id: 2,
      title: "Information Technology Services",
      subtitle: "Scalable Technology Solutions & Digital Infrastructure",
      description: "Our IT Services Department is the backbone of digital transformation for modern businesses. We deliver cutting-edge technology solutions that are not only functional and secure but also highly scalable to grow with your business. From custom software development to robust hosting solutions, we ensure your digital infrastructure is built to perform.",
      detailedDescription: "Technology is the foundation of every successful digital business. Our IT Services Department combines technical expertise with innovative thinking to create solutions that streamline operations, enhance user experiences, and drive business efficiency. We work with the latest technologies and frameworks to deliver websites, applications, and software that not only meet current needs but are also future-ready. Our development process is collaborative, ensuring that every solution aligns perfectly with your business objectives and technical requirements.",
      icon: <Code className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1536148935331-408321065b18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fElUfGVufDB8fDB8fHww",
      services: [
        {
          name: "Website Development",
          icon: <Monitor className="w-5 h-5" />,
          description: "Bespoke static and dynamic websites designed for optimal speed, responsiveness, SEO performance, and exceptional user experience."
        },
        {
          name: "E-Commerce Development",
          icon: <Globe className="w-5 h-5" />,
          description: "Complete e-commerce solutions on Shopify, WooCommerce, Magento, and custom platforms with integrated payment gateways and inventory management."
        },
        {
          name: "Mobile Application Development",
          icon: <Smartphone className="w-5 h-5" />,
          description: "Native Android/iOS applications and cross-platform solutions using Flutter and React Native for maximum reach and performance."
        },
        {
          name: "Custom Software Development",
          icon: <Settings className="w-5 h-5" />,
          description: "Industry-specific software products, ERP systems, and SaaS applications designed to optimize your unique business workflows and processes."
        },
        {
          name: "Web Portal Development",
          icon: <Database className="w-5 h-5" />,
          description: "Comprehensive client portals, B2B/B2C platforms, booking systems, and operational dashboards for enhanced business efficiency."
        },
        {
          name: "API Development & Integration",
          icon: <Zap className="w-5 h-5" />,
          description: "Custom API solutions for seamless third-party service integrations, CRM systems connectivity, and mobile application backend services."
        }
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-white/40"
    },
    {
      id: 3,
      title: "Brand Promotion Department",
      subtitle: "Creative Brand Identity & Strategic Market Positioning",
      description: "Our Brand Promotion Department is where creativity meets strategy to build powerful brand identities. We focus on creating unique brand experiences that resonate with your target market and enhance your overall market presence through innovative storytelling, visual excellence, and strategic promotional campaigns that drive brand recognition and customer loyalty.",
      detailedDescription: "Brand identity is more than just a logo – it's the emotional connection between your business and your customers. Our Brand Promotion Department specializes in creating comprehensive brand strategies that tell your unique story, differentiate you from competitors, and build lasting customer relationships. We combine creative excellence with strategic thinking to develop brand identities that not only look exceptional but also communicate your values, mission, and unique value proposition effectively across all marketing channels and customer touchpoints.",
      icon: <Megaphone className="w-8 h-8" />,
      image: "https://plus.unsplash.com/premium_photo-1683732137653-9121ba5e8ede?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb21vdGlvbiUyMGltYWdlfGVufDB8fDB8fHww",
      services: [
        {
          name: "Brand Identity Creation",
          icon: <PenTool className="w-5 h-5" />,
          description: "Complete brand identity development including logo design, brand guidelines, color palettes, and comprehensive brand strategy for businesses of all sizes."
        },
        {
          name: "Video Production & Commercial Advertisements",
          icon: <Camera className="w-5 h-5" />,
          description: "Professional advertisement films, explainer videos, product showcases, corporate promotional content, and high-quality animation services."
        },
        {
          name: "Product Launch Campaigns",
          icon: <Target className="w-5 h-5" />,
          description: "Comprehensive pre-launch, launch, and post-launch marketing strategies designed to maximize product visibility, market penetration, and sales conversion."
        },
        {
          name: "Influencer Collaborations & Management",
          icon: <Users className="w-5 h-5" />,
          description: "Strategic partnerships with micro and macro influencers across various niches to build brand authenticity, trust, and expanded market reach."
        },
        {
          name: "Brand Awareness Campaigns",
          icon: <TrendingUp className="w-5 h-5" />,
          description: "Multi-channel promotional campaigns at local and national levels across digital and traditional platforms for maximum brand exposure and recognition."
        },
        {
          name: "Creative Designing Services",
          icon: <PenTool className="w-5 h-5" />,
          description: "Professional design services including posters, brochures, catalogs, product packaging design, and comprehensive promotional marketing assets."
        }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-white/40"
    }
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Unified Brand Experiences",
      description: "Seamless integration across all touchpoints"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Streamlined Execution",
      description: "Reduced turnaround time with efficient workflows"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Data-Driven Decisions",
      description: "Technology combined with creative strategy"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cost-Effective Solutions",
      description: "Bundled services for startups, SMEs, and enterprises"
    }
  ];

  return (
    <div className="h-auto bg-[#cfcfcf]">
       <HeroSection
          title="Departments"
          rightImg="/Assets/Rotate.png"
          leftImg="/Assets/About us 1.png"
        />
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0f294d] via-[#005f73] to-[#0f294d]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-2 py-12 relative z-10">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <span className="text-cyan-300 font-medium">🚀 Complete Digital Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Departments</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Specialized teams delivering focused expertise and seamless execution across every aspect of digital business growth
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Departments Detailed Sections */}
      <div className="container mx-auto px-6 py-16">
        {departments.map((dept, index) => (
          <div 
            key={dept.id}
            className={`mb-20 ${dept.bgColor} rounded-3xl p-8 md:p-12 relative overflow-hidden`}
          >
            {/* Background Animation Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-20">
              <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: `${index}s`}}></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${dept.color} rounded-2xl mr-4 text-white shadow-lg`}>
                    {dept.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{dept.title}</h2>
                    <p className="text-lg font-medium" style={{color: '#005f73'}}>{dept.subtitle}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    {dept.description}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {dept.detailedDescription}
                  </p>
                </div>

                <button 
                  onClick={() => setExpandedDept(expandedDept === dept.id ? null : dept.id)}
                  className="mb-6 inline-flex items-center px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-semibold"
                  style={{color: '#005f73'}}
                >
                  {expandedDept === dept.id ? 'Hide Services' : 'View All Services'}
                  <ChevronRight className={`w-5 h-5 ml-2 transition-transform ${expandedDept === dept.id ? 'rotate-90' : ''}`} />
                </button>

                {/* Services Expansion */}
                <div className={`overflow-hidden transition-all duration-500 ${expandedDept === dept.id ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="grid gap-4">
                    {dept.services.map((service, idx) => (
                      <div 
                        key={idx}
                        className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:bg-white/90 transition-all duration-300"
                        style={{animationDelay: `${idx * 100}ms`}}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-2 bg-gradient-to-r ${dept.color} rounded-lg text-white flex-shrink-0`}>
                            {service.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
               <Link to="/contact">
                  <button 
                    className="group bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Get Started with {dept.title.split(' ')[0]} Services
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </button>
               </Link>
                </div>
              </div>

              {/* Image Side */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <img 
                    src={dept.image}
                    alt={dept.title}
                    className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl z-20"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Collaboration Section */}
      <div className="container mx-auto px-6 pb-8">
        <div className="relative">
          <div className="bg-white/40 rounded-3xl p-12 relative overflow-hidden border border-gray-100">
            {/* Minimal accent color usage */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <div className="w-full h-full rounded-full blur-3xl animate-pulse" style={{backgroundColor: '#0f294d'}}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Integrated <span style={{color: '#005f73'}}>Collaboration</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Our departments work in perfect harmony, ensuring unified brand experiences and streamlined project execution with data-driven decision-making
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-gray-800 font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
              <Link to="/about"> 
                <button 
                  className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-semibold px-10 py-4 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Digital Journey
                  <ArrowRight className="w-5 h-5 ml-3 inline" />
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
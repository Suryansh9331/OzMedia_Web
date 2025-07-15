import React, { useState } from 'react';
import Button from '../ui/Button';
import InputField from '../ui/InputField';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
    alert('Thank you for subscribing to our newsletter!');
  };

  return (
    <footer className="bg-bg-dark py-16 px-4 md:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - Logo and Social */}
          <div className="flex flex-col space-y-6">
            <img src="/images/img_dytonite_2.png" alt="Dytonite Logo" className="h-[94px] w-[282px]" />
            
            <div className="mt-4">
              <h3 className="text-white font-montserrat font-bold text-base mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" className="bg-primary-red w-[42px] h-[42px] flex items-center justify-center">
                  <img src="/images/img_vector_26x26.svg" alt="Facebook" className="w-[26px] h-[26px]" />
                </a>
                <a href="https://twitter.com" className="bg-primary-red w-[42px] h-[42px] flex items-center justify-center">
                  <img src="/images/img_vector_20x24.svg" alt="Twitter" className="w-[20px] h-[24px]" />
                </a>
                <a href="https://instagram.com" className="bg-primary-red w-[42px] h-[42px] flex items-center justify-center">
                  <img src="/images/img_vector.svg" alt="Instagram" className="w-[18px] h-[26px]" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2 - Services */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-base mb-4">Services :</h3>
            <ul className="space-y-4">
              <li><a href="/services/social-media" className="text-white font-roboto text-sm">Social Media</a></li>
              <li><a href="/services/seo" className="text-white font-roboto text-sm">SEO</a></li>
              <li><a href="/services/blockchain" className="text-white font-roboto text-sm">Blockchain Development</a></li>
            </ul>
          </div>
          
          {/* Column 3 - Work */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-base mb-4">Work :</h3>
            <ul className="space-y-4">
              <li><a href="/work/cases" className="text-white font-roboto text-sm">Cases</a></li>
              <li><a href="/work/portfolio" className="text-white font-roboto text-sm">Portofolio</a></li>
              <li><a href="/work/blog" className="text-white font-roboto text-sm">Blog</a></li>
            </ul>
          </div>
          
          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-white font-montserrat font-bold text-base mb-4">Contact us :</h3>
            <ul className="space-y-4">
              <li className="text-white font-roboto text-sm">hello@awesomesite.com</li>
              <li className="text-white font-roboto text-sm">+123-234-1234</li>
              <li className="text-white font-roboto text-sm">99 Roving St., Big City, PKU</li>
            </ul>
            
            <div className="mt-8">
              <h3 className="text-white font-montserrat font-bold text-base mb-4">Subscribe to our Newsletter</h3>
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <InputField
                  type="email" placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className="bg-transparent border border-border-gray p-4 text-primary-red"
                />
                <Button 
                  type="submit" className="bg-primary-red text-white font-montserrat font-bold py-4 px-6"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <hr className="border-t border-border-gray" />
          <p className="text-[#363636] font-roboto text-sm text-center mt-4">
            Copyright 2023 © All Right Reserved Design by Rometheme
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
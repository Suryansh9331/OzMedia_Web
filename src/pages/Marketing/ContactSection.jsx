import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import InputField from '../../../components/ui/InputField';
import Textarea from '../../../components/ui/Textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    website: '',
    option: 'Haven\'t decide yet',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleOptionChange = (option) => {
    setFormData({
      ...formData,
      option
    });
  };

  return (
    <section className="py-16 bg-[#070707]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[#fd4360] font-bold text-xl mb-4">Contact</h2>
            <h3 className="text-white font-bold text-4xl mb-8">More about you</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputField
                  label="First Name" name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name*"
                  required
                />
                
                <InputField
                  label="Last Name" name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name (Optional)"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <InputField
                  label="E-mail" name="email" type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  required
                />
                
                <InputField
                  label="URL" name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Website URL (Optional)"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2">
                  Please choose an option :
                </label>
                <div className="border border-[#bdbaba23] p-2">
                  <span className="text-[#fd4360]">{formData.option}</span>
                </div>
              </div>
              
              <Textarea
                label="Message" name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                required
              />
              
              <div className="mt-6">
                <Button 
                  type="submit" variant="primary" className="w-full py-3 flex items-center justify-center"
                >
                  Send a Message
                  <img src="/images/img_plus.svg" alt="Send" className="ml-2 w-[8px] h-[8px]" />
                </Button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-2xl mb-6">Start Now on Your Growth Journey</h3>
              <p className="text-white mb-8">
                Praesent pretium, erat in finibus varius, metus erat efficitur lacus, eget porta diam purus id orci. Vestibulum ante ipsum primis in faucibus orci luctus ;
              </p>
              
              <ul className="space-y-4 mb-12">
                <li className="flex items-start">
                  <img src="/images/img_group.svg" alt="Check" className="w-[19px] h-[19px] mt-1 mr-3" />
                  <span className="text-white font-bold">Etiam consectetur ipsum vitae euismod tincidunt.</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_group.svg" alt="Check" className="w-[19px] h-[19px] mt-1 mr-3" />
                  <span className="text-white font-bold">Aenean hendrerit libero in quam pulvinar tristique.</span>
                </li>
                <li className="flex items-start">
                  <img src="/images/img_group.svg" alt="Check" className="w-[19px] h-[19px] mt-1 mr-3" />
                  <span className="text-white font-bold">Donec ornare est in ex feugiat elementum cras consequat.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-2xl mb-6">Contact Us :</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <img src="/images/img_systemuiconslocation.svg" alt="Location" className="w-[19px] h-[19px] mr-3" />
                  <span className="text-[#fd4360] font-bold">99 Roving St., Big City</span>
                </li>
                <li className="flex items-center">
                  <img src="/images/img_fluentmail28regular.svg" alt="Email" className="w-[17px] h-[17px] mr-3" />
                  <a href="mailto:hello@awesomesite.com" className="text-[#fd4360] font-bold">
                    hello@awesomesite.com
                  </a>
                </li>
                <li className="flex items-center">
                  <img src="/images/img_solarphonelinear.svg" alt="Phone" className="w-[16px] h-[16px] mr-3" />
                  <a href="tel:+1232341234" className="text-[#fd4360] font-bold">
                    +123-234-1234
                  </a>
                </li>
              </ul>
              
              <div className="flex space-x-3 mt-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white w-[34px] h-[34px] flex items-center justify-center">
                  <img src="/images/img_vector_28x28.svg" alt="Facebook" className="w-[28px] h-[28px]" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white w-[34px] h-[34px] flex items-center justify-center">
                  <img src="/images/img_vector_24x29.svg" alt="Twitter" className="w-[24px] h-[29px]" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white w-[34px] h-[34px] flex items-center justify-center">
                  <img src="/images/img_vector_19x28.svg" alt="Instagram" className="w-[19px] h-[28px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
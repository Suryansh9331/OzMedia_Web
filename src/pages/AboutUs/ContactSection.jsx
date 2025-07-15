import React, { useState } from "react";
import InputField from "../../components/ui/InputField";
import Textarea from "../../components/ui/Textarea";
import Button from "../../components/ui/Button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    url: "",
    option: "Haven't decide yet",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      url: "",
      option: "Haven't decide yet",
      message: "",
    });
  };

  return (
    <section className="py-16 px-4 md:px-16 bg-bg-dark-tertiary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-white font-montserrat font-bold text-4xl mb-8">
              Start Now on Your Growth Journey
            </h2>

            <p className="text-white font-roboto text-base leading-7 mb-8">
              Praesent pretium, erat in finibus varius, metus erat efficitur
              lacus, eget porta diam purus id orci. Vestibulum ante ipsum primis
              in faucibus orci luctus ;
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <img
                  src="/images/img_group.svg"
                  alt="Check"
                  className="w-5 h-5 mt-1"
                />
                <p className="text-white font-montserrat font-bold text-base">
                  Etiam consectetur ipsum vitae euismod tincidunt.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <img
                  src="/images/img_group.svg"
                  alt="Check"
                  className="w-5 h-5 mt-1"
                />
                <p className="text-white font-montserrat font-bold text-base">
                  Aenean hendrerit libero in quam pulvinar tristique.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <img
                  src="/images/img_group.svg"
                  alt="Check"
                  className="w-5 h-5 mt-1"
                />
                <p className="text-white font-montserrat font-bold text-base">
                  Donec ornare est in ex feugiat elementum cras consequat.
                </p>
              </div>
            </div>

            <h3 className="text-white font-montserrat font-bold text-2xl mb-6">
              Contact Us :
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="/images/img_systemuiconslocation.svg"
                  alt="Location"
                  className="w-5 h-5"
                />
                <p className="text-primary-red font-montserrat font-bold text-base">
                  99 Roving St., Big City
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src="/images/img_fluentmail28regular.svg"
                  alt="Email"
                  className="w-5 h-5"
                />
                <p className="text-primary-red font-montserrat font-bold text-base">
                  hello@awesomesite.com
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src="/images/img_solarphonelinear.svg"
                  alt="Phone"
                  className="w-5 h-5"
                />
                <p className="text-primary-red font-montserrat font-bold text-base">
                  +123-234-1234
                </p>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <a
                href="https://facebook.com"
                className="bg-white w-[34px] h-[34px] flex items-center justify-center"
              >
                <img
                  src="/images/img_vector_28x28.svg"
                  alt="Facebook"
                  className="w-7 h-7"
                />
              </a>
              <a
                href="https://twitter.com"
                className="bg-white w-[34px] h-[34px] flex items-center justify-center"
              >
                <img
                  src="/images/img_vector_24x29.svg"
                  alt="Twitter"
                  className="w-6 h-7"
                />
              </a>
              <a
                href="https://instagram.com"
                className="bg-white w-[34px] h-[34px] flex items-center justify-center"
              >
                <img
                  src="/images/img_vector_19x28.svg"
                  alt="Instagram"
                  className="w-5 h-7"
                />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-primary-red font-montserrat font-bold text-xl mb-2">
              Contact
            </h2>
            <h3 className="text-white font-montserrat font-bold text-5xl mb-8">
              More about you
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-roboto text-sm mb-2">
                    First Name
                  </label>
                  <InputField
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-roboto text-sm mb-2">
                    Last Name
                  </label>
                  <InputField
                    type="text"
                    name="lastName"
                    placeholder="Last Name (Optional)"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-roboto text-sm mb-2">
                    E-mail
                  </label>
                  <InputField
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-white font-roboto text-sm mb-2">
                    URL
                  </label>
                  <InputField
                    type="url"
                    name="url"
                    placeholder="Website URL (Optional)"
                    value={formData.url}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-roboto text-sm mb-2">
                  Please choose an option :
                </label>
                <InputField
                  type="text"
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                  className="text-primary-red"
                />
              </div>

              <div>
                <label className="block text-white font-roboto text-sm mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                className="border border-[#fd4360] bg-transparent text-[#fd4360] font-montserrat font-bold py-3 px-8 w-full flex items-center justify-center hover:bg-[#fd4360] hover:text-white transition-colors duration-300"
              >
                Send a Message
                <img
                  src="/images/img_plus.svg"
                  alt="Plus"
                  className="ml-2 w-2 h-2"
                />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { useState } from "react";
import InputField from "../../components/ui/InputField";
import Textarea from "../../components/ui/Textarea";
import Button from "../../components/ui/Button";
import Swal from "sweetalert2";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    url: "",
    option: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();
    const dateTime = now.toLocaleString(); // You can customize format if needed

    const payload = {
      data: {
        ...formData,
        date: dateTime,
      },
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/tzipachu3srft", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      const result = await response.json();
      console.log("Success:", result);
      Swal.fire({
        title: "Success!",
        text: "Form submitted successfully!",
        icon: "success",
        confirmButtonColor: "#FCC735",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#FCC735",
      });
    } finally {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        url: "",
        option: "Haven't decide yet",
        message: "",
      });
    }
  };

  return (
    <section className="py-16 px-4 md:px-16   ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="relative py-16 px-8 overflow-hidden">
            <div class=" min-h-screen flex items-center justify-center p-6">
              <div class="space-y-8 max-w-md text-[#073757]">
                <div>
                  <div class="flex items-center space-x-2">
                    <svg
                      width="34"
                      height="44"
                      viewBox="0 0 34 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.59096 6.07129H26.4124C27.4204 6.07122 28.3903 6.45689 29.123 7.14918C29.8557 7.84146 30.2957 8.78788 30.3527 9.79429L30.3588 10.0177V23.982C30.3589 24.99 29.9732 25.9599 29.2809 26.6926C28.5886 27.4253 27.6422 27.8653 26.6358 27.9224L26.4124 27.9284H7.59096C6.58294 27.9285 5.6131 27.5428 4.88039 26.8505C4.14769 26.1583 3.70767 25.2118 3.6506 24.2054L3.64453 23.982V10.0177C3.64447 9.00969 4.03013 8.03985 4.72242 7.30715C5.4147 6.57445 6.36112 6.13443 7.36753 6.07736L7.59096 6.07129ZM28.5374 13.2416L17.4218 19.0216C17.3141 19.0776 17.1964 19.1115 17.0754 19.1213C16.9545 19.1311 16.8328 19.1166 16.7175 19.0787L16.5815 19.0216L5.46596 13.2416V23.982C5.46598 24.5153 5.66652 25.0291 6.02779 25.4214C6.38905 25.8137 6.88461 26.0558 7.4161 26.0997L7.59096 26.107H26.4124C26.9459 26.107 27.4598 25.9062 27.8522 25.5447C28.2445 25.1832 28.4865 24.6874 28.5301 24.1556L28.5374 23.982V13.2416ZM26.4124 7.89272H7.59096C7.05766 7.89274 6.54386 8.09328 6.15156 8.45454C5.75925 8.8158 5.51713 9.31137 5.47325 9.84286L5.46596 10.0177V11.1883L17.0017 17.1869L28.5374 11.1883V10.0177C28.5373 9.48422 28.3366 8.97026 27.9751 8.57793C27.6136 8.1856 27.1177 7.9436 26.586 7.9L26.4124 7.89272Z"
                        fill="url(#paint0_linear_1110_12062)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1110_12062"
                          x1="17.0017"
                          y1="6.07129"
                          x2="17.0017"
                          y2="27.9284"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#092D48" />
                          <stop offset="1" stop-color="#166DAE" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <h2 class="text-3xl font-bold">Email</h2>
                  </div>
                  <p class="text-gray-700 text-xl ml-7">
                    info@ozmediaplanet.com
                  </p>
                </div>

                <div>
                  <div class="flex items-center space-x-2">
                    <svg
                      width="34"
                      height="44"
                      viewBox="0 0 34 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1110_12058)">
                        <path
                          d="M27.4591 29.7852L28.2584 30.5674L27.4576 29.7852H27.4591ZM8.41183 26.6152L9.20962 25.833L8.41032 26.6152H8.41183ZM2.17757 11.0417L1.37978 10.261L2.17908 11.0432L2.17757 11.0417ZM20.2155 25.3861L20.906 24.72L19.3059 23.1556L18.6199 23.8216L20.2155 25.3861ZM23.2163 24.4406L26.1038 25.9683L27.1841 24.0304L24.2982 22.5043L23.2163 24.4406ZM26.6583 29.003L24.5127 31.0806L26.1098 32.6435L28.2554 30.5674L26.6583 29.003ZM23.2042 31.7481C21.0133 31.948 15.3472 31.7701 9.20962 25.833L7.61101 27.396C14.3076 33.8756 20.6824 34.1932 23.4158 33.9447L23.2027 31.7481H23.2042ZM9.20962 25.833C3.36066 20.1723 2.39062 15.413 2.26974 13.3472L0.0063058 13.4721C0.157403 16.0717 1.35862 21.3471 7.61101 27.396L9.20962 25.833ZM11.2872 16.7465L11.7208 16.326L10.1253 14.7631L9.69162 15.1821L11.2887 16.7451L11.2872 16.7465ZM12.0654 10.9814L10.1615 8.50544L8.34686 9.82872L10.2507 12.3033L12.0654 10.9814ZM3.75351 7.96584L1.38129 10.2595L2.97989 11.8239L5.3506 9.53025L3.75351 7.96584ZM10.4894 15.9643C9.6886 15.1821 9.6886 15.1821 9.6886 15.1851H9.68558L9.68104 15.1909C9.6097 15.2618 9.54545 15.3391 9.48915 15.4218C9.40756 15.5394 9.31841 15.6938 9.24286 15.8893C9.05887 16.3941 9.01305 16.9368 9.1099 17.464C9.31237 18.7359 10.2129 20.4164 12.5186 22.6483L14.1172 21.0839C11.9581 18.9961 11.4443 17.7257 11.3492 17.1259C11.3038 16.8406 11.3507 16.6995 11.3643 16.6671C11.3718 16.6465 11.3748 16.6451 11.3643 16.6583C11.3509 16.6787 11.3358 16.6979 11.3189 16.7156L11.3038 16.7304C11.2989 16.7349 11.2939 16.7393 11.2887 16.7436L10.4879 15.9643H10.4894ZM12.5186 22.6483C14.8259 24.8803 16.562 25.7507 17.8705 25.9448C18.5399 26.0448 19.0793 25.9654 19.4887 25.8169C19.7177 25.7344 19.9319 25.6173 20.1234 25.4699C20.1494 25.4487 20.1746 25.4266 20.1989 25.4037L20.2095 25.3949L20.214 25.3905L20.2155 25.3875C20.2155 25.3875 20.217 25.3861 19.4177 24.6039C18.6169 23.8217 18.6214 23.8202 18.6214 23.8202L18.6245 23.8172L18.6275 23.8143L18.6366 23.8069L18.6517 23.7922C18.6698 23.7764 18.689 23.7616 18.7091 23.7481C18.7242 23.7378 18.7197 23.7423 18.6985 23.7511C18.6607 23.7643 18.5127 23.8099 18.215 23.7658C17.5895 23.6717 16.2749 23.1718 14.1172 21.0839L12.5186 22.6483ZM10.1615 8.50397C8.62034 6.50435 5.59236 6.18677 3.75351 7.96584L5.3506 9.53025C6.15444 8.75246 7.58079 8.83332 8.34686 9.82872L10.16 8.50397H10.1615ZM2.27125 13.3486C2.24103 12.8399 2.48127 12.3077 2.97989 11.8254L1.37978 10.261C0.568387 11.0461 -0.0707536 12.1577 0.0063058 13.4721L2.27125 13.3486ZM24.5127 31.0806C24.0987 31.4834 23.6515 31.7099 23.2057 31.7496L23.4158 33.9447C24.5263 33.8433 25.4344 33.2993 26.1113 32.645L24.5127 31.0806ZM11.7208 16.326C13.2092 14.8866 13.3195 12.612 12.0669 10.9829L10.2522 12.3047C10.8611 13.0972 10.7705 14.1367 10.1238 14.7645L11.7208 16.326ZM26.1053 25.9698C27.3397 26.6226 27.5316 28.1605 26.6598 29.0045L28.2584 30.5674C30.2831 28.6075 29.6591 25.339 27.1856 24.0319L26.1053 25.9698ZM20.906 24.7215C21.4862 24.1598 22.42 24.0216 23.2178 24.4421L24.2997 22.5057C22.6618 21.6382 20.631 21.8779 19.3074 23.1571L20.906 24.7215Z"
                          fill="url(#paint0_linear_1110_12058)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_1110_12058"
                          x1="14.7341"
                          y1="6.7998"
                          x2="14.7341"
                          y2="34.0007"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#073757" />
                          <stop offset="1" stop-color="#0F77BD" />
                        </linearGradient>
                        <clipPath id="clip0_1110_12058">
                          <rect width="34" height="34" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <h2 class="text-3xl font-bold">Phone</h2>
                  </div>
                  <p class="text-gray-700 text-xl ml-7">07314071492</p>
                </div>

                <div>
                  <div class="flex items-center space-x-2">
                    <svg
                      width="34"
                      height="44"
                      viewBox="0 0 34 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.0033 30.0174L18.025 28.8662C19.1842 27.5386 20.2269 26.279 21.1546 25.0809L21.9204 24.0706C25.118 19.7623 26.7176 16.3429 26.7176 13.8156C26.7176 8.4209 22.3689 4.04785 17.0033 4.04785C11.6378 4.04785 7.28906 8.4209 7.28906 13.8156C7.28906 16.3429 8.88868 19.7623 12.0863 24.0706L12.8521 25.0809C14.1756 26.7767 15.5602 28.4222 17.0033 30.0174Z"
                        stroke="url(#paint0_linear_1110_12052)"
                        stroke-width="2.68"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.0007 17.8101C19.2362 17.8101 21.0484 15.9979 21.0484 13.7625C21.0484 11.527 19.2362 9.71484 17.0007 9.71484C14.7653 9.71484 12.9531 11.527 12.9531 13.7625C12.9531 15.9979 14.7653 17.8101 17.0007 17.8101Z"
                        stroke="url(#paint1_linear_1110_12052)"
                        stroke-width="2.68"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1110_12052"
                          x1="17.0033"
                          y1="4.04785"
                          x2="17.0033"
                          y2="30.019"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#073757" />
                          <stop offset="1" stop-color="#0F77BD" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_1110_12052"
                          x1="17.0007"
                          y1="9.71484"
                          x2="17.0007"
                          y2="17.8101"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#073757" />
                          <stop offset="1" stop-color="#0F77BD" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <h2 class="text-3xl font-bold">Address</h2>
                  </div>
                  <p class="text-gray-700  text-xl  ml-7">
                    Front of Chai Kaapi Upper side of Biryani by kilo, 2nd
                    Floor, Property no. 7, PU-4 Scheme No. 54, Vijay Nagar,
                    Indore, Madhya Pradesh 452010
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-20 ">
            <h2 className="text-[#00000] font-montserrat font-bold text-5xl  mb-2">
              Contact
            </h2>
            <h3 className="text-[#073757] font-montserrat font-bold text-3xl mb-8">
              More about you
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <InputField
                    label="First Name"
                    type="text"
                    name="firstname"
                    placeholder="First Name*"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <InputField
                    label="Last Name"
                    type="text"
                    name="lastname"
                    placeholder="Last Name (Optional)"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <InputField
                    label="E-mail"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <InputField
                    label="URL"
                    type="url"
                    name="url"
                    placeholder="Website URL (Optional)"
                    value={formData.url}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <InputField
                  label="Please choose an option"
                  type="text"
                  placeholder="Haven't decide yet"
                  name="option"
                  value={formData.option}
                  onChange={handleChange}
                  className="text-primary-red"
                />
              </div>

              <div>
                <Textarea
                  label="Message"
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
                variant="primary"
                className=" border-2 border-[#FCC735] bg-[#FCC735] rounded-lg bg-transparent hover:bg-[#FCC735] hover:text-black font-bold py-3 px-8 w-full flex items-center justify-center transition-colors duration-300"
              >
                Send a Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

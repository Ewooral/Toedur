import React, { useState } from "react";

// Define the structure for support information
const supportInfo = [
  {
    title: "SUPPORT & SERVICE",
    content:
      "For any question related to our services or requirements for general information",
    color: "#f8f8f8",
    size: "4xl",
  },
  {
    title: "Welcome to Toedur Support!",
    content:
      "At Toedur, we are committed to providing exceptional support and service to ensure your educational journey is seamless and enjoyable. Our dedicated support team is here to assist you with any questions or issues you may encounter.",
    color: "#d4e1f7",
    size: "xl",
  },
  {
    title: "How We Can Help",
    content:
      "24/7 Customer Support: Our team is available around the clock to provide you with prompt and efficient assistance. Whether you have a question about our services or need technical support, we are always here to help.",
    color: "#d4e1f7",
    size: "xl",
  },
  {
    title: "Comprehensive Knowledge Base",
    content:
      "Explore our extensive knowledge base for answers to common questions, detailed guides, and helpful tutorials. This resource is designed to help you find solutions quickly and independently.",
    color: "#d4e1f7",
    size: "xl",
  },
  {
    title: "Live Chat",
    content:
      "For immediate assistance, our live chat feature connects you directly with a support specialist who can provide real-time solutions to your queries.",
    color: "#d4e1f7",
    size: "xl",
  },
  {
    title: "Email Support",
    content: 
    "Prefer to write to us? Send us an email at support@toedur.com, and our team will get back to you with detailed answers and personalized support.",
    color: "#d4e1f7",
    size: "xl",
  },

  {
    title: "Phone Support",
    content:
      "Speak directly with our support team by calling our helpline at xx-xxx-xxxx-xxxx. We are available to take your calls and provide the assistance you need.",
    color: "#d4e1f7",
    size: "xl",
  },
];

const SupportInfo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="">
      {supportInfo.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <h1
            className={`font-semibold text-[${item.color}] text-${item.size} my-5 cursor-pointer`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
          </h1>
          <div
            className={`transition-max-height duration-500 ease-in-out ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}
            style={{ transitionProperty: 'max-height, opacity' }}
          >
            <p
              className={`transition-opacity duration-500 ease-in-out text-[#ffffffa1] ${openIndex === index ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${openIndex === index ? '250ms' : '0ms'}` }}
            >
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SupportInfo;

/**
 * Transition for max-height and opacity: This approach uses max-height to animate the accordion's opening and closing. The opacity transition is used for the fade-in and fade-out effects. The max-height value (max-h-96) should be adjusted based on your content's maximum height to ensure smooth animations.
Transition Delay: The transitionDelay style is applied to the paragraph to delay the fade-in effect, making the content appear after the max-height transition starts. This delay helps in achieving a more natural animation effect. For the fade-out, the delay is set to 0ms to make the content immediately start disappearing.
This solution provides a smoother accordion effect with fade-in and fade-out animations as the content becomes visible or hidden. Adjust the max-h-96 class and the 250ms delay as needed to fit your content and desired animation speed.
 */

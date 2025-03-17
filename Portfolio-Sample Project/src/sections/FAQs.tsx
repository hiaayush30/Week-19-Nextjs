import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  return <section id="faqs" className="container">
    <h2 className="text-4xl md:text-7xl lg:text-8xl mb-6 md:mt-12">FAQs</h2>
    <div>
      {faqs.map(faq => (
        <div key={faq.question} className="py-5 md:py-8 last:mb-5 lg:py-10 border-t last:border-b border-stone-400 border-dotted">
          <div className="flex items-center justify-between gap-4">
          <div className="text-2xl md:text-3xl">{faq.question}</div>
          <div className="inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          </div>
          </div>

        </div>
      ))}
    </div>
  </section>
};

export default FAQs;

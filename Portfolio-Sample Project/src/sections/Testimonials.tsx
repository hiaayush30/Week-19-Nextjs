import { FC } from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  return <section className="section">
    <h2 className="text-4xl flex flex-col">
      <span className="whitespace-nowrap overflow-hidden">Some nice words from my past clients</span>
      <span className="whitespace-nowrap overflow-hidden self-end text-red-orange-500">Some nice words from my past clients</span>
    </h2>
    <div className="container">
      <div className="mt-20">
        {testimonials.map(({ name, company, image, quote, role,imagePositionY }) => {
          return <div key={name}>
            <div className="aspect-square">
              <Image className="size-full object-cover" style={{
                objectPosition:`50% ${imagePositionY*100}%`
              }}
              src={image} alt={name} />
            </div>
            <blockquote>
              <div>{quote}</div>
              <cite>{name},{role} at {company}</cite>
            </blockquote>
          </div>
        })}
      </div>
      <div>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>

        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  </section>
};

export default Testimonials;

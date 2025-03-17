import Button from "@/components/Button";
import { FC } from "react";

const navItems = [
  {
    href: '#',
    label: 'Home'
  },
  {
    href: '#',
    label: 'Projects'
  },
  {
    href: '#',
    label: 'Testimonials'
  },
  {
    href: '#',
    label: 'Faqs'
  },
  {
    href: '#',
    label: 'Contact'
  }
]

const Footer: FC = () => {
  return <footer id="contact" className="bg-stone-900 text-white">
    <div className="container">
      <div className="section"></div>
      <div className="md:grid md:grid-cols-3 md:items-center">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="size-3 bg-green-400 rounded-full"></div>
            <span className="uppercase">One spot available for next month</span>
          </div>
          <h2 className="mt-8 text-4xl md:text-7xl lg:text-8xl font-extralight">Enough talk. Let's make something great together.</h2>
          <Button variant="secondary" iconAfter={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
          }
            className="mt-8"
          >info@alextaylow.com</Button>
        </div>
        <nav className="flex flex-col gap-8 mt-16 md:mt-0 uppercase md:col-span-1 md:items-end">
          {navItems.map(item => (
            <a href={item.href} key={item.label}>
              <Button variant="text" className="text-lg">{item.label}</Button>
            </a>
          ))}
        </nav>
      </div>
      <p className="py-16 text-white/30 text-sm">Copyright &copy; Alex Taylor &bull; All rights reserved</p>
    </div>
  </footer>
};

export default Footer;

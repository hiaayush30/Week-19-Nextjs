"use client"
import Button from "@/components/Button";
import { FC, MouseEvent, useEffect, useState } from "react";
import { motion, useAnimate } from 'motion/react'

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4
          }
        ],
        [
          topLineScope.current,
          {
            rotate: 45
          }
        ]
      ])
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4
          }
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45
          }
        ]
      ])
    }
    else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0
          }
        ],
        [
          topLineScope.current,
          {
            translateY: 0
          }
        ]
      ])
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0
          }
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0
          }
        ]
      ])
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      navAnimate([
        [
          navScope.current,
          {
            height: "100%"
          },
          {
            duration: 0.7
          }
        ]
      ])
    } else {
      navAnimate([
        [
          navScope.current,
          {
            height: 0
          },
          {
            duration:0.3
          }
        ]
      ])
    }
  }, [isOpen])

  const handleClickNavItem = (e:MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsOpen(false);
        // console.log(e.currentTarget.href)  //http://127.0.0.1:3000/#intro
        const url = new URL(e.currentTarget.href);
        const hash = url.hash;
        // console.log(hash); //#intro
        const target = document.querySelector(hash);
        target?.scrollIntoView({behavior:'smooth'});
  }

  return <header>
    <div ref={navScope} className="fixed top-0 left-0 h-0 overflow-hidden w-full bg-stone-900">
      <nav className="mt-20 flex flex-col">
        {navItems.map(item => (
          <a href={item.href} onClick={handleClickNavItem}
          className="text-stone-200 py-8 border-t last:border-b border-stone-800 group/nav-item relative">
            <div
            className="container !max-w-full group-hover/nav-item:pl-20 transition-all duration-500 flex items-center justify-between">
              <span className="text-3xl">{item.label}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
            <div className="absolute top-0 h-0 w-full bg-stone-700/30 group-hover/nav-item:h-full transition-all duration-500">
            </div>
          </a>
        ))}
      </nav>
    </div>
    <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-sm">
      <div className="container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          <div className="max-md:pl-2">
            <a href="/">
              <span className="text-xl font-bold uppercase text-white">Alex &nbsp; Taylor</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="fixed top-0 left-0 w-full">
      <div className="flex items-center gap-4 max-md:pr-2 justify-end mt-4 mr-2">
        <div onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer size-11 border border-stone-400 bg-stone-200 rounded-full flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.rect ref={topLineScope}
              style={{
                transformOrigin: '12px 8px',
              }}
              x="3" y="7" width="18" height="2" fill="currentColor" />
            <motion.rect ref={bottomLineScope}
              style={{
                transformOrigin: '12px 16px',
              }}
              x="3" y="15" width="18" height="2" fill="currentColor" />
          </svg>
        </div>
        <Button variant="primary" className="max-md:hidden">
          Contact Me
        </Button>
      </div>
    </div>
  </header>
};

export default Header;

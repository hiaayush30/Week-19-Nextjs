"use client"
import { FC, useEffect, useRef } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import SplitType from "split-type";
import { useAnimate, motion, stagger } from "motion/react";
import { useScroll, useTransform } from "framer-motion";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();  //titleScope is like useRef
  const scrollingDivRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target:scrollingDivRef,
    offset:['start end','end end'] 
    // tracking from start of the div reaching the end of the page to end of the div reaching
    // the end of the page (0 to 1 is the progress)
  });

  const potraintWidth = useTransform(scrollYProgress,[0,1],['100%','240%']);
  //image taking 5 cols in grid at 100% so to cover 12 grids it will need to be 240% 

  useEffect(() => {
    new SplitType(titleScope.current, {
      //breaks each line into span and each word in that line also in a span each line span has .line and word span has .word
      //see global.css
      types: 'lines,words',
      tagName: 'span'
    });

    titleAnimate(titleScope.current.querySelectorAll(".word"), {
      transform: 'translateY(0)'
    }, {
      duration: 0.5,
      delay: stagger(0.2)
    })
  }, [])

  return <section>
    {/* Initially behaves like a normal element. */}
    {/* When scrolling, once it reaches top: 0, it sticks to the top. */}
    {/* Stops sticking when its parent container ends. */}
    <div className="grid md:grid-cols-12 md:h-screen grid-items-stretch sticky top-0">
      <div className="md:col-span-7 flex flex-col justify-center">
        <div className="container !max-w-full">
          <motion.h1 ref={titleScope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl lg:text-7xl mt-40 md:mt-0 md:text-6xl"
          >Crafting digital experiences through code and design
          </motion.h1>
          <div className="flex flex-col mt-10 items-start gap-6 md:flex-row md:items-center">
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <Button variant="secondary"
                iconAfter={
                  <div className="overflow-hidden size-5">
                    <div className="h-5 w-10 flex group-hover/button:-translate-x-1/2 transition-transform duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.75"
                        stroke="currentColor"
                        className="size-5">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                        />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.75"
                        stroke="currentColor"
                        className="size-5">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                }>
                <span>View my work </span>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              <Button variant="text">Let&apos;s talk</Button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="md:col-span-5 relative">
        <motion.div className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:!min-w-full"
          style={{
            width:potraintWidth
          }}
        >
          <Image alt="heroImage" src={heroImage}
            className="size-full object-cover h-screen" />
        </motion.div>
      </div>
    </div>
    <div className="h-[200vh]" ref={scrollingDivRef}></div>
  </section>
};

export default Hero;

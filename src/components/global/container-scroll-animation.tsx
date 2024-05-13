'use client'; // This must be the first line if used
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
}

export const ContainerScroll = ({ titleComponent }: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scaleDimensions = () => (isMobile ? [0.7, 0.9] : [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div ref={containerRef} className="h-[80rem] flex items-center justify-center relative p-20">
      <div style={{ perspective: '1000px' }} className="py-40 w-full relative">
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} />
      </div>
    </div>
  );
};

interface HeaderProps {
  translate: any; // Define a more specific type if possible
  titleComponent: React.ReactNode;
}

export const Header = ({ translate, titleComponent }: HeaderProps) => (
  <motion.div style={{ translateY: translate }} className="max-w-5xl mx-auto text-center">
    {titleComponent}
  </motion.div>
);

interface CardProps {
  rotate: any; // Define a more specific type if possible
  scale: any; // Define a more specific type if possible
  translate: any; // Define a more specific type if possible
}

export const Card = ({ rotate, scale, translate }: CardProps) => (
  <motion.div
    style={{
      rotateX: rotate, // Rotate in X-axis
      scale,
      boxShadow:
        '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
    }}
    className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full p-6 bg-[#222222] rounded-[30px] shadow-2xl"
  >
    <div className="bg-gray-100 h-full w-full rounded-2xl gap-4 overflow-hidden p-4 transition-all">
      <Image src="/temp-banner.png" fill alt="bannerImage" className="object-cover border-8 rounded-2xl" />
    </div>
  </motion.div>
);

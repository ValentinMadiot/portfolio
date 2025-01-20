import { socialMedia } from '@/data';
import { img } from 'framer-motion/client';
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex pb-10 md:flex-row flex-col justify-between items-center">
      <article className="flex items-center md:gap-3 gap-6">
        {socialMedia.map((info) => (
          <a
            key={info.id}
            href={info.link}
            className="hover:bg-blue mt-10 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
            <img src={info.img} alt="icons" width={20} height={20} />
          </a>
        ))}
      </article>
      <p className="mt-10 md:text-base text-sm md:font-normal font-light">
        Copyright © 2025 Valentin Madiot
      </p>
    </footer>
  );
}

export default Footer
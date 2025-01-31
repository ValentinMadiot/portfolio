import React from 'react'
import Button from './ui/Button'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';
import { DotBackgroundDemo } from './ui/DotBackground';

const Hero = () => {
  return (
    <div className="h-screen m-auto flex flex-col items-center justify-center relative p-1 sm:p-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="lightblue"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <DotBackgroundDemo />

      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-sm text-center">
            Créateur d’Interfaces Web Uniques{" "}
          </h2>
          <TextGenerateEffect
            className="text-center text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
            words="Concrétisez vos idées avec des solutions web immersives"
          />
          <p className="text-lightblue-100 text-center tracking-wide md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl max-w-xl sm:max-w-2xl lg:max-w-3xl">
            Hi ! Je m'appelle Valentin, développeur front-end passionné, spécialisé en React, Next.js et WordPress.
          </p>
          <a href="#contact">
            <Button
              title="Contactez-moi"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
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
        </div>
      </div>
    </div>
  );
}

export default Hero
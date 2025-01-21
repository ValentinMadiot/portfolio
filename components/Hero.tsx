import React from 'react'
import Button from './ui/Button'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Hero = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative">
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
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.025] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xl text-center max-w-80">
            Valentin Madiot
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Développeur Web"
          />
          <p className="text-lightblue-100 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Expert React JS, Next.js et WordPress, je crée des sites web depuis
            plus de deux ans. Passionné par l'apprentissage continu, je
            développe également des projets personnels pour enrichir mes
            connaissances. Ensemble, donnons vie à vos idées!
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
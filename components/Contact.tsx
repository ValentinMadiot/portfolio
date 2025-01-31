import React from 'react'
import MagicButton from './ui/Button';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Contact = () => {
  return (
    <section className="w-full p-20 px-3 sm:px-20" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ensemble, donnons vie à <span className="text-blue"> vos idées!</span>
        </h1>
        <p className="text-blue-100 md:mt-10 m-5 text-center">
          Discutons dès maintenant de la manière dont je peux transformer vos idées en solutions concrètes et innovantes. 🚀
        </p>
        <a href="mailto:valentin.madiot@gmail.com">
          <MagicButton
            title="Entrons en contact!"
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
    </section>
  );
}

export default Contact
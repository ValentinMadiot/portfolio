import React from 'react'
import MagicButton from './ui/Button';
import { FaLocationArrow } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Contactez
          <span className="text-blue"> moi</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Envoyez-moi un message et je vous répondrai dans les plus brefs
          délais.
        </p>
        <a href="mailto:valentin.madiot@gmail.com">
          <MagicButton
            title="Entrons en contact!"
            icon={<FaLocationArrow/>}
            position='right'          
          />
        </a>
      </div>
    </section>
  );
}

export default Contact
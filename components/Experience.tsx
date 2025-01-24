import { workExperience } from '@/data';
import React from 'react'
import { Button } from './ui/MovingBorders';

const Experience = () => {
  return (
    <section className="sm:p-20 py-20 px-3" id="experiences">
      <h1 className="heading">
        Mes
        <span className="text-blue"> Experiences</span>
      </h1>

      <div className="w-full max-w-4xl mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10 mx-auto">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800">
            <div className=" flex lg:flex-row flex-col lg:item-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' /> */}
              <div className="">
                <h1 className="text-start text-lg lg:text-3xl md:text-2xl text-blue font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-base mt-1 text-white-100">
                  {card.date}
                </p>
                <p className="text-start text-base mt-3 text-lightblue-200 font-medium">
                  <span className="">{card.company}</span>
                  &nbsp;&nbsp;—&nbsp;&nbsp;{card.location}
                </p>
                <p className="text-start text-base text-white-100 mt-3 font-light">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
}

export default Experience
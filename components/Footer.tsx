import { socialMedia } from '@/data';
import React from 'react'
// import PolitiqueConfidentialite from "./Confidentiality";

const Footer = () => {
  return (
    <footer className="flex p-10 md:flex-row flex-col justify-between items-center">
      <p className="text-white-200 md:text-base text-sm md:font-normal font-light">
        Copyright © 2025 Valentin Madiot
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-5 md:mt-0 items-center">
        <a
          href="/confidentialite"
          aria-label="Politique de confidentialité"
          className="dark:hover:text-blue text-white-200 md:text-base text-sm md:font-normal font-light items-center">
          Politique de confidentialité
        </a>
        <a
          href="/mentionslegales"
          aria-label="Mentions légales"
          className="dark:hover:text-blue text-white-200 md:text-base text-sm md:font-normal font-light">
          Mentions légales
        </a>
      </div>
    </footer>
  );
}

export default Footer
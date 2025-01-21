import { socialMedia } from '@/data';
import React from 'react'
// import PolitiqueConfidentialite from "./Confidentiality";

const Footer = () => {
  return (
    <footer className="flex pb-10 md:flex-row flex-col justify-between items-center">
      <p className="mt-10 md:text-base text-sm md:font-normal font-light">
        Copyright © 2025 Valentin Madiot
      </p>
      <article className="flex gap-4">
        <a
          href="/confidentialite" aria-label='Politique de confidentialité'
          className="dark:hover:text-blue mt-10 md:text-base text-sm md:font-normal font-light">
          Politique de confidentialité
        </a>
        <a
          href="/mentionslegales" aria-label='Mentions légales'
          className="dark:hover:text-blue mt-10 md:text-base text-sm md:font-normal font-light">
          Mentions légales
        </a>
      </article>
    </footer>
  );
}

export default Footer
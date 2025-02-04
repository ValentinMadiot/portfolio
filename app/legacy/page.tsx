"use client";

import BackButton from "@/components/BackButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";

const Legacy = () => {

  return (
    <>
      <div className="pb-20 pt-8 fade-in">
        <div className="">
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

        <div className="flex flex-col gap-10 mt-32 relative lg:max-w-4xl mx-auto">
          <BackButton />
          <div className="flex flex-col gap-6 pb-8 sm:pb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Mentions Légales
            </h2>
            <p className="flex gap-1 text-lg">
              📅 Date de mise à jour : 01 janvier 2025
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Informations Générales
            </h3>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;Raison sociale : VALENTIN
                MADIOT
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;Forme juridique :
                Entreprise individuelle (EI)
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;Siège social : 3 ter rue
                Chevreul, 49630 Mazé, France
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;Numéro SIREN : 922 188 446
              </li>
            </ul>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Contact
            </h3>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;📧&nbsp;&nbsp;Email :
                valentin.madiot@gmail.com
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;📞&nbsp;&nbsp;Téléphone : +33 6 77 50 55 31
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;🌐&nbsp;&nbsp;Site web : valentinmadiot.com
              </li>
            </ul>

            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Hébergeur du Site
            </h3>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;Nom de l’hébergeur :
                Hostinger
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;Adresse : UAB. Jonavos g.
                60C, 44192. Vilnius, Lituanie
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;Téléphone : +370 645 03378
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;Site web :
                domains@hostinger.com.
              </li>
            </ul>

            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Propriété Intellectuelle
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              L’ensemble du contenu présent sur ce site (textes, images, logos,
              graphiques, etc.) est la propriété exclusive de M. Valentin
              Madiot, sauf indication contraire.
            </p>
            <p className="flex flex-col gap-6 text-lg">
              &nbsp;&nbsp;&nbsp;❌&nbsp;&nbsp; Toute reproduction, modification,
              distribution ou exploitation, totale ou partielle, sans
              autorisation écrite préalable est strictement interdite et pourra
              faire l’objet de poursuites judiciaires.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Responsabilités
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              Nous nous efforçons de garantir l’exactitude et la mise à jour des
              informations disponibles sur ce site. Toutefois, nous ne pouvons
              être tenus responsables des éventuelles erreurs, interruptions ou
              dysfonctionnements qui pourraient survenir lors de son
              utilisation.
            </p>
            <p className="flex flex-col gap-6 text-lg">
              &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;Liens externes : Ce site peut
              contenir des liens vers des plateformes tierces. Nous ne
              contrôlons pas leur contenu et déclinons toute responsabilité
              quant aux informations, services ou pratiques qu’elles proposent.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Juridiction & Droit Applicable
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              Ce site est administré par M. Valentin Madiot, basé en France. En
              naviguant sur ce site, vous acceptez de vous conformer aux lois
              françaises en vigueur.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Contact
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              Pour toute question ou demande, n’hésitez pas à nous contacter :
            </p>
            <ul>
              <li className="flex gap-1 text-lg mb-5">
                &nbsp;&nbsp;&nbsp;📧 Email : valentin.madiot@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legacy;

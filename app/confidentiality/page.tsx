"use client";

import BackButton from "@/components/BackButton";
import { Spotlight } from "@/components/ui/Spotlight";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";

const Confidentiality = () => {

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
              Politique de Confidentialité
            </h2>
            <p className="flex gap-1 text-lg">
              📅 Date d’entrée en vigueur : 01 janvier 2025
            </p>
            <p className="flex flex-col gap-6 text-lg">
              Votre confidentialité est essentielle pour nous. Cette politique
              de confidentialité détaille la manière dont nous collectons,
              utilisons, protégeons et traitons vos données lorsque vous visitez
              notre site web.
            </p>
            <p className="flex flex-col gap-6 text-lg">
              Nous vous encourageons à lire attentivement cette politique afin
              de comprendre nos pratiques en matière de protection des données
              personnelles.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Données collectées
            </h3>
            <h4 className="text-xl sm:text-2xl font-bold text-lightblue-200">
              1. Informations personnelles
            </h4>
            <p className="flex flex-col gap-6 text-lg">
              Nous ne collectons aucune donnée personnelle sauf si vous
              choisissez de nous contacter. Dans ce cas, nous pouvons recueillir
              :
            </p>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;Votre adresse email.
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;Toute information que vous
                incluez dans votre message.
              </li>
            </ul>
            <h4 className="text-xl sm:text-2xl font-bold text-lightblue-200">
              2. Informations non personnelles
            </h4>
            <p className="flex flex-col gap-6 text-lg">
              Nous ne collectons pas automatiquement d’informations comme les
              adresses IP, les données de navigation ou autres statistiques
              d’utilisation.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Utilisation de vos informations
            </h3>
            <p>
              Si vous nous contactez, nous utilisons vos informations uniquement
              pour :
            </p>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;Répondre à vos demandes.
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;Vous fournir une assistance ou
                des informations pertinentes.
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;➤&nbsp;&nbsp;&nbsp;Nous ne partageons pas vos
                données avec des tiers et ne les utilisons pas à des fins
                commerciales ou marketing.
              </li>
            </ul>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Partage des données
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              &nbsp;&nbsp;&nbsp;❌&nbsp;&nbsp;Aucune vente, location ou
              transmission de vos informations à des tiers. Vos données restent
              strictement confidentielles et ne sont utilisées que pour
              faciliter notre communication avec vous.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Cookies et technologies de suivi
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              Nous n’utilisons pas de cookies, traceurs ou autres technologies
              de suivi sur notre site web.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Durée de conservation des données
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              Nous conservons vos emails uniquement le temps nécessaire pour
              répondre à vos demandes. Une fois traitées, vos informations sont
              supprimées de manière sécurisée.
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Vos droits
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              Vous avez le droit de :
            </p>
            <ul>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;Demander l’accès aux
                informations que vous nous avez fournies.
              </li>
              <li className="flex flex-col gap-6 text-lg mb-2">
                &nbsp;&nbsp;&nbsp;✔️&nbsp;&nbsp;Exiger la suppression de vos
                données de nos fichiers.
              </li>
            </ul>
            <p className="flex flex-col gap-6 text-lg">
              Pour toute demande relative à vos droits, contactez-nous via
              l’email ci-dessous.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Modifications de cette politique
            </h3>
            <p className="flex flex-col gap-6 text-lg">
              Cette politique de confidentialité peut être mise à jour
              périodiquement. Toute modification sera indiquée sur cette page
              avec la date de révision.
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-lightblue-200">
              Contact
            </h3>

            <p className="flex flex-col gap-6 text-lg">
              Si vous avez des questions concernant cette politique ou la
              gestion de vos données personnelles, vous pouvez nous contacter à
              :
            </p>
            <p className="text-lg mb-5">
              &nbsp;&nbsp;&nbsp;📧 Email : valentin.madiot@gmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confidentiality;

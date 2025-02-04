export type Project = {
  id: number;
  title: string;
  slug: string;
  des: string;
  img: string;
  iconLists: string[];
  linkDemo: string;
  linkGithub: string;
  paragraphs: string[];
  // paragraphContexte: string[];
  // paragraphSolution: string[];
  // paragraphResultat: string[];
  // paragraphTechno: string[];
  features: string[];
  isClientProject: boolean;
};

export const findProjectBySlug = (
  array: Project[],
  slug: string | string[] | undefined
): Project | undefined => {
  return array.find((arrayItem) => arrayItem.slug === slug);
};

// Fonction pour mettre la première lettre en majuscule
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

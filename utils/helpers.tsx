export type Project = {
  id: number;
  key: string;
  slug: string;
  img: string;
  iconLists: string[];
  linkDemo: string;
  linkGithub: string;
  isGridThreeCols?: boolean;
  isClientProject: boolean;
};

// Recherche un élément par son slug dans un tableau générique
export const findProjectBySlug = <T extends { slug: string }>(
  array: T[],
  slug: string | string[] | undefined
): T | undefined => {
  return array.find((item) => item.slug === slug);
};

// Fonction utilitaire pour mettre la première lettre en majuscule
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

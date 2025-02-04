/* eslint-disable @next/next/no-img-element */
"use client";

type BadgesProps = {
  iconLists: string[];
};

const Badges: React.FC<BadgesProps> = ({ iconLists }) => {
  return (
    <div className="flex items-center">
      {iconLists.map((icon, index) => (
        <div
          key={icon}
          className="border border-white/[0.2] rounded-full bg-black w-11 h-11 flex items-center justify-center cursor-pointer transition-transform duration-150 transform"
          style={{
            transform: `translateX(-${5 * index * 2}px)`,
          }}
          onMouseEnter={(e) => {
            e.stopPropagation(); // Empêche la propagation de l'événement
            (
              e.currentTarget as HTMLDivElement
            ).style.transform = `translateX(-${5 * index * 2}px) scale(1.2)`;
          }}
          onMouseLeave={(e) => {
            e.stopPropagation(); // Empêche la propagation de l'événement
            (
              e.currentTarget as HTMLDivElement
            ).style.transform = `translateX(-${5 * index * 2}px) scale(1)`;
          }}
        >
          <img src={icon} alt={`icon-${index}`} className="p-2" />
        </div>
      ))}
    </div>
  );
};

export default Badges;

import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineSolution,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const socialMedia = [
  {
    id: 1,
    icon: <AiOutlineGithub />,
    // img: "/icons/github.svg",
    link: "https://github.com/ValentinMadiot",
  },
  {
    id: 2,
    icon: <AiFillLinkedin />,
    // img: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/valentinmadiot/",
  },
  {
    id: 3,
    icon: <AiOutlineWhatsApp />,
    // img: "/icons/whatsapp.svg",
    link: "https://wa.me/33677505531",
  },
  {
    id: 4,
    icon: <AiOutlineSolution />,
    // img: "/icons/resume.svg",
    link: "https://cvdesignr.com/p/677c0a3bc8d51?hl=en_GB",
  },
];

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center md:gap-3 gap-6">
      {socialMedia.map((profile) => (
        <a
          href={profile.link}
          target="_blank"
          key={profile.id}
          className="hover:bg-blue w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
          <span className="text-xl">{profile.icon}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;

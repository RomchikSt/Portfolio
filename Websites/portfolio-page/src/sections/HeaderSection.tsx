import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const ReactIcon = styled.div`
  svg {
    fill: #f0fdf4;
    transition: all 0.3s ease-in-out;
    transform: translateY(0);
  }
  svg:hover {
    fill: #0aff9d;
    transform: translateY(-5px);
  }
`;

function HeaderSection({ activeSection }: { activeSection: string }) {
  const headerListItems = [
    {
      id: "home",
      text: "Home",
      icon: <FaHome fill={"#0aff9d"} size={"1.4rem"} />,
    },
    {
      id: "about",
      text: "About",
      icon: <BsFillInfoCircleFill fill={"#0aff9d"} size={"1.4rem"} />,
    },
    {
      id: "portfolio",
      text: "Portfolio",
      icon: <FaBriefcase fill={"#0aff9d"} size={"1.4rem"} />,
    },
    {
      id: "contact",
      text: "Contact",
      icon: <IoIosMail fill={"#0aff9d"} size={"1.8rem"} />,
    },
  ];

  const contactInfo = [
    {
      id: "LinkedIn",
      link: "https://www.linkedin.com/in/romchik-stakhiv/",
      icon: <FaLinkedin size={"1.4rem"} />,
    },
    {
      id: "GitHub",
      link: "https://github.com/RomchikSt",
      icon: <FaGithub size={"1.4rem"} />,
    },
    {
      id: "Instagram",
      link: "https://www.instagram.com/romchik_sta/",
      icon: <FaInstagram size={"1.4rem"} />,
    },
  ];

  return (
    <motion.div
      className="hidden w-32 fixed min-h-screen flex-row justify-center items-center border-r border-custom-green 1024px:flex"
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <ul className="text-center relative ">
        {headerListItems.map((item, i) => (
          <motion.li
            key={item.id}
            className={`pointer-events-auto p-3 ${
              i !== headerListItems.length - 1 ? "border-b" : ""
            }`}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to={item.id} smooth duration={900}>
              <motion.button
                className="flex items-center justify-center w-16 h-6 relative"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i / 10 }}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  animate={{
                    opacity: activeSection === `${item.id}` ? 1 : 0,
                    scale: activeSection === `${item.id}` ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={false}
                  whileHover={{
                    color: "#0aff9d",
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  animate={{
                    opacity: activeSection === `${item.id}` ? 0 : 1,
                    scale: activeSection === `${item.id}` ? 0.5 : 1,
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {item.text}
                </motion.div>
              </motion.button>
            </Link>
          </motion.li>
        ))}
      </ul>
      <motion.div
        className="absolute flex justify-around bottom-8 w-full p-4"
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        {contactInfo.map((info) => (
          <a key={info.id} href={info.link} target="/">
            <button>
              <ReactIcon>{info.icon}</ReactIcon>
            </button>
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default HeaderSection;

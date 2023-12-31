import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import styled from "styled-components";

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

function ContactSection() {
  const [refHeader, inViewHeader] = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });
  const [refDesc, inViewDesc] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const headerAnimation = {
    initial: { y: "50%", opacity: 0 },
    animate: inViewHeader ? { y: 0, opacity: 1 } : {},
  };

  const descAnimation = {
    initial: { y: "20%", opacity: 0 },
    animate: inViewDesc ? { y: 0, opacity: 1 } : {},
  };

  const contactInfo = [
    {
      id: "LinkedIn",
      link: "https://www.linkedin.com/in/romchik-stakhiv/",
      icon: <FaLinkedin size={"2rem"} />,
    },
    {
      id: "GitHub",
      link: "https://github.com/RomchikSt",
      icon: <FaGithub size={"2rem"} />,
    },
    {
      id: "Instagram",
      link: "https://www.instagram.com/romchik_sta/",
      icon: <FaInstagram size={"2rem"} />,
    },
  ];

  return (
    <div className="w-full h-screen pt-14 flex flex-col justify-between items-center 2100px:h-[60rem]">
      <div className="text-center flex flex-col items-center w-5/12">
        <motion.h2
          className="inline-block text-5xl font-bold py-4 border-b-4 border-custom-green"
          ref={refHeader}
          {...headerAnimation}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="mt-4 text-xl "
          ref={refHeader}
          {...headerAnimation}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Feel free to Contact with me
        </motion.p>
      </div>
      <div className="flex flex-col items-center">
        <motion.p
          className="text-xl w-8/12 1300px:w-5/12 text-center"
          ref={refDesc}
          {...descAnimation}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Feel free to contact me – I&apos;m always open for a chat! Send me an
          email, or find me on LinkedIn or Instagram if that&apos;s more
          convenient for you. If you have a question, want to collaborate, or
          have an interesting offer – don&apos;t hesitate to reach out!
        </motion.p>
        <motion.button
          className="pointer-events-auto my-14 w-44 h-12 bg-transparent border rounded-xl border-custom-green ml-1 flex items-center justify-center"
          ref={refDesc}
          initial={{ y: "50%", opacity: 0 }}
          animate={
            inViewDesc
              ? { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.35 } }
              : {}
          }
          whileHover={{
            backgroundColor: "#0aff9d",
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          transition={{
            backgroundColor: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
        >
          <motion.a
            href="mailto:roma.stakhiv@gmail.com"
            className="m-0 absolute top-0 left-0 w-full h-full text-center flex items-center justify-center"
            initial={{ color: "#FFFFFF" }}
            whileHover={{ color: "#111111" }}
          >
            Say Hello!
          </motion.a>
        </motion.button>
        <motion.div
          className="flex gap-6 flex-col 1024px:hidden"
          initial={{ y: "50%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div>
            <p className="text-center font-semibold text-3xl">Social:</p>
          </div>
          <div className="flex justify-around w-[10rem]">
            {contactInfo.map((info) => (
              <a key={info.id} href={info.link} target="/">
                <button>
                  <ReactIcon>{info.icon}</ReactIcon>
                </button>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <motion.p
        className="pb-8 text-sm"
        initial={{ y: "50%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Designed & Built by Roma Stakhiv
      </motion.p>
    </div>
  );
}

export default ContactSection;

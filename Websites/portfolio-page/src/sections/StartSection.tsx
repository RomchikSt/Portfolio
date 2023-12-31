import ScrollArrow from "@/ui/ScrollArrow";
import ScrollMouse from "@/ui/ScrollMouse";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function StartSection() {
  const [imgWidth, setImgWidth] = useState<number>(500);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1300) setImgWidth(430);
      if (window.innerWidth > 1300) setImgWidth(500);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const introductionText = [
    {
      text: "Hi, my name is",
      className: "text-xl text-custom-green pb-1 pl-1",
    },
    {
      text: "Roma Stakhiv",
      className: "text-7xl font-bold",
    },
    {
      text: "and I'm",
      className: "text-xl text-custom-green pb-1 pl-1 mt-4",
    },
    {
      text: "Web Developer",
      className: "text-5xl font-bold pl-0.5",
    },
  ];

  return (
    <div
      className="flex gap-2 justify-center h-full
    1300px:gap-3 1200px:justify-around  1400px:m-auto "
    >
      <div className="min-h-screen flex flex-col justify-center">
        {introductionText.map((item, i) => (
          <motion.p
            key={i}
            className={item.className}
            initial={{ y: "70%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.2 + i / 10 }}
          >
            {item.text}
          </motion.p>
        ))}
        <div className="flex justify-start mt-14">
          <Link to="portfolio" smooth duration={500}>
            <motion.button
              className="pointer-events-auto w-44 h-12 bg-transparent border rounded-xl border-custom-green ml-1 flex items-center justify-center "
              initial={{ y: "70%", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.7 },
              }}
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
              <motion.p
                className="m-0 w-full h-full text-center flex items-center justify-center"
                initial={{ color: "#FFFFFF" }}
                whileHover={{ color: "#111111" }}
              >
                My Projects
              </motion.p>
            </motion.button>
          </Link>
        </div>
        <div>
          <ScrollMouse />
          <ScrollArrow />
        </div>
      </div>
      <motion.div
        className="hidden items-center 1200px:flex"
        initial={{ x: "20%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <Image
          src="/img/1111.jpg"
          alt="Roma Stakhiv on the photo"
          width={imgWidth}
          height={400}
          priority
        />
      </motion.div>
    </div>
  );
}

export default StartSection;

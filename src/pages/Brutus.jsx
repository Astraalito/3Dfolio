import { Navbar } from "./../components";
import NavbarSecondary from "../components/NavbarSecondary";

import { motion } from "framer-motion";

import { brutusInfo } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Brutus = () => {
  return (
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <NavbarSecondary />
        </div>
        <section className="sm:px-16 px-6 sm:py-20 py-20 max-w-7xl mx-auto relative z-0">
        <motion.div variants={textVariant()}>
            <div className="relative w-full">
                <img src={brutusInfo.imgBg} className="w-full h-full object-cover rounded-2xl"/>
            </div>
        </motion.div>

        <motion.div variants={textVariant()}>
            <div className="mt-7">
                <p className='text-white text-[24px]'> 
                    <span className="font-bold">Titre : </span>{brutusInfo.title}
                </p>
                <p className='text-white text-[24px]'> 
                    <span className="font-bold">Type : </span>{brutusInfo.type}
                </p>
                <p className='text-white text-[24px]'> 
                    <span className="font-bold">Lien vers le site : </span>
                    <a href={brutusInfo.links} target="_blank">
                        <span className='text-[#FFD580] mt-4 font-bold text-[18px]'>Old-Games.com</span>
                    </a>
                </p>
                <p className='text-white text-[18px] mt-14'> 
                    {brutusInfo.nutshell}
                </p>
            </div>
        </motion.div>
        
        <div className="mt-14">
            {brutusInfo.description.map((description, index) => (
                <motion.div
                    key={index}
                    variants={fadeIn("", "", 0.1, 1)}
                    className={`mt-5 flex flex-col sm:flex-row ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"} items-center sm:items-start gap-4`}
                >
                    {/* Bloc image (en haut sur mobile, à droite/gauche sur desktop) */}
                    <div className="w-full sm:w-1/4 flex justify-center sm:justify-end">
                    <img src={description.image} className="object-cover w-full rounded-lg" />
                    </div>

                    {/* Bloc texte (en dessous sur mobile, à gauche/droite sur desktop) */}
                    <div className="w-full sm:w-3/4 text-center sm:text-left">
                        <h3 className="text-white text-[24px]">{description.title}</h3>
                        <p className="mt-3 text-secondary text-[17px] leading-[30px]">
                            {description.text}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="text-center mt-20">
          <h2 className={`${styles.sectionHeadText}`}>Les règles en vidéo.</h2>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QlhgCeOLIvE?si=6RdB9knj0NRf-XWl"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        
    </section>
      </div>
  );
}

export default Brutus;

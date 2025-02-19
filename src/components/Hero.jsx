import { motion } from "framer-motion";

import { styles } from "../styles";
import { SmallWorldCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FFD580]' />
          <div className='w-1 sm:h-80 h-40 yellow-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey ! ici <span className='text-[#FFD580]'>Nico</span>
          </h1>
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Le vent se lève… <br className='sm:block hidden' />
            il faut créer avec <br className='sm:block hidden' />
            passion !
          </p>
        </div>
      </div>

      <SmallWorldCanvas />

      <div className='absolute sm:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#f8e8c1] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#f8e8c1] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

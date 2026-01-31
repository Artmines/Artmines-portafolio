import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f97316]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className='accent-text-gradient'>Artmines</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build things that <span className='accent-text-gradient'>work</span>,{" "}
            <span className='accent-text-gradient'>scale</span>, and{" "}
            <span className='accent-text-gradient'>stand out</span>.
            <br className='sm:block hidden' />
            Full stack apps. Automation. Game frameworks.
            <br className='sm:block hidden' />
            Currently shaping the{" "}
            <span style={{ color: "#FFD600" }}>FiveM</span> &{" "}
            <span style={{ color: "#FF2D2D" }}>RedM</span> landscape.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#f97316] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#f97316] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};


export default Hero

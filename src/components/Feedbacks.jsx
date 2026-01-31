import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'

const FeedBackCard = ({ index, testimonial, name, designation, company, image, signedFile }) => (
    <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full border border-white/5 hover:border-[#f97316]/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] transition-all duration-300' >
      <p className='font-black text-[48px] accent-text-gradient'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18x]'>{testimonial}</p>
        {signedFile && signedFile !== "#" && (<>
        <br />
        <a href={signedFile} className='text-[#f97316] hover:text-[#fb923c] hover:underline transition-all' target='_blank'>Full Signed Recommendation</a>
        </>)}
        <div className='mt-7 flex justify-between items-center gap-1'>

            <div className='flex-1 flex flex-col'>

              <p className='text-white font-medium text-[16px]'>
                <span className='blue-text-gradient'>@</span> {name}
              </p>
              <p className='mt-1 text-[#71717a] text-[12px]'>
              {designation} of {company}
              </p>
            </div>
        </div>
      </div>


    </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
    <div className={`${styles.padding}
    bg-tertiary rounded-2xl min-h-[300px]
    `}>
      <motion.div className={`${styles.padding}
      bg-tertiary rounded-2xl min-h-[300px]`}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Recommendations.</h2>
      </motion.div>
    </div>
    <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {testimonials.map((testimonial, index) => (
        <FeedBackCard
          key={testimonial.name}
          index={index}
          {...testimonial}
        />
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, '');

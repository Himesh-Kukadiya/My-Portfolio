import { Tilt } from "react-tilt";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../HOC";
import PropType from "prop-types";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'
    >
      <div 
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
  )
}

ServiceCard.propTypes = {
  index: PropType.number.isRequired,
  title: PropType.string.isRequired,
  icon: PropType.string.isRequired,
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>About Me</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-2 text-secondary text-[17px] max-w-7xl text-justify leading-[30px]'
      >
    {"I'm a skilled software developer with expertise in a wide range of technologies, including React, Node.js, Express, MongoDB, PHP, C#.NET, ASP.NET, JavaScript, Java, CSS, HTML, Bootstrap and Tailwind CSS. I specialize in creating visually appealing, responsive web applications. With a strong portfolio of diverse projects, I am eager to bring my skills and creativity to a dynamic development team as a fresher. Let's collaborate to bring your web projects to life using modern technologies and innovative design!"}</motion.p>

      <div className='mt-12 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about")
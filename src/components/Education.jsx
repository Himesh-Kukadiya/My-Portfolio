import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../HOC";
// import { textVariant } from "../utils/motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import PropTypes from "prop-types"


const EducationCard = ({ edu }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={edu.date}
    iconStyle={{ background: edu.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={edu.icon}
          alt={edu.company_name}
          className={
            // eslint-disable-next-line no-constant-condition
            edu.company_name === 'HighSense Infotech' || 'Solera'
            ? "w-[100%] h-[100%] object-contain border rounded-full"
            : "w-[20%] h-[20%] object-contain"
          }
        />
      </div>
    }
  >
    <div>
        <h3 className='text-white text-[24px] font-bold'>{edu.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {edu.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {edu.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] text-justify pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
  </VerticalTimelineElement>
);
EducationCard.propTypes = {
  edu: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
    icon: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
  }).isRequired,
}
const Education = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>My Education & Resume.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} />
          ))}
        </VerticalTimeline>
      </div>
      <center className="mt-5">
        <a href="https://drive.google.com/file/d/1mdbtvxPOzRAUJBfDRqb24lDfN6gnSS3j/view?usp=drive_link"
        className="text-whitefont-bold py-2 px-4 rounded " 
        style={{backgroundColor: "#1d1836"}}
        target="blank" >Download My Resume</a>
      </center>
    </>
  );
};

export default SectionWrapper(Education, "education");

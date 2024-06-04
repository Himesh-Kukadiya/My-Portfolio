import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../HOC";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import PropType from "prop-types"
import "./project.css"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  // project_url
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] cursor-grab pro__img" onClick={() => {
                // try {
                //     window.open(project_url, '_blank');
                // } catch (error) {
                //     console.error('Failed to open link:', error);
                // }
            }}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover roundedd-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                try {
                    window.open(source_code_link, '_blank');
                } catch (error) {
                    console.error('Failed to open link:', error);
                }
            }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
        <h3 className="text-white text-[24px] font-bold">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] text-justify">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
ProjectCard.propTypes ={
  index: PropType.number.isRequired,
  name: PropType.string.isRequired,
  description: PropType.string.isRequired,
  tags: PropType.array.isRequired,
  image: PropType.string.isRequired,
  source_code_link: PropType.string.isRequired,
}
const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] text-justify max-w-7xl leadding-[30px]"
        >
          The projects below exemplify my skills and expertise by showcasing real-world applications of my work. Each project is briefly described, providing links to their code repositories and live demos, demonstrating my proficiency in problem-solving, versatility with various technologies, and effective project management.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
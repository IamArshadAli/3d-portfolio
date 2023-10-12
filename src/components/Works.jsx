import { Tilt } from "react-tilt";
// import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  project_link,
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
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full aspect-video object-cover rounded-2xl"
          />

          {source_code_link && <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>}
        </div>
        <div className="mt-5">
          {project_link ? (
            <a
              href={project_link}
              target="_blank"
              rel="noreferrer"
              className="hover:underline hover:underline-offset-4 flex justify-between items-center"
            >
              <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="18"
                height="18"
              >
                <path
                  fill="white"
                  d="M20,11v8c0,2.757-2.243,5-5,5H5c-2.757,0-5-2.243-5-5V9c0-2.757,2.243-5,5-5H13c.552,0,1,.448,1,1s-.448,1-1,1H5c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3H15c1.654,0,3-1.346,3-3V11c0-.552,.448-1,1-1s1,.448,1,1ZM21,0h-7c-.552,0-1,.448-1,1s.448,1,1,1h6.586L8.293,14.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293L22,3.414v6.586c0,.552,.448,1,1,1s1-.448,1-1V3c0-1.654-1.346-3-3-3Z"
                />
              </svg>
            </a>
          ) : (
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
          )}
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[12px] bg-black-200 px-2 py-1 rounded-lg`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to live demos. It reflects my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {/* <div className="flex flex-1 justify-center items-center mt-5">
          <NavLink to='projects' className="w-fit px-4 py-2 rounded-lg shadow-md bg-tertiary border-2">
            See All Projects &gt;
          </NavLink>
        </div> */}
    </>
  );
};

export default SectionWrapper(Works, "projects");

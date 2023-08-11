import ProjectCard from "../components/ProjectCard";
import { getProjects } from "./api/projects";
import styles from "../styles/ProjectsPage.module.css";

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h3>Open Source Projects</h3>
      <br />
      <center>
        <h4></h4>
      </center>
      <hr />
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <br />
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: { title: "Projects", projects },
  };
}

export default ProjectsPage;

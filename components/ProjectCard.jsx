import Image from "next/image";
import styles from "../styles/ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const primaryLink =
    project.demo ||
    project.source_code ||
    project.website ||
    (project.links && project.links[0] && project.links[0].url) ||
    null;

  const openPrimary = (e) => {
    if (!primaryLink) return;
    window.open(primaryLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.card} onClick={openPrimary} role={primaryLink ? "button" : undefined} tabIndex={0}>
      <div className={styles.thumb}>
        <Image src={project.image} height={300} width={600} alt={project.name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags &&
            project.tags.map((tag) => (
              <span key={tag} className={tag === "C++" ? "cpp" : tag}>
                {tag}
              </span>
            ))}
        </div>
        <div className={styles.cta}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
              onClick={(e) => e.stopPropagation()}
            >
              Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline}
              onClick={(e) => e.stopPropagation()}
            >
              Demo
            </a>
          )}
          {project.links &&
            project.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.underline}
                onClick={(e) => e.stopPropagation()}
              >
                {l.label}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

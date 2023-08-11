import ErrorIcon from "./icons/ErrorIcon";
import WarningIcon from "./icons/WarningIcon";
import BellIcon from "./icons/BellIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import SourceControlIcon from "./icons/SourceControlIcon";
import styles from "../styles/Bottombar.module.css";

const Bottombar = () => {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.container}>
        <a
          href="https://github.com/DuckySoLucky/duckysolucky.github.io"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.section}
        >
          <SourceControlIcon className={styles.icon} />
          <p>main</p>
        </a>
        <div className={styles.section}>
          <ErrorIcon className={styles.icon} />
          <p className={styles.errorText}>69</p>&nbsp;&nbsp;
          <WarningIcon className={styles.icon} />
          <p>420</p>
        </div>
      </div>
      <div className={styles.container}>
        <a href="https://www.linkedin.com/in/robert-kovac-26a6ba254/" target="_blank" rel="noopener">
          <div className={styles.section}>
            <LinkedinIcon className={styles.icon} />
            <p>Linkedin</p>
          </div>
        </a>
        <a href="https://github.com/DuckySoLucky" target="_blank" rel="noopener">
          <div className={styles.section}>
            <GithubIcon className={styles.icon} />
            <p>Github</p>
          </div>
        </a>
        <div className={styles.section}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;

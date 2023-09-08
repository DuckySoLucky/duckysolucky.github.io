import Link from "next/link";
import Image from "next/image";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>JS</h1>
          <h1>Enjoyer</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Robert Kovac</h1>
            <h6 className={styles.bio}>Software Developer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key="JavaScript" className="JavaScript">
                      JavaScript
                    </span>
                    <span key="Rust" className="Rust">
                      Rust
                    </span>
                    <span key="cpp" className="cpp">
                      C/C++
                    </span>
                    <span key="Java" className="Java">
                      Java
                    </span>
                    <span key="Mongo" className="Mongo">
                      Mongo
                    </span>
                    <span key="TypeScript" className="TypeScript">
                      TypeScript
                    </span>
                    <span key="Bash" className="Bash">
                      Bash
                    </span>
                    <span key="Redis" className="Redis">
                      Redis
                    </span>
                    <span key="PostgreSQL" className="PostgreSQL">
                      PostgreSQL
                    </span>
                    <span key="SQL" className="SQL">
                        SQL
                      </span>
                    {
                     /*
                      <span key="PHP" className="PHP">
                        PHP
                      </span>
                      <span key="Csharp" className="Csharp">
                        C#
                      </span>
                     */
                    }
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image className={styles.picture} src="/me.png" width={300} height={290} alt="Robert's Picture" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}

import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "Email",
    link: "robertkovac160@gmail.com",
    href: "mailto:robertkovac160@gmail.com",
  },
  {
    social: "Discord",
    link: "duckysolucky",
    href: "https://discord.com/users/486155512568741900",
  },
  {
    social: "GitHub",
    link: "DuckySoLucky",
    href: "https://github.com/DuckySoLucky",
  },
  {
    social: "Twitter",
    link: "DuckySoLucky",
    href: "https://twitter.com/DuckySoLucky",
  },
  {
    social: "LinkedIn",
    link: "Robert Kovac",
    href: "https://www.linkedin.com/in/robert-kovac-26a6ba254/",
  },
  {
    social: "Website",
    link: "duckySoLucky.tech",
    href: "http://duckysolucky.tech/",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        tag: <a>production</a>
      </p>
      <p className={styles.line}>
        <span>duckysolucky</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;

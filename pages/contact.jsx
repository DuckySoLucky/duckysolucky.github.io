import { useState } from "react";
import ContactCode from "../components/ContactCode";
import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.heading}>Find Me On</h3>
        <ContactCode />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Contact" },
  };
}

export default ContactPage;

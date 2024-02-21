import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Teeksha</h1>
        <p className={styles.description}>
          A Pre-final year IT student at Delhi Technological University,
          passionate about crafting innovative software solutions to address
          societal challenges and improving the daily lives of people. Currently
          I am refining my skills in Full Stack Development. I'm actively
          seeking internship opportunities and connections within the tech
          industry.
        </p>
        <a
          href="https://drive.google.com/file/d/1-h5-_2mbLp07ipQk-smPNA1UvuTtFXa1/view?usp=sharing"
          target="_blank"
          className={styles.contactBtn}
        >
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of Me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

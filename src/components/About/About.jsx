import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a latop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I have used frontend techstack such as HTML, CSS, JS, Bootsrap
                and ReactJS. I have also made some frontend projects such as a
                GameZoneX a mini games website.I have also replicate the given
                Figma design in React for a few projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                For backend I use tech stack of Express, NodeJS, ad MonogDB. I
                have also done authorisation using Passport JS, Bcrypt and JWT.
                I have also impelmented features like uploading a picture and
                used Mapbox API for geocoding.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="ui icon" />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim fuga consequuntur atque cumque rem, laboriosam nulla. Hic iste consectetur ratione, accusantium et neque!</p>
                </div>
            </li> */}
        </ul>
      </div>
    </section>
  );
};

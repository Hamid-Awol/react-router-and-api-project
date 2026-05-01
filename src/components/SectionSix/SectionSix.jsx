import React from "react";
import styles from "./SectionSix.module.css";

function SectionSix() {
  return (
    <div className={styles.sectionSix}>
      <div className={styles.left}>
        <img src="/src/assets/images/icons/arcade.png" alt="Apple Arcade" />
        <p className={styles.white}>
          Agent 8 is a small hero on a big mission.
        </p>
        <div className={styles.links}>
          <a href="#">
            Play now<sup>2</sup>
          </a>
          <a href="#">Learn about Apple Arcade</a>
        </div>
      </div>
      <div className={styles.right}>
        <h2>Apple Card Monthly Installments</h2>
        <p>
          Pay for your next iPhone over time, interest-free with Apple Card.
        </p>
        <div className={styles.links}>
          <a href="#">Learn more</a>
          <a href="#">Apply now</a>
        </div>
      </div>
    </div>
  );
}

export default SectionSix;

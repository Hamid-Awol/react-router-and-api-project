import React from 'react';
import styles from './SectionFour.module.css';

function SectionFour() {
  return (
    <div className={styles.sectionFour}>
      <div className={styles.left}>
        <h2>iPhone 11</h2>
        <p>Just the right amount of everything.</p>
        <p>From $18.70/mo. or $499 with trade‑in.<sup>1</sup></p>
        <div className={styles.links}>
          <a href="#">Learn more</a>
          <a href="#">Apply now</a>
        </div>
      </div>
      <div className={styles.right}>
        <h2 className={styles.white}>Get the latest CDC response to COVID-19.</h2>
        <div className={styles.links}>
          <a href="#">Watch the PSA</a>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;

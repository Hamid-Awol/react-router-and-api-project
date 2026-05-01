import React from 'react';
import styles from './SectionThree.module.css';

function SectionThree() {
  return (
    <section className={styles.sectionThree}>
      <div className={styles.container}>
        <h2 className={styles.title}>iPhone 11 Pro</h2>
        <p className={styles.description}>Pro cameras. Pro display. Pro performance.</p>
        <p className={styles.price}>From $24.95/mo. or $599 with trade‑in.</p>
        <div className={styles.links}>
          <a href="#">Learn more</a>
          <a href="#">Buy</a>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;

import React from 'react';
import styles from './SectionTwo.module.css';

function SectionTwo() {
  return (
    <section className={styles.sectionTwo}>
      <div className={styles.container}>
        <div className={styles.newAlert}>New</div>
        <h2 className={styles.title}>MacBook Air</h2>
        <p className={styles.description}>Twice the speed. Twice the storage.</p>
        <p className={styles.price}>From $999.</p>
        <div className={styles.links}>
          <a href="#">Learn more</a>
          <a href="#">Buy</a>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;

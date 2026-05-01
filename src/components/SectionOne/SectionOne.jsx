import React from 'react';
import styles from './SectionOne.module.css';

function SectionOne() {
  return (
    <section className={styles.sectionOne}>
      <div className={styles.container}>
        <div className={styles.newAlert}>New</div>
        <h2 className={styles.title}>iPad Pro</h2>
        <div className={styles.links}>
          <a href="#">Learn more</a>
          <a href="#">Order</a>
        </div>
        <div className={styles.caption}>
          <span>iPad Pro available starting 3.25</span>
          <span>Magic Keyboard coming in May</span>
        </div>
      </div>
    </section>
  );
}

export default SectionOne;

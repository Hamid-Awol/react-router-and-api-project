import React from 'react';
import styles from './SectionFive.module.css';

function SectionFive() {
  return (
    <div className={styles.sectionFive}>
      <div className={styles.left}>
        <img src="/src/assets/images/icons/apple-tv-logo.png" alt="Apple TV" />
        <div className={styles.bankerLogo}>
          <img src="/src/assets/images/home/banker.png" alt="The Banker" />
        </div>
        <a href="#" className={styles.watchLink}>Watch now on the Apple TV App</a>
      </div>
      <div className={styles.right}>
        <img src="/src/assets/images/icons/watch-series5-logo.png" alt="Watch Series 5" />
        <p>With the Always-On Retina display.<br />You've never seen a watch like this.</p>
        <div className={styles.links}>
          <a href="#">Learn more</a>
          <a href="#">Buy</a>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;

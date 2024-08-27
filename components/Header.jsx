import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logoCircle} />
        <h1 className={styles.schoolName}>ABC School</h1>
      </div>
      <div className={styles.contactContainer}>
        <button className={styles.contactButton}>Contact Us</button>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7af67663e32a5a38603150cc588921551b2406aa02adf0fa464b7c48afb846c2?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5" alt="" className={styles.contactIcon} />
      </div>
    </header>
  );
}

export default Header;
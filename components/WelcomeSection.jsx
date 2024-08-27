import React from 'react';
import UserTypeCard from './UserTypeCard';
import styles from './WelcomeSection.module.css';

function WelcomeSection() {
  const userTypes = [
    { type: 'STUDENT', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f4d64313a2664716c8389f66553580719e4b47b2592ab6f26fb638f9d36542c4?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5' },
    { type: 'TEACHER', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7c5e5aab716bd69e9965827ef110cc7689d736c9fddb6d07de186ac0fec5a0ab?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5' },
    { type: 'ADMIN', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4d5df77ab3bea15eeec0030b1ad633264d3acde5059a391b834a51927207d442?placeholderIfAbsent=true&apiKey=170b590e187e4beabe3f2ef7100234b5' }
  ];

  return (
    <section className={styles.welcomeSection}>
      <h2 className={styles.welcomeTitle}>WELCOME TO ABC SCHOOL</h2>
      <h3 className={styles.welcomeSubtitle}>Are you,</h3>
      <div className={styles.userTypeContainer}>
        {userTypes.map((user, index) => (
          <UserTypeCard key={index} type={user.type} imageSrc={user.imageSrc} />
        ))}
      </div>
    </section>
  );
}

export default WelcomeSection;
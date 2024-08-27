import React from 'react';
import Header from './Header';
import WelcomeSection from './WelcomeSection';
import Footer from './Footer';
import styles from './WelcomePage.module.css';

function WelcomePage() {
  return (
    <div className={styles.welcomePage}>
      <Header />
      <main className={styles.mainContent}>
        <WelcomeSection />
      </main>
      <Footer />
    </div>
  );
}

export default WelcomePage;
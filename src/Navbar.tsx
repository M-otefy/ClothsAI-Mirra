import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <span style={styles.logo}>ÉLVARÉ</span>
          <div style={styles.divider}></div>
        </div>

        <nav style={styles.nav}>
          <a href="#collection" style={styles.navLink}>COLLECTION</a>
          <a href="#concept" style={styles.activeNavLink}>CONCEPT</a>
          <a href="#hardware-ui" style={styles.navLink}>HARDWARE & UI</a>
          <a href="#how-it-works" style={styles.navLink}>HOW IT WORKS</a>
          <a href="#for-retailers" style={styles.navLink}>FOR RETAILERS</a>
        </nav>

        <div style={styles.rightSection}>
          <button style={styles.demoBtn}>
            REQUEST A DEMO
          </button>
          
          <button style={styles.profileBtn}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    height: '80px',
    backgroundColor: 'rgba(23, 18, 15, 0.75)',
    backdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px)',
    boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  logo: {
    color: '#F0E6D8',
    fontFamily: 'serif',
    fontSize: '22px',
    letterSpacing: '3px',
    fontWeight: 'bold',
  },
  divider: {
    width: '1px',
    height: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '48px',
  },
  navLink: {
    color: '#E5DFDA',
    textDecoration: 'none',
    fontSize: '11px',
    letterSpacing: '1.5px',
    fontWeight: 500,
    whiteSpace: 'nowrap',
  },
  activeNavLink: {
    color: '#D8B4FE',
    textDecoration: 'none',
    fontSize: '11px',
    letterSpacing: '1.5px',
    fontWeight: 600,
    whiteSpace: 'nowrap',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  demoBtn: {
    backgroundColor: '#F3DFCC',
    color: '#17120F',
    borderRadius: '50px',
    padding: '10px 24px',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '1px',
    border: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },
  profileBtn: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    backgroundColor: '#D8B4FE',
    color: '#3B116A',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    padding: 0,
  },
};
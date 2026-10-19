import React from 'react';
import heroMirrorImg from './assets/hero-mirror.png.png';

export const Hero: React.FC = () => {
  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        <div style={styles.leftColumn}>
          <div style={styles.badge}>
            <span style={styles.badgeDot}></span>
            <span>ÉLVARÉ · SMART RETAIL MIRROR — ELEGANCE, IN A NEW DIMENSION</span>
          </div>

          <h1 style={styles.title}>
            See it on you.<br />
            <span style={styles.titleItalic}>Before you buy it.</span>
          </h1>

          <p style={styles.description}>
            Explore clothing on a precision 3D male avatar and receive
            measurement-led sizing guidance directly within the
            sanctuary of the dressing suite.
          </p>

          <div style={styles.actions}>
            <button style={styles.primaryBtn}>
              REQUEST A DEMO &rarr;
            </button>
            <button style={styles.secondaryBtn}>
              EXPLORE PLATFORM &darr;
            </button>
          </div>

          <div style={styles.stateCard}>
            <div style={styles.stateHeader}>
              <span style={styles.stateTitle}>MIRROR SUBSTRATE STATE</span>
              <span style={styles.stateBadge}>
                <span style={styles.purpleDot}></span>
                Live Fitting Suite
              </span>
            </div>
            <p style={styles.stateText}>
              Tactile measurement matrix active. No biometric imaging or live cameras
              recorded. Preserving complete patron privacy.
            </p>
          </div>
        </div>

        <div style={styles.rightColumn}>
          <div style={styles.imageGlowContainer}>
            <div style={styles.imageOverlay} />

            <div style={styles.topTag}>
              MONOLITH GLASS 75&rdquo;
            </div>

            <div style={styles.floatingCard}>
              <span style={styles.floatingLabel}>LIVE FIT</span>
              <strong style={styles.floatingValue}>98.6%</strong>
            </div>

            <img
              src={heroMirrorImg}
              srcSet={`${heroMirrorImg} 1x, ${heroMirrorImg} 2x`}
              alt="Monolith Glass 75 Smart Retail Mirror"
              style={styles.heroImage}
            />

            <div style={styles.bottomTag}>
              &#x2630; AVATAR MATCHED &middot; SIZE 50
            </div>
          </div>
        </div>

      </div>

      <div style={styles.footerSpecs}>
        <div style={styles.specItem}>
          <span style={styles.specNumber}>01</span>
          <div>
            <h4 style={styles.specTitle}>HARDWARE SPEC</h4>
            <p style={styles.specDesc}>Monolithic 75&rdquo; optical dielectric glass with warm bronze bezel</p>
          </div>
        </div>

        <div style={styles.specItem}>
          <span style={styles.specNumber}>02</span>
          <div>
            <h4 style={styles.specTitle}>TACTILE CONTROL</h4>
            <p style={styles.specDesc}>Discrete manual metric dials &mdash; zero optical sensors or scan privacy risks</p>
          </div>
        </div>

        <div style={styles.specItem}>
          <span style={styles.specNumber}>03</span>
          <div>
            <h4 style={styles.specTitle}>FIT ENGINE</h4>
            <p style={styles.specDesc}>Millimetric drape calculation calibrated to Italian couture blocks</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    backgroundColor: '#0C0806',
    color: '#ECE0DB',
    padding: '24px 0 60px 0',
    width: '100%',
    overflow: 'hidden',
  },
  container: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    gap: '48px',
  },
  leftColumn: {
    flex: '1',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: '60px',
  },
  badge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '10px',
    letterSpacing: '1.5px',
    color: '#CDC3D1',
    marginBottom: '28px',
    fontWeight: 500,
  },
  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#DEC0FF',
  },
  title: {
    fontFamily: 'serif',
    fontSize: '52px',
    lineHeight: '1.1',
    fontWeight: 400,
    color: '#ECE0DB',
    marginBottom: '24px',
    letterSpacing: '-0.5px',
  },
  titleItalic: {
    fontStyle: 'italic',
    fontWeight: 300,
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: '#CDC3D1',
    marginBottom: '36px',
    maxWidth: '440px',
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '48px',
  },
  primaryBtn: {
    backgroundColor: '#DEC0FF',
    color: '#401C6A',
    border: 'none',
    borderRadius: '50px',
    padding: '12px 28px',
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '1px',
    cursor: 'pointer',
  },
  secondaryBtn: {
    backgroundColor: 'rgba(36, 30, 27, 0.6)',
    color: '#ECE0DB',
    border: '1px solid rgba(236, 224, 219, 0.15)',
    borderRadius: '50px',
    padding: '12px 28px',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '1px',
    cursor: 'pointer',
  },
  stateCard: {
    backgroundColor: 'rgba(23, 18, 15, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '12px',
    padding: '18px 22px',
    maxWidth: '420px',
    marginTop: 'auto',
  },
  stateHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  stateTitle: {
    fontSize: '10px',
    fontWeight: 700,
    letterSpacing: '1.5px',
    color: '#ECE0DB',
  },
  stateBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '10px',
    color: '#DEC0FF',
  },
  purpleDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#DEC0FF',
  },
  stateText: {
    fontSize: '11px',
    lineHeight: '1.5',
    color: '#8E858E',
    margin: 0,
  },
  rightColumn: {
    flex: '1.1',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    paddingTop: '16px',
  },
  imageGlowContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '540px',
    height: '680px',
    borderRadius: '20px',
    overflow: 'hidden',
    boxShadow: '0 0 80px 10px rgba(160, 92, 246, 0.35), 0 0 120px 20px rgba(64, 28, 106, 0.25)',
    transform: 'translate3d(0, 0, 0)',
    backgroundColor: '#1B120D',
    border: '1px solid rgba(222, 192, 255, 0.2)',
    backfaceVisibility: 'hidden',
  },
  imageOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(12,8,6,0.1), rgba(64,28,106,0.15))',
    zIndex: 1,
    pointerEvents: 'none',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
    display: 'block',
    imageRendering: '-webkit-optimize-contrast',
    position: 'relative',
    zIndex: 0,
    backfaceVisibility: 'hidden',
    transform: 'translateZ(0)',
  },
  floatingCard: {
    position: 'absolute',
    left: '20px',
    bottom: '20px',
    backgroundColor: 'rgba(12, 8, 6, 0.8)',
    border: '1px solid rgba(222, 192, 255, 0.25)',
    borderRadius: '12px',
    padding: '10px 14px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    zIndex: 4,
    backdropFilter: 'blur(10px)',
  },
  floatingLabel: {
    fontSize: '9px',
    letterSpacing: '1.5px',
    color: '#C9BCD0',
    textTransform: 'uppercase',
  },
  floatingValue: {
    fontSize: '18px',
    color: '#F5E8D8',
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  topTag: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    backgroundColor: 'rgba(12, 8, 6, 0.75)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#ECE0DB',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '10px',
    letterSpacing: '1.5px',
    fontWeight: 600,
    zIndex: 3,
  },
  bottomTag: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'rgba(12, 8, 6, 0.85)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(222, 192, 255, 0.3)',
    color: '#DEC0FF',
    padding: '8px 14px',
    borderRadius: '6px',
    fontSize: '10px',
    letterSpacing: '1.2px',
    fontWeight: 700,
    zIndex: 3,
  },
  footerSpecs: {
    maxWidth: '1280px',
    margin: '60px auto 0 auto',
    padding: '32px 24px 0 24px',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
  },
  specItem: {
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
  },
  specNumber: {
    fontSize: '11px',
    color: '#8E858E',
    fontWeight: 600,
  },
  specTitle: {
    fontSize: '10px',
    letterSpacing: '1.5px',
    fontWeight: 700,
    color: '#ECE0DB',
    margin: '0 0 6px 0',
  },
  specDesc: {
    fontSize: '11px',
    lineHeight: '1.5',
    color: '#8E858E',
    margin: 0,
  },
};
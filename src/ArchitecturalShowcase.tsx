
import './ArchitecturalShowcase.css'

function ArchitecturalShowcase() {
  return (
    <section className="architectural-showcase">
      <div className="container">

        {/* Section Header */}
        <div className="showcase-header">
          <p className="showcase-eyebrow">
            SPATIAL PRECISION · ARCHITECTURAL TOUCH
          </p>

          <h1 className="showcase-title">
            Engineered for flagship suites and
            <br />
            couture dressing lounges.
          </h1>

          <div className="showcase-description-container">
            <p className="showcase-description">
              ÉLVARÉ unites timeless architectural materials—honed
              travertine and patinated bronze—with an
              ultra-responsive spatial avatar interface designed to
              elevate the private fitting experience.
            </p>
          </div>
        </div>

        {/* Image and Feature Cards */}
        <div className="row g-4 align-items-center showcase-content">

          {/* Main Image */}
          <div className="col-12 col-lg-7">
            <div className="showcase-image-wrapper">
              <img
                src="/src/assets/virtual-fitting-room.png"
                alt="Luxury virtual fitting room"
                className="showcase-image"
              />

              <span className="showcase-image-label">
                ATELIER SUITE · MILAN SALONE
              </span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="col-12 col-lg-5">
            <div className="showcase-features">

              <article className="feature-card">
                <p className="feature-eyebrow">
                  ◈ TACTILE VISUALIZATION
                </p>
                <h2>Precision 3D Garment Drape</h2>
                <p className="feature-description">
                  True-to-weight representation of double-faced
                  cashmere, structured virgin wool, and raw silk
                  weave. Patrons inspect lapel drop, shoulder pad
                  structure, and trouser hem break in photorealistic
                  3D fidelity.
                </p>
              </article>

              <article className="feature-card">
                <p className="feature-eyebrow">
                  ↻ PERSPECTIVE CONTROL
                </p>
                <h2>Front, Profile &amp; 360° Rotation</h2>
                <p className="feature-description">
                  With a feather-light swipe along the peripheral
                  rail, the digital twin rotates effortlessly to
                  display vent clearance, waist taper, and sleeve
                  pitch from every viewing angle.
                </p>
              </article>

              <article className="feature-card">
                <p className="feature-eyebrow">
                  ▤ DETERMINISTIC SIZING
                </p>
                <h2>Tactile Manual Measurement Entry</h2>
                <p className="feature-description">
                  Enter patron chest, waist, and drop metrics using
                  an ultra-fine rotary slider. The recommendation
                  engine cross-references the house's master grading
                  table to suggest precise ready-to-wear or
                  demi-mesure sizing.
                </p>
              </article>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ArchitecturalShowcase

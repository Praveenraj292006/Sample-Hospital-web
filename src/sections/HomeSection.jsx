import { FaArrowRight, FaCalendarCheck } from 'react-icons/fa6';

const HomeSection = () => {
  return (
    <section id="home" className="hero-section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      paddingTop: 'var(--header-height)',
      overflow: 'hidden'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('/images/physio_hero_banner_1774890812659.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2,
        transform: 'scale(1.05)', // slight zoom for animation feel
        animation: 'zoomOut 20s infinite alternate linear'
      }}></div>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 100%)',
        zIndex: -1
      }}></div>

      <div className="container">
        <div className="hero-content fade-up" style={{ maxWidth: '650px' }}>
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(0, 118, 255, 0.1)', color: 'var(--primary)', borderRadius: '50px', fontWeight: '600', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            #1 Rated Physiotherapy Clinic
          </div>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Regain <span style={{ color: 'var(--primary)' }}>Mobility</span>.<br/> Live Pain-Free.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.2rem', maxWidth: '500px' }}>
            Expert physiotherapy, sports rehabilitation, and chiropractic care tailored to your unique recovery journey.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Book Appointment <FaCalendarCheck />
            </a>
            <a href="#services" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', padding: '1rem 2rem' }}>
              Our Services <FaArrowRight />
            </a>
          </div>

          <div style={{ marginTop: '4rem', display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>15+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Years Experience</p>
            </div>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border)' }}></div>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>10k+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Happy Patients</p>
            </div>
            <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--border)' }}></div>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>30+</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Expert Therapists</p>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes zoomOut {
          0% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default HomeSection;

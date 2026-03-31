import { FaCheckCircle } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
          
          <div className="about-image fade-up" style={{ flex: '1 1 400px', position: 'relative' }}>
            <div style={{ 
              width: '100%', 
              paddingTop: '120%', 
              backgroundColor: 'var(--bg-color)', 
              borderRadius: '20px', 
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img src="/images/physio_hero_banner_1774890812659.png" alt="Clinic Interior" style={{
                position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'
              }}/>
            </div>
            {/* Experience Box Overlay */}
            <div className="glass" style={{
              position: 'absolute', bottom: '-20px', right: '-20px', 
              padding: '2rem', borderRadius: '15px', 
              boxShadow: 'var(--shadow-lg)'
            }}>
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary)', margin: 0 }}>15+</h3>
              <p style={{ fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>Years of Trust</p>
            </div>
          </div>

          <div className="about-content fade-up" style={{ flex: '1 1 500px' }}>
            <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', marginBottom: '1rem' }}>About Us</h4>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Dedicated to Your Optimal Health & Movement</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              We are a team of highly experienced physiotherapists and chiropractors committed to delivering personalized, evidence-based care. Our mission is to alleviate pain, restore mobility, and improve your overall quality of life.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              Whether you are recovering from a sports injury, managing chronic pain, or seeking post-operative rehabilitation, our state-of-the-art facility provides the perfect environment for healing.
            </p>

            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
              {['Personalized Treatment Plans', 'Advanced Restorative Techniques', 'Experienced Specialists', 'State-of-the-art Facility'].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-primary)', fontWeight: '500' }}>
                  <FaCheckCircle style={{ color: 'var(--primary)', fontSize: '1.2rem' }} /> {item}
                </li>
              ))}
            </ul>

            <a href="#doctors" className="btn btn-primary">Meet Our Experts</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { FaBone, FaPersonWalking, FaUserDoctor, FaDumbbell, FaHeartPulse, FaHandDots } from 'react-icons/fa6';

const services = [
  {
    icon: <FaPersonWalking />,
    title: 'Physiotherapy',
    description: 'Evidence-based physical therapy addressing orthopedic, musculoskeletal, and neurological conditions to restore natural movement and alleviate pain effectively.'
  },
  {
    icon: <FaBone />,
    title: 'Chiropractic Care',
    description: 'Expert spinal adjustments and manual therapies tailored to correct alignment issues, relieve nerve pressure, and enhance your bodys natural healing capabilities.'
  },
  {
    icon: <FaDumbbell />,
    title: 'Sports Rehabilitation',
    description: 'Specialized recovery programs for athletes designed to heal sports injuries swiftly, prevent future trauma, and optimize peak physical performance.'
  },
  {
    icon: <FaHandDots />,
    title: 'Massage Therapy',
    description: 'Deep tissue and therapeutic massage techniques to reduce muscle tension, improve blood circulation, and accelerate soft tissue recovery times.'
  },
  {
    icon: <FaUserDoctor />,
    title: 'Post-Op Recovery',
    description: 'Comprehensive post-surgical rehabilitation structured to regain mobility, rebuild strength safely, and ensure a smooth return to daily activities.'
  },
  {
    icon: <FaHeartPulse />,
    title: 'Chronic Pain Management',
    description: 'Holistic and individualized strategies focusing on long-term relief from persistent pain through targeted exercises, education, and progressive therapy.'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <div className="section-title fade-up">
          <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', marginBottom: '0.5rem' }}>Our Services</h4>
          <h2>Comprehensive Care & Treatments</h2>
          <p>We provide a wide range of specialized therapies designed not just to treat symptoms, but to address the root cause of your pain and improve your overall quality of life.</p>
        </div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {services.map((service, idx) => (
            <div key={idx} className="service-card fade-up" style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-md)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              border: '1px solid var(--border)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              e.currentTarget.style.borderColor = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 118, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: 'var(--primary)',
                marginBottom: '1.5rem',
                transition: 'all 0.3s ease'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>{service.description}</p>
              <a href="#contact" style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none' }}>
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { FaLinkedinIn } from 'react-icons/fa6';

const doctors = [
  {
    name: 'Dr. James Harrison',
    role: 'Lead Physiotherapist',
    qualifications: 'BPT, MPT (Ortho)',
    specialization: 'Sports Injuries & Orthopedic Rehab',
    image: '/images/physio_doctor_1_1774890940911.png'
  },
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Senior Chiropractor',
    qualifications: 'BSc (Chiro), DC',
    specialization: 'Spinal Alignment & Nerve Therapy',
    image: '/images/physio_doctor_2_1774890991251.png'
  }
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="section-title fade-up">
          <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', marginBottom: '0.5rem' }}>Our Experts</h4>
          <h2>Meet Our Medical Professionals</h2>
          <p>Highly qualified, experienced, and deeply committed to your recovery journey. Discover the leading minds behind your treatment plans.</p>
        </div>

        <div className="doctors-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {doctors.map((doctor, idx) => (
            <div key={idx} className="doctor-card fade-up" style={{
              backgroundColor: 'var(--bg-color)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              textAlign: 'center'
            }}>
              <div style={{ height: '350px', overflow: 'hidden', position: 'relative' }}>
                <img src={doctor.image} alt={doctor.name} style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)'
                }}></div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{doctor.name}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: '600', marginBottom: '1rem', fontSize: '1.1rem' }}>{doctor.role}</p>
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem' }}><strong>Qualifications:</strong> {doctor.qualifications}</p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}><strong>Specialization:</strong> {doctor.specialization}</p>
                </div>
                <button className="btn btn-secondary" style={{ padding: '0.5rem 1.5rem', width: '100%' }}>Book Consultation</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;

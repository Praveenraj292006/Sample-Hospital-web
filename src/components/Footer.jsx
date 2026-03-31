import { FaHeartPulse, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--text-primary)', color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          <div className="footer-col">
            <div className="nav-brand" style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.8rem' }}>
              <FaHeartPulse style={{ color: 'var(--primary)' }} /> <span>The</span>Physio
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Expert physiotherapy and chiropractic care dedicated to restoring your mobility, strength, and overall well-being.
            </p>
            <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}><FaFacebookF /></a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}><FaTwitter /></a>
              <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}><FaInstagram /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><a href="#home" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Home</a></li>
              <li><a href="#about" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>About Us</a></li>
              <li><a href="#services" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Services</a></li>
              <li><a href="#doctors" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Our Doctors</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'white' }}>Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><span style={{ color: 'var(--text-secondary)' }}>Physiotherapy</span></li>
              <li><span style={{ color: 'var(--text-secondary)' }}>Sports Rehabilitation</span></li>
              <li><span style={{ color: 'var(--text-secondary)' }}>Chiropractic Care</span></li>
              <li><span style={{ color: 'var(--text-secondary)' }}>Massage Therapy</span></li>
            </ul>
          </div>

        </div>
        
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
          <p>&copy; {new Date().getFullYear()} The Physio Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

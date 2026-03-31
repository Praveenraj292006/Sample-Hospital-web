import { FaPhone, FaWhatsapp, FaLocationDot, FaEnvelope } from 'react-icons/fa6';

const ContactSection = () => {
  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <div className="section-title fade-up">
          <h4 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', marginBottom: '0.5rem' }}>Get In Touch</h4>
          <h2>Book Your Appointment</h2>
          <p>Ready to start your journey to a pain-free life? Reach out to us via phone, WhatsApp, or through our quick online form.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', marginTop: '3rem' }}>
          
          {/* Contact Information Cards */}
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="fade-up" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '15px', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <FaPhone style={{ color: 'var(--primary)', fontSize: '1.5rem' }} />
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Call Us Now</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Direct Line for immediate booking.</p>
              <a href="tel:+1234567890" style={{ display: 'inline-block', fontSize: '1.2rem', fontWeight: '700', color: 'var(--primary)', textDecoration: 'none' }}>+1 (234) 567-890</a>
            </div>

            <div className="fade-up" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '15px', boxShadow: 'var(--shadow-md)', borderTop: '4px solid #25D366' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <FaWhatsapp style={{ color: '#25D366', fontSize: '1.5rem' }} />
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>WhatsApp Chat</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Prefer typing? Chat with our specialists instantly.</p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', backgroundColor: '#25D366', color: 'white', padding: '0.6rem 1.2rem', borderRadius: '5px', fontWeight: '600', textDecoration: 'none', transition: 'background-color 0.3s' }}>Chat on WhatsApp</a>
            </div>

            <div className="fade-up" style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '15px', boxShadow: 'var(--shadow-md)', borderTop: '4px solid var(--text-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <FaLocationDot style={{ color: 'var(--text-primary)', fontSize: '1.5rem' }} />
                <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Visit The Clinic</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>123 Recovery Avenue,<br/>Wellness District, NY 10001</p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="contact-main fade-up" style={{ backgroundColor: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '2rem' }}>Send an Enquiry</h3>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ gridColumn: 'span 1' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'var(--font-family)' }} />
                </div>
                <div style={{ gridColumn: 'span 1' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>Phone Number</label>
                  <input type="tel" placeholder="+1..." style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'var(--font-family)' }} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>Email Address</label>
                  <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'var(--font-family)' }} />
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--text-primary)' }}>Your Message / Symptoms</label>
                  <textarea rows="4" placeholder="Briefly describe what you're experiencing..." style={{ width: '100%', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--border)', fontFamily: 'var(--font-family)', resize: 'vertical' }}></textarea>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>Request Appointment</button>
                </div>
              </form>
            </div>
            
            {/* Embedded Google Map Dummy/iFrame */}
            <div style={{ width: '100%', height: '300px', backgroundColor: '#e5e3df', position: 'relative' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1523.6397447990033!2d-74.00806441618991!3d40.71329244031737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1e2f3d999d%3A0xe5a3c9e6bb07b8b7!2sNew%20York%20City%20Hall!5e0!3m2!1sen!2sus!4v1689252069814!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Small inline fix for smaller screens to flex the grid layout appropriately */}
        <style>{`
          @media (max-width: 900px) {
            #contact .container > div {
              grid-template-columns: 1fr !important;
            }
            form {
              grid-template-columns: 1fr !important;
            }
            form > div {
              grid-column: span 1 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ContactSection;

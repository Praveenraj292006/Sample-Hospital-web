import { FaQuoteLeft, FaStar } from 'react-icons/fa6';

const testimonials = [
  {
    name: 'Michael R.',
    text: 'After my sports injury, I thought I would never play tennis again. Dr. Harrison designed a recovery program that was tough but incredibly effective. Im back on the court and feeling stronger than ever.',
    role: 'Athlete'
  },
  {
    name: 'Emily T.',
    text: 'Ive suffered from chronic back pain for years. Dr. Mitchells chiropractic adjustments changed my life. The clinic is beautiful, the staff is welcoming, and the results speak for themselves.',
    role: 'Office Professional'
  },
  {
    name: 'David W.',
    text: 'The post-operative care I received here was phenomenal. They explained every step of the rehabilitation process clearly and monitored my progress closely. Highly recommended to anyone needing serious physio care.',
    role: 'Patient'
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
      <div className="container">
        <div className="section-title fade-up">
          <h4 style={{ color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600', marginBottom: '0.5rem' }}>Testimonials</h4>
          <h2 style={{ color: 'white' }}>What Our Patients Say</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)' }}>Real stories of recovery, strength, and renewed vitality from the people who trusted us with their health.</p>
        </div>

        <div className="testimonials-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card fade-up" style={{
              backgroundColor: 'white',
              color: 'var(--text-primary)',
              padding: '2.5rem',
              borderRadius: '16px',
              position: 'relative',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <FaQuoteLeft style={{ color: 'rgba(0, 118, 255, 0.1)', fontSize: '3rem', position: 'absolute', top: '2rem', right: '2.5rem' }} />
              <div style={{ display: 'flex', gap: '0.3rem', color: '#FFD700', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
                {[1,2,3,4,5].map(star => <FaStar key={star} />)}
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '2rem', fontSize: '1.05rem', position: 'relative', zIndex: 1 }}>
                "{testimonial.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--bg-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)', border: '2px solid var(--primary)' }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{testimonial.name}</h4>
                  <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

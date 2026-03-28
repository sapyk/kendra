import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bg-alt pt-20 pb-10 border-t border-[#6c512f]/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-saffron"></div>
              <span className="text-saffron text-xs font-bold tracking-widest uppercase">Sri Atmananda Pranayama Yoga Kendra</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-6 text-text">
              A sincere learning space for breath, balance, and inner steadiness.
            </h2>
            <p className="text-muted text-lg max-w-md">
              Guided practice, patient teaching, and a calm atmosphere for those who wish to begin with discipline.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-6 text-text">Contact</h3>
            <div className="space-y-4 text-muted">
              <p><a href="tel:+919900727600" className="hover:text-saffron transition-colors">+91 99007 27600</a></p>
              <p><a href="mailto:SriAtmanandaPranayamaYoga@gmail.com" className="hover:text-saffron transition-colors">SriAtmanandaPranayamaYoga@gmail.com</a></p>
              <p>Vivekananda Badavane<br/>Shivamogga, Karnataka, India</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-6 text-text">Explore</h3>
            <div className="flex flex-col space-y-3 text-muted">
              <Link to="/" className="hover:text-saffron transition-colors">Home</Link>
              <Link to="/about" className="hover:text-saffron transition-colors">About</Link>
              <Link to="/programs" className="hover:text-saffron transition-colors">Programs</Link>
              <Link to="/gallery" className="hover:text-saffron transition-colors">Gallery</Link>
              <Link to="/contact" className="hover:text-saffron transition-colors">Contact</Link>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif text-2xl font-bold mb-6 text-text">Guidance</h3>
            <p className="text-muted mb-6">
              For class details, fee information, and joining guidance, reach out through phone, WhatsApp, or email.
            </p>
            <Link to="/contact#enquire" className="bg-hero-bg hover:bg-hero-bg-light text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block shadow-sm">
              Start Your Enquiry
            </Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#6c512f]/10 text-sm text-muted">
          <p>&copy; {new Date().getFullYear()} Sri Atmananda Pranayama Yoga Kendra. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed by <a href="#" className="font-semibold hover:text-saffron transition-colors">Tech SathyA</a></p>
        </div>
      </div>
    </footer>
  );
}

export default function Contact() {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Contact</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6 text-text">
            Start your pranayama journey today.
          </h1>
          <p className="text-muted text-lg mb-8">
            Have questions or want to join? Reach out through phone, WhatsApp, or the enquiry form. We will guide you step by step.
          </p>
          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0 mt-2"></div>
              <p className="text-text"><strong className="font-bold">Phone:</strong> <a href="tel:+919900727600" className="hover:text-saffron transition-colors">+91 99007 27600</a></p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0 mt-2"></div>
              <p className="text-text"><strong className="font-bold">Email:</strong> <a href="mailto:SriAtmanandaPranayamaYoga@gmail.com" className="hover:text-saffron transition-colors">SriAtmanandaPranayamaYoga@gmail.com</a></p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0 mt-2"></div>
              <p className="text-text"><strong className="font-bold">Address:</strong><br/>Vivekananda Badavane<br/>Shivamogga, Karnataka, India</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/919900727600?text=Hello,%20I%20would%20like%20to%20learn%20more%20about%20Sri%20Atmananda%20Pranayama%20Yoga%20Kendra." target="_blank" rel="noreferrer" className="bg-saffron hover:bg-saffron-hover text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md">
              Open WhatsApp
            </a>
            <a href="mailto:SriAtmanandaPranayamaYoga@gmail.com" className="bg-transparent hover:bg-black/5 border-2 border-hero-bg text-hero-bg px-8 py-3.5 rounded-full font-semibold transition-colors">
              Send Email
            </a>
          </div>
        </div>
        <div className="h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg border border-[#6c512f]/5">
          <img 
            src="https://raw.githubusercontent.com/sapyk/site/main/assets/images/story-space.png" 
            alt="Contact and welcome visual" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section id="enquire" className="grid lg:grid-cols-2 gap-8">
        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Enquiry Form</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-4 text-text">
            Send your enquiry
          </h2>
          <p className="text-muted mb-8">Share your details and we will contact you with the next steps.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-text mb-2">Full Name</label>
              <input type="text" id="name" className="w-full bg-bg border border-[#6c512f]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-colors" placeholder="Enter your full name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-text mb-2">Email Address</label>
              <input type="email" id="email" className="w-full bg-bg border border-[#6c512f]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-colors" placeholder="Enter your email address" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-text mb-2">Phone Number</label>
              <input type="tel" id="phone" className="w-full bg-bg border border-[#6c512f]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-colors" placeholder="Enter your mobile number" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-text mb-2">Message</label>
              <textarea id="message" rows={4} className="w-full bg-bg border border-[#6c512f]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-colors resize-y" placeholder="Share your question or interest in joining" required></textarea>
            </div>
            <button type="submit" className="bg-hero-bg hover:bg-hero-bg-light text-white px-8 py-4 rounded-full font-semibold transition-colors w-full shadow-md">
              Send Enquiry
            </button>
            <p className="text-sm text-muted text-center">Share your details and we will get back to you with the next steps.</p>
          </form>
        </div>

        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Fee Support</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-6 text-text">
            Fee and payment guidance.
          </h2>
          <p className="text-muted mb-8">
            If you are ready to join, fee details and payment guidance can be shared after your enquiry.
          </p>
          <div className="rounded-[2rem] overflow-hidden mb-8 border border-[#6c512f]/10 flex-grow">
            <img 
              src="https://picsum.photos/seed/upi/800/600" 
              alt="UPI payment placeholder" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="bg-bg p-6 rounded-2xl border border-[#6c512f]/10">
            <span className="text-sm font-semibold text-muted uppercase tracking-wider">Course fee</span>
            <div className="font-serif text-3xl font-bold text-saffron mt-1 mb-2">Rs. 1000</div>
            <p className="text-sm text-muted">After payment, confirmation and the next steps can be shared through WhatsApp and email.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Register() {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-hero-bg text-white p-10 lg:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-saffron"></div>
              <span className="text-saffron text-xs font-bold tracking-widest uppercase">Registration</span>
            </div>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Breathe Better. Live Calmer.
            </h1>
            <p className="text-white/80 text-lg mb-10">
              A guided pranayama program designed to reduce stress, improve health, and restore inner balance — especially for those managing work, family, and responsibilities.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#form" className="bg-saffron hover:bg-saffron-hover text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md">
                Register Now
              </a>
              <a href="https://wa.me/919900727600?text=Hello,%20I%20would%20like%20to%20learn%20more%20about%20Sri%20Atmananda%20Pranayama%20Yoga%20Kendra." target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition-colors backdrop-blur-sm">
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </div>
        <div className="h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl border border-[#6c512f]/10">
          <img 
            src="https://raw.githubusercontent.com/sapyk/site/main/assets/images/hero-sanctuary.png" 
            alt="Pranayama session" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-surface p-10 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Who is this for</span>
          </div>
          <h2 className="font-serif text-3xl font-bold leading-tight mb-6 text-text">
            Designed for everyday life
          </h2>
          <div className="space-y-4">
            {[
              "Working professionals facing stress and pressure",
              "Individuals with sleep or lifestyle issues",
              "Anyone seeking calmness and clarity",
              "People looking for disciplined practice"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0 mt-2"></div>
                <p className="text-text font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface p-10 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Benefits</span>
          </div>
          <h2 className="font-serif text-3xl font-bold leading-tight mb-6 text-text">
            What you can experience
          </h2>
          <div className="space-y-4">
            {[
              "Reduce stress and anxiety",
              "Improve breathing and energy levels",
              "Better sleep and relaxation",
              "Mental clarity and focus",
              "Inner peace and balance"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0 mt-2"></div>
                <p className="text-text font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface p-10 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Program Details</span>
          </div>
          <h2 className="font-serif text-3xl font-bold leading-tight mb-6 text-text">
            Simple and structured
          </h2>
          <div className="space-y-4 text-text">
            <p><strong className="font-bold">Duration:</strong> 1 Month</p>
            <p><strong className="font-bold">Time:</strong> Morning (6–7 AM) / Evening (7–8 PM)</p>
            <p><strong className="font-bold">Fee:</strong> ₹2000</p>
            <p><strong className="font-bold text-saffron">Offer:</strong> 50% Discount (Limited Time)</p>
            <p className="text-sm text-muted mt-6 pt-6 border-t border-[#6c512f]/10"><strong className="font-bold">Note:</strong> Limited seats for better personal attention</p>
          </div>
        </div>
      </section>

      <section id="form" className="bg-surface p-6 md:p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5 relative overflow-hidden">
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-saffron/5 rounded-full blur-3xl"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Registration</span>
            <div className="w-8 h-[1px] bg-saffron"></div>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-10 text-text text-center">
            Secure your place
          </h2>
          <div className="rounded-[2rem] overflow-hidden border border-[#6c512f]/10 bg-bg shadow-inner">
            <iframe 
              src="https://forms.gle/MiNi1rHiccfaPqcv9"
              width="100%" 
              height="900"
              style={{border: 'none'}}
              title="Registration Form"
            >
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

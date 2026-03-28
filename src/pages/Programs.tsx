import { Link } from 'react-router-dom';

export default function Programs() {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Programs</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6 text-text">
            Simple, structured pranayama training for real-life benefits.
          </h1>
          <p className="text-muted text-lg mb-8">
            This program is designed for people who want practical improvement - better breathing, mental clarity, and a disciplined lifestyle.
          </p>
          <div className="bg-bg p-6 rounded-2xl border border-[#6c512f]/10">
            <span className="text-sm font-semibold text-muted uppercase tracking-wider">Course fee</span>
            <div className="font-serif text-3xl font-bold text-saffron mt-1 mb-2">Rs. 1000</div>
            <p className="text-sm text-muted">Students receive practical guidance, correction, and a simple learning path.</p>
          </div>
        </div>
        <div className="h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg border border-[#6c512f]/5">
          <img 
            src="https://raw.githubusercontent.com/sapyk/site/main/assets/images/program-thumb.png" 
            alt="Pranayama training session" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { num: "01", title: "Foundational Breath Practice", desc: "Learn correct breathing techniques step-by-step with proper guidance." },
          { num: "02", title: "Daily Routine Development", desc: "Build a stable and sustainable daily practice habit." },
          { num: "03", title: "Personal Guidance", desc: "Receive support and correction instead of generic group teaching." }
        ].map((card, i) => (
          <div key={i} className="bg-surface p-10 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
            <div className="w-14 h-14 rounded-full bg-bg text-hero-bg font-bold flex items-center justify-center mb-8 shadow-sm border border-[#6c512f]/10">
              {card.num}
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4 text-text">{card.title}</h3>
            <p className="text-muted">{card.desc}</p>
          </div>
        ))}
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Benefits</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-6 text-text">
            Steady practice that supports life inside and outside the class.
          </h2>
          <div className="space-y-4">
            {[
              "Improves focus and reduces mental stress.",
              "Builds discipline and consistency.",
              "Enhances physical and emotional balance.",
              "Supports spiritual growth through steady practice."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0"></div>
                <p className="text-text font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-saffron"></div>
              <span className="text-saffron text-xs font-bold tracking-widest uppercase">Next Step</span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-6 text-text">
              Begin with clarity and personal guidance.
            </h2>
            <p className="text-muted mb-8 text-lg">
              If you wish to join, you can send an enquiry and receive the next steps directly.
            </p>
            <Link to="/contact#enquire" className="bg-saffron hover:bg-saffron-hover text-white px-8 py-4 rounded-full font-semibold transition-colors self-start shadow-md">
              Send Enquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

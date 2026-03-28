import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Hero Section */}
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-hero-bg text-white p-10 lg:p-14 rounded-[2.5rem] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-saffron"></div>
              <span className="text-saffron text-xs font-bold tracking-widest uppercase">Home</span>
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Breathe Better. Live Calmer.
            </h1>
            <p className="text-white/80 text-lg mb-10 max-w-md">
              Authentic pranayama guidance rooted in discipline, simplicity, and spiritual balance - guided personally by Sri Ramesh Rao Nadig.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/programs" className="bg-saffron hover:bg-saffron-hover text-white px-8 py-3.5 rounded-full font-semibold transition-colors shadow-md">
                Explore Programs
              </Link>
              <a href="https://wa.me/919900727600?text=Hello,%20I%20would%20like%20to%20learn%20more%20about%20Sri%20Atmananda%20Pranayama%20Yoga%20Kendra." target="_blank" rel="noreferrer" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3.5 rounded-full font-semibold transition-colors backdrop-blur-sm">
                WhatsApp Enquiry
              </a>
            </div>
            <div className="space-y-4">
              {[
                "Step-by-step guidance suitable for beginners and sincere learners.",
                "Personal attention with focus on long-term practice, not shortcuts.",
                "A calm, distraction-free learning environment rooted in tradition."
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-4 bg-hero-bg-light/40 p-4 rounded-2xl border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-saffron mt-2 shrink-0 shadow-sm"></div>
                  <p className="text-white/90 text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full min-h-[600px] rounded-[2.5rem] overflow-hidden shadow-xl border border-[#6c512f]/10">
          <img 
            src="https://raw.githubusercontent.com/sapyk/site/main/assets/images/hero-sanctuary.png" 
            alt="Pranayama Practice" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Welcome</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6 text-text">
            A space for breath, balance, and inner steadiness.
          </h2>
          <p className="text-muted text-lg mb-10">
            Sri Atmananda Pranayama Yoga Kendra is built on a simple belief - right breathing leads to a better life. With guided practice, discipline, and consistency, students experience clarity, calmness, and stronger inner balance.
          </p>
          <div className="space-y-5">
            {[
              "Traditional pranayama taught in a simple and practical way.",
              "Suitable for all age groups with gradual learning.",
              "Focus on real results, not just theory."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0"></div>
                <p className="text-text font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg border border-[#6c512f]/5">
          <img 
            src="https://raw.githubusercontent.com/sapyk/site/main/assets/images/story-space.png" 
            alt="Yoga Class" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Cards Section */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            num: "01",
            title: "About",
            desc: "Understand the teaching philosophy, background of the Guru, and the intention behind this institute.",
            link: "/about",
            btnText: "Read More"
          },
          {
            num: "02",
            title: "Programs",
            desc: "Explore structured pranayama training designed to improve breathing, focus, and daily discipline.",
            link: "/programs",
            btnText: "View Programs"
          },
          {
            num: "03",
            title: "Gallery",
            desc: "See real glimpses of practice sessions, learning environment, and student engagement.",
            link: "/gallery",
            btnText: "Open Gallery"
          }
        ].map((card, i) => (
          <div key={i} className="bg-surface p-10 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5 flex flex-col hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 rounded-full bg-bg text-hero-bg font-bold flex items-center justify-center mb-8 shadow-sm border border-[#6c512f]/10">
              {card.num}
            </div>
            <h3 className="font-serif text-3xl font-bold mb-4 text-text">{card.title}</h3>
            <p className="text-muted mb-10 flex-grow">{card.desc}</p>
            <Link to={card.link} className="bg-hero-bg hover:bg-hero-bg-light text-white px-6 py-3 rounded-full font-semibold transition-colors self-start shadow-sm">
              {card.btnText}
            </Link>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-surface p-10 lg:p-16 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-saffron/5 rounded-full blur-3xl"></div>
        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Take the Next Step</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-4 text-text">
            Begin your enquiry with confidence and clarity.
          </h2>
          <p className="text-muted text-lg">
            If you would like to learn, ask questions, or understand the next steps, we are here to guide you.
          </p>
        </div>
        <Link to="/contact#enquire" className="bg-saffron hover:bg-saffron-hover text-white px-8 py-4 rounded-full font-semibold transition-colors shrink-0 text-lg shadow-md relative z-10">
          Contact Us
        </Link>
      </section>
    </div>
  );
}

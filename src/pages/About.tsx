export default function About() {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">About</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6 text-text">
            Guidance rooted in simplicity, discipline, and sincerity.
          </h1>
          <p className="text-muted text-lg">
            Under the guidance of Sri Ramesh Rao Nadig, the institute focuses on practical pranayama training that brings real change in daily life.
          </p>
        </div>
        <div className="h-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-lg border border-[#6c512f]/5">
          <img 
            src="https://raw.githubusercontent.com/sapyk/site/main/assets/images/guru-portrait.png" 
            alt="Sri Ramesh Rao Nadig" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Guru</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-6 text-text">
            Personal guidance with steady correction and care.
          </h2>
          <div className="space-y-4">
            {[
              "Years of practical experience in guiding students.",
              "Focus on individual attention and correction.",
              "Teaching approach based on discipline, not shortcuts."
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0"></div>
                <p className="text-text font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Institute Story</span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold leading-tight mb-6 text-text">
            Growing with clarity and trust.
          </h2>
          <p className="text-muted mb-6">
            What started as local guidance is now expanding digitally - helping more people access structured pranayama learning with clarity and trust.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0"></div>
              <p className="text-text font-medium">Location: Vivekananda Badavane</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0"></div>
              <p className="text-text font-medium">City: Shivamogga, Karnataka, India</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-hero-bg shrink-0"></div>
              <p className="text-text font-medium">Teaching that remains personal even as more students join.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { num: "01", title: "Discipline", desc: "Practice is guided steadily so that students build confidence through consistency." },
          { num: "02", title: "Simplicity", desc: "Teaching stays practical and easy to follow without unnecessary complexity." },
          { num: "03", title: "Sincerity", desc: "The focus remains on genuine learning, correction, and long-term benefit." }
        ].map((card, i) => (
          <div key={i} className="bg-surface p-10 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
            <div className="w-14 h-14 rounded-full bg-bg text-hero-bg font-bold flex items-center justify-center mb-8 shadow-sm border border-[#6c512f]/10">
              {card.num}
            </div>
            <h3 className="font-serif text-3xl font-bold mb-4 text-text">{card.title}</h3>
            <p className="text-muted">{card.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

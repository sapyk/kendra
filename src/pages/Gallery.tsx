export default function Gallery() {
  return (
    <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      <section className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-saffron"></div>
            <span className="text-saffron text-xs font-bold tracking-widest uppercase">Gallery</span>
          </div>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-6 text-text">
            Moments from practice and learning.
          </h1>
          <p className="text-muted text-lg">
            A glimpse into real sessions, learning environment, and the calm atmosphere of the institute.
          </p>
        </div>
        <div className="h-full min-h-[400px] rounded-[2.5rem] overflow-hidden shadow-lg border border-[#6c512f]/5">
          <img 
            src="https://picsum.photos/seed/gallery-main/800/600" 
            alt="Practice session at the institute" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { img: "https://picsum.photos/seed/gal1/600/400", cap: "Calm and focused learning.", wide: true },
          { img: "https://picsum.photos/seed/gal2/400/600", cap: "Step-by-step guidance in practice." },
          { img: "https://picsum.photos/seed/gal3/400/600", cap: "A calm atmosphere for learning." },
          { img: "https://picsum.photos/seed/gal4/600/400", cap: "Steady breath practice with attention.", wide: true },
          { img: "https://picsum.photos/seed/gal5/600/400", cap: "Learning with simplicity and sincerity.", wide: true },
          { img: "https://picsum.photos/seed/gal6/400/600", cap: "Real glimpses from student engagement." }
        ].map((item, i) => (
          <figure key={i} className={`bg-surface p-4 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5 ${item.wide ? 'md:col-span-2 lg:col-span-2' : ''}`}>
            <div className="rounded-[2rem] overflow-hidden mb-4 h-64 md:h-80">
              <img src={item.img} alt={item.cap} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <figcaption className="text-center text-muted font-medium px-4">{item.cap}</figcaption>
          </figure>
        ))}
      </section>

      <section className="bg-surface p-10 lg:p-14 rounded-[2.5rem] shadow-lg border border-[#6c512f]/5">
        <h2 className="font-serif text-3xl font-bold mb-8 text-text text-center">Videos</h2>
        <div className="aspect-video rounded-[2rem] overflow-hidden shadow-inner">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Iy2rdf8vCmg?feature=oembed"
            title="Omkara Pranayama video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

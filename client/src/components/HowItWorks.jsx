function StepCard({ number, title, description }) {
  return (
    <div className="relative z-10 text-center flex flex-col items-center">
      <div className="w-24 h-24 bg-background-dark border-4 border-primary flex items-center justify-center text-4xl font-bold text-white mb-8">
        {number}
      </div>
      <h3 className="text-xl font-bold uppercase mb-4">{title}</h3>
      <p className="text-slate-400 font-light">{description}</p>
    </div>
  )
}

const steps = [
  {
    number: "1",
    title: "Discover Your Vision",
    description: "Explore our complete range of services and find the perfect solution for your creative goals.",
  },
  {
    number: "2",
    title: "Collaborate with Experts",
    description: "Work directly with our experienced professionals who bring your ideas to life with precision.",
  },
  {
    number: "3",
    title: "Transform & Launch",
    description: "Deliver polished, professional-grade content that resonates with your audience and elevates your brand.",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-32 bg-background-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold uppercase tracking-tighter mb-20">
          How It <span className="text-primary">Works</span>
        </h2>
        <div className="relative grid md:grid-cols-3 gap-12">
          <div className="hidden md:block absolute top-12 left-1/4 right-1/4 border-t-2 border-dashed border-primary/30 z-0"></div>
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

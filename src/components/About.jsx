function FeatureCard({ Icon, title, description }) {
  return (
    <div className="bg-surface p-10 border-l-4 border-primary group hover:bg-surface/80 transition-all">
      <Icon className="text-primary text-4xl mb-6 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-400 font-light leading-relaxed">{description}</p>
    </div>
  )
}

import { Film, Users, Code } from 'lucide-react'

const features = [
  {
    Icon: Film,
    title: "Complete Creative Suite",
    description: "From training to full production, we cover video editing, photography, filmmaking, content creation, and more.",
  },
  {
    Icon: Users,
    title: "Expert Community",
    description: "Learn from and collaborate with industry professionals who've worked on major productions and brands.",
  },
  {
    Icon: Code,
    title: "Studio-Ready Solutions",
    description: "Get equipped with professional tools, knowledge, and connections to launch your creative business.",
  },
]

export default function About() {
  return (
    <section className="py-32 bg-background-dark" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
            Why <span className="text-primary">TBMI Studios</span>
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} Icon={feature.Icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

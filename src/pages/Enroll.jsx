import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import EnrollHero from '../components/EnrollHero'
import EnrollForm from '../components/EnrollForm'
import WhatsNext from '../components/WhatsNext'
import HelpStrip from '../components/HelpStrip'

export default function Enroll() {
  return (
    <div className="dark bg-background-dark dark:text-slate-100">
      {/* Film Grain Overlay */}
      <div
        className="film-grain fixed top-0 left-0 w-full h-full pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAomo0IOQDeaTwW1uDJM8cJJrHBiCcBu4zqdBGaW5GNb0C3qp4SQtEFhgkav_nf8Vb-9Iwuy12tKde_bOo9CFIfBgjk_tLsUpXcTQbhRfyHHUUyU6cRavqrQGtv8GuzDAfWk6D2PLTUSA1k-Qfnp1EKLhtwTGHkE81RU0-l6X9PzKcCrKLhYXM_XGmGaClzLDyFTtp1HJRnmvm616iKzSbft3OdTB-qMj6Tc5gfzVoVMgT7UgpvkuCjv9Jaa5hLZLspX0rC2xa1CG4G')`,
        }}
      ></div>

      <Navbar />

      <main className="relative z-10">
        <EnrollHero />
        <EnrollForm />
        <WhatsNext />
        <HelpStrip />
      </main>

      <Footer />
    </div>
  )
}

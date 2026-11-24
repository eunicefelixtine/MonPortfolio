import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <div className="fixed inset-0 -z-10 grid-bg opacity-40 pointer-events-none" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900/60">
        © {new Date().getFullYear()} NZEUTEM DOMMOE Eunice Felixtine — Conçu avec Next.js, Tailwind CSS &amp; Docker.
      </footer>
    </main>
  );
}

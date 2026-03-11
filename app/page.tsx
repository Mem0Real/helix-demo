import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Stats } from './components/Stats';
import { CTA } from './components/CTA';
import { Navigation } from './components/Navigation';
import { ScrollExperience } from './components/ScrollExperience';

export default function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation />
      <ScrollExperience />
      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <CTA />
    </div>
  );
}


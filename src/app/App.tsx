import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const workspaceImageUrl = "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc2NTk5MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About imageUrl={workspaceImageUrl} />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

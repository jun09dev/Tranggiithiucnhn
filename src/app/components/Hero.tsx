import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl shadow-xl">
            NMT
          </div>
          <h1 className="text-5xl md:text-6xl mb-4 text-white font-bold">
            {t('hero.name')}
          </h1>
          <p className="text-2xl md:text-3xl text-blue-100 mb-6">
            {t('hero.title')}
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            {t('hero.description')}
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button variant="default" size="lg">
            <Mail className="mr-2 h-5 w-5" />
            {t('hero.contact')}
          </Button>
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            Github
          </Button>
          <Button variant="outline" size="lg">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}

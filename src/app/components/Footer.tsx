import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">{t('hero.name')}</h3>
            <p className="text-gray-400">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">{t('footer.quicklinks')}</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                {t('nav.about')}
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">
                {t('nav.skills')}
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">
                {t('nav.projects')}
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                {t('nav.contact')}
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">{t('footer.connect')}</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  imageUrl: string;
}

export function About({ imageUrl }: AboutProps) {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12 text-white font-bold">{t('about.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src={imageUrl}
              alt="Workspace"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-white/90">
              {t('about.p1')}
            </p>
            <p className="text-lg text-white/90">
              {t('about.p2')}
            </p>
            <p className="text-lg text-white/90">
              {t('about.p3')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

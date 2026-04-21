import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-12 text-white font-bold">{t('contact.title')}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-6 text-white">{t('contact.subtitle')}</h3>
              <p className="text-white/90 mb-8">
                {t('contact.description')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/90">
                <Mail className="h-5 w-5 text-blue-300" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Phone className="h-5 w-5 text-blue-300" />
                <span>+84 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span>Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.form.title')}</CardTitle>
              <CardDescription>
                {t('contact.form.desc')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder={t('contact.form.name')} />
                </div>
                <div>
                  <Input type="email" placeholder={t('contact.form.email')} />
                </div>
                <div>
                  <Textarea 
                    placeholder={t('contact.form.message')} 
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t('contact.form.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

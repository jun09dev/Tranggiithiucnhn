import { Link } from 'react-router';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight } from 'lucide-react';

export function Education() {
  const { t } = useLanguage();
  
  const education = [
    {
      id: 'gachon',
      school: t('education.gachon'),
      major: t('education.gachon.major'),
      period: '2022 - 2026',
    },
    {
      id: 'dongguk',
      school: t('education.dongguk'),
      major: t('education.dongguk.major'),
      period: '2020 - 2022',
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-12 text-white font-bold">{t('education.title')}</h2>
        
        <div className="space-y-6">
          {education.map((edu) => (
            <Link key={edu.id} to={`/education/${edu.id}`}>
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-[1.01]">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div className="flex-1">
                      <CardTitle>{edu.school}</CardTitle>
                      <CardDescription className="text-lg mt-1">{edu.major}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{edu.period}</Badge>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight } from 'lucide-react';

export function Skills() {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      id: 'frontend',
      title: t('skills.frontend'),
      description: t('skills.frontend.desc'),
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS']
    },
    {
      id: 'backend',
      title: t('skills.backend'),
      description: t('skills.backend.desc'),
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'Java']
    },
    {
      id: 'devops',
      title: t('skills.devops'),
      description: t('skills.devops.desc'),
      skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Nginx']
    },
    {
      id: 'mobile',
      title: t('skills.mobile'),
      description: t('skills.mobile.desc'),
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">{t('skills.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Link key={category.id} to={`/skills/${category.id}`}>
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Projects() {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: t('projects.ecommerce'),
      description: t('projects.ecommerce.desc'),
      technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: t('projects.task'),
      description: t('projects.task.desc'),
      technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: t('projects.social'),
      description: t('projects.social.desc'),
      technologies: ['Vue.js', 'Python', 'Chart.js', 'Redis'],
      github: '#',
      demo: '#'
    },
    {
      title: t('projects.fitness'),
      description: t('projects.fitness.desc'),
      technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">{t('projects.title')}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="mr-2 h-4 w-4" />
                    {t('projects.code')}
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {t('projects.demo')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

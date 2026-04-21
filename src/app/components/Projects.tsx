import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'restaurant',
      title: t('projects.restaurant'),
      description: t('projects.restaurant.desc'),
      technologies: ['React', 'Java Spring Boot', 'MySQL', 'AWS']
    },
    {
      id: 'video',
      title: t('projects.video'),
      description: t('projects.video.desc'),
      technologies: ['React', 'Java Spring Boot', 'FFmpeg', 'AWS S3']
    },
    {
      id: 'music',
      title: t('projects.music'),
      description: t('projects.music.desc'),
      technologies: ['React', 'React Native', 'Java Spring Boot', 'MongoDB']
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12 text-white font-bold">{t('projects.title')}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription className="text-base mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 ml-2" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
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

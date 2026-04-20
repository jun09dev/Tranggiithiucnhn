import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Nền tảng thương mại điện tử đầy đủ tính năng với giỏ hàng, thanh toán, quản lý đơn hàng và dashboard admin.',
      technologies: ['React', 'Node.js', 'Stripe', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Ứng dụng quản lý công việc theo phong cách Kanban với real-time collaboration và notifications.',
      technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Dashboard phân tích và quản lý đa nền tảng mạng xã hội với biểu đồ trực quan và lập lịch đăng bài.',
      technologies: ['Vue.js', 'Python', 'Chart.js', 'Redis'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Mobile Fitness Tracker',
      description: 'Ứng dụng mobile theo dõi sức khỏe và hoạt động thể chất với tích hợp thiết bị đeo.',
      technologies: ['React Native', 'Firebase', 'HealthKit', 'Google Fit'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Dự Án Nổi Bật</h2>
        
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
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
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

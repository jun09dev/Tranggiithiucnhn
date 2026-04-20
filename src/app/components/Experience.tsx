import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Experience() {
  const experiences = [
    {
      company: 'Tech Startup XYZ',
      position: 'Senior Full Stack Developer',
      period: '2022 - Hiện tại',
      description: 'Phát triển và duy trì nền tảng SaaS phục vụ hơn 10,000 người dùng. Xây dựng hệ thống microservices và cải thiện hiệu suất ứng dụng lên 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      company: 'Digital Agency ABC',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Tham gia phát triển nhiều dự án web và mobile cho các khách hàng doanh nghiệp. Làm việc với đội ngũ đa quốc gia và quản lý một team nhỏ gồm 3 developers.',
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'React Native']
    },
    {
      company: 'Software Company DEF',
      position: 'Junior Developer',
      period: '2019 - 2020',
      description: 'Bắt đầu sự nghiệp với vai trò Junior Developer. Học hỏi và phát triển kỹ năng qua các dự án thực tế về quản lý nội dung và thương mại điện tử.',
      technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Kinh Nghiệm Làm Việc</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle>{exp.position}</CardTitle>
                    <CardDescription className="text-lg mt-1">{exp.company}</CardDescription>
                  </div>
                  <Badge variant="outline">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

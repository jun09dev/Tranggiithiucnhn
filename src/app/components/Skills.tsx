import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      description: 'Xây dựng giao diện người dùng hiện đại',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'HTML/CSS']
    },
    {
      title: 'Backend',
      description: 'Phát triển API và xử lý logic server',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'DevOps & Tools',
      description: 'Triển khai và quản lý ứng dụng',
      skills: ['Docker', 'AWS', 'Git', 'CI/CD', 'Linux', 'Nginx']
    },
    {
      title: 'Mobile',
      description: 'Phát triển ứng dụng di động',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase']
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Kỹ Năng</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
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
          ))}
        </div>
      </div>
    </section>
  );
}

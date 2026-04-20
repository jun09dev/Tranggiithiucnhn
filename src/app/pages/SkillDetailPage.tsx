import { useParams, Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { skillsData } from '../data/skillsData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

export function SkillDetailPage() {
  const { category } = useParams<{ category: string }>();
  const { language } = useLanguage();
  
  if (!category || !skillsData[category as keyof typeof skillsData]) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Skill not found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const data = skillsData[category as keyof typeof skillsData][language];
  
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/#skills">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'ko' ? '뒤로 가기' : language === 'vi' ? 'Quay lại' : 'Back'}
          </Button>
        </Link>
        
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl mb-4">{data.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{data.description}</p>
          <p className="text-lg text-gray-700">{data.overview}</p>
        </div>
        
        <div className="space-y-6">
          {data.skills.map((skill, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <CardTitle className="text-2xl">{skill.name}</CardTitle>
                  <Badge variant="default">{skill.level}</Badge>
                </div>
                <CardDescription className="text-base mt-2">
                  {skill.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      {language === 'ko' ? '경험' : language === 'vi' ? 'Kinh nghiệm' : 'Experience'}
                    </p>
                    <p className="text-gray-600">{skill.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      {language === 'ko' ? '관련 프로젝트' : language === 'vi' ? 'Dự án liên quan' : 'Related Projects'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {skill.projects.map((project, idx) => (
                        <Badge key={idx} variant="secondary">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

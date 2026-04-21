import { useParams, Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projectsData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const { language } = useLanguage();

  if (!projectId || !projectsData[projectId as keyof typeof projectsData]) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Project not found</h1>
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

  const data = projectsData[projectId as keyof typeof projectsData][language];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/#projects">
          <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'ko' ? '뒤로 가기' : language === 'vi' ? 'Quay lại' : 'Back'}
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl mb-4 text-white font-bold">{data.title}</h1>
          <p className="text-xl text-blue-100 mb-6">{data.description}</p>
          <div className="flex flex-wrap gap-2">
            {data.technologies.map((tech) => (
              <Badge key={tech} variant="default" className="text-base px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">
              {language === 'ko' ? '개요' : language === 'vi' ? 'Tổng quan' : 'Overview'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">{data.overview}</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">
              {language === 'ko' ? '주요 기능' : language === 'vi' ? 'Tính năng chính' : 'Key Features'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">
              {language === 'ko' ? '도전 과제' : language === 'vi' ? 'Thách thức' : 'Challenges'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {data.challenges.map((challenge, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {language === 'ko' ? '성과' : language === 'vi' ? 'Kết quả' : 'Outcomes'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {data.outcomes.map((outcome, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { useParams, Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { educationData } from '../data/educationData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ArrowLeft, Award, BookOpen, Users } from 'lucide-react';

export function EducationDetailPage() {
  const { school } = useParams<{ school: string }>();
  const { language } = useLanguage();
  
  if (!school || !educationData[school as keyof typeof educationData]) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl mb-4">School not found</h1>
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
  
  const data = educationData[school as keyof typeof educationData][language];
  
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/#education">
          <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'ko' ? '뒤로 가기' : language === 'vi' ? 'Quay lại' : 'Back'}
          </Button>
        </Link>

        <div className="mb-8">
          <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-4xl md:text-5xl mb-2 text-white font-bold">{data.school}</h1>
              <p className="text-2xl text-blue-100">{data.major}</p>
            </div>
            <Badge variant="outline" className="text-lg px-4 py-2 text-white border-white">{data.period}</Badge>
          </div>
          <p className="text-lg text-white/90">{data.description}</p>
        </div>
        
        <div className="space-y-6">
          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                {language === 'ko' ? '성취 및 수상' : language === 'vi' ? 'Thành tích và giải thưởng' : 'Achievements & Awards'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {data.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          {/* Courses */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {language === 'ko' ? '주요 과목' : language === 'vi' ? 'Các môn học chính' : 'Major Courses'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {data.courses.map((course, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Badge variant="secondary">{course}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {language === 'ko' ? '활동' : language === 'vi' ? 'Hoạt động' : 'Activities'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {data.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

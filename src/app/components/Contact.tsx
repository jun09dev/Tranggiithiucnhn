import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Liên Hệ</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-6">Hãy kết nối với tôi</h3>
              <p className="text-gray-600 mb-8">
                Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo 
                hoặc cơ hội hợp tác. Đừng ngần ngại liên hệ!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>contact@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>+84 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Hà Nội, Việt Nam</span>
              </div>
            </div>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Gửi tin nhắn</CardTitle>
              <CardDescription>
                Điền form bên dưới và tôi sẽ phản hồi sớm nhất có thể
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Input placeholder="Tên của bạn" />
                </div>
                <div>
                  <Input type="email" placeholder="Email của bạn" />
                </div>
                <div>
                  <Textarea 
                    placeholder="Tin nhắn của bạn" 
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Gửi tin nhắn
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

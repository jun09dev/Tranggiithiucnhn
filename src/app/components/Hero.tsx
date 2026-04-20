import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl">
            NT
          </div>
          <h1 className="text-5xl md:text-6xl mb-4">
            Nguyễn Văn A
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-6">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Chuyên xây dựng ứng dụng web hiện đại với React, Node.js và các công nghệ tiên tiến. 
            Đam mê tạo ra những sản phẩm có giá trị và trải nghiệm người dùng tốt nhất.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button variant="default" size="lg">
            <Mail className="mr-2 h-5 w-5" />
            Liên hệ
          </Button>
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            Github
          </Button>
          <Button variant="outline" size="lg">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}

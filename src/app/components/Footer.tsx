import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Nguyễn Văn A</h3>
            <p className="text-gray-400">
              Full Stack Developer đam mê tạo ra những sản phẩm công nghệ 
              có giá trị và trải nghiệm người dùng tuyệt vời.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Liên kết nhanh</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                Về tôi
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">
                Kỹ năng
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">
                Dự án
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Liên hệ
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Kết nối</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 Nguyễn Văn A. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'vi' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.skills': '기술',
    'nav.education': '학력',
    'nav.projects': '프로젝트',
    'nav.contact': '연락처',
    'nav.portfolio': '포트폴리오',
    'nav.language': '언어',
    
    // Hero
    'hero.name': '응우옌 반 A',
    'hero.title': '풀스택 개발자',
    'hero.description': 'React, Node.js 및 최신 기술로 현대적인 웹 애플리케이션을 구축하는 것을 전문으로 합니다. 가치 있는 제품과 최고의 사용자 경험을 만드는 것에 열정을 가지고 있습니다.',
    'hero.contact': '연락하기',
    
    // About
    'about.title': '소개',
    'about.subtitle': '저와 연결해보세요',
    'about.p1': '안녕하세요! 저는 웹 및 모바일 애플리케이션 개발 경험이 5년 이상인 풀스택 개발자입니다.',
    'about.p2': '사용자에게 실질적인 가치를 제공할 수 있는 기술 제품을 만드는 것에 대한 열정이 있습니다. 제 전문 분야는 프론트엔드와 백엔드 개발을 모두 포함하며, 다양한 기술 스택에서 유연하게 작업할 수 있습니다.',
    'about.p3': '코딩을 하지 않을 때는 새로운 기술을 탐구하고, 오픈 소스 커뮤니티에 기여하며, 기술 블로그를 통해 지식을 공유하는 것을 좋아합니다.',
    
    // Skills
    'skills.title': '기술',
    'skills.frontend': '프론트엔드',
    'skills.frontend.desc': '현대적인 사용자 인터페이스 구축',
    'skills.backend': '백엔드',
    'skills.backend.desc': 'API 개발 및 서버 로직 처리',
    'skills.devops': 'DevOps & 도구',
    'skills.devops.desc': '애플리케이션 배포 및 관리',
    'skills.mobile': '모바일',
    'skills.mobile.desc': '모바일 애플리케이션 개발',
    
    // Education
    'education.title': '학력',
    'education.dongguk': '동국대학교',
    'education.dongguk.major': '어학원',
    'education.gachon': '가천대학교',
    'education.gachon.major': '컴퓨터공학과',
    'education.present': '현재',
    
    // Projects
    'projects.title': '주요 프로젝트',
    'projects.ecommerce': '전자상거래 플랫폼',
    'projects.ecommerce.desc': '장바구니, 결제, 주문 관리 및 관리자 대시보드가 포함된 완전한 기능의 전자상거래 플랫폼입니다.',
    'projects.task': '작업 관리 앱',
    'projects.task.desc': '실시간 협업 및 알림 기능이 있는 칸반 스타일 작업 관리 애플리케이션입니다.',
    'projects.social': '소셜 미디어 대시보드',
    'projects.social.desc': '시각적 차트와 게시 일정 기능이 있는 다중 플랫폼 소셜 미디어 분석 및 관리 대시보드입니다.',
    'projects.fitness': '모바일 피트니스 트래커',
    'projects.fitness.desc': '웨어러블 기기 통합이 가능한 건강 및 신체 활동 추적 모바일 애플리케이션입니다.',
    'projects.code': '코드',
    'projects.demo': '데모',
    
    // Contact
    'contact.title': '연락처',
    'contact.subtitle': '저와 연결해보세요',
    'contact.description': '새로운 프로젝트, 창의적인 아이디어 또는 협업 기회에 대해 언제든지 이야기할 준비가 되어 있습니다. 주저하지 말고 연락주세요!',
    'contact.form.title': '메시지 보내기',
    'contact.form.desc': '아래 양식을 작성해 주시면 최대한 빨리 답변드리겠습니다',
    'contact.form.name': '이름',
    'contact.form.email': '이메일',
    'contact.form.message': '메시지',
    'contact.form.send': '메시지 보내기',
    
    // Footer
    'footer.description': '가치 있는 기술 제품과 뛰어난 사용자 경험을 만드는 것에 열정을 가진 풀스택 개발자입니다.',
    'footer.quicklinks': '빠른 링크',
    'footer.connect': '연결',
    'footer.rights': '© 2026 응우옌 반 A. All rights reserved.',
  },
  vi: {
    // Navigation
    'nav.home': 'Trang chủ',
    'nav.about': 'Về tôi',
    'nav.skills': 'Kỹ năng',
    'nav.education': 'Học vấn',
    'nav.projects': 'Dự án',
    'nav.contact': 'Liên hệ',
    'nav.portfolio': 'Portfolio',
    'nav.language': 'Ngôn ngữ',
    
    // Hero
    'hero.name': 'Nguyễn Văn A',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'Chuyên xây dựng ứng dụng web hiện đại với React, Node.js và các công nghệ tiên tiến. Đam mê tạo ra những sản phẩm có giá trị và trải nghiệm người dùng tốt nhất.',
    'hero.contact': 'Liên hệ',
    
    // About
    'about.title': 'Về Tôi',
    'about.subtitle': 'Hãy kết nối với tôi',
    'about.p1': 'Xin chào! Tôi là một Full Stack Developer với hơn 5 năm kinh nghiệm trong việc phát triển ứng dụng web và mobile.',
    'about.p2': 'Tôi có niềm đam mê mãnh liệt với việc tạo ra những sản phẩm công nghệ có thể mang lại giá trị thực sự cho người dùng. Chuyên môn của tôi bao gồm cả frontend và backend development, với khả năng làm việc linh hoạt trên nhiều stack công nghệ khác nhau.',
    'about.p3': 'Khi không coding, tôi thích tìm hiểu các công nghệ mới, đóng góp cho cộng đồng open source và chia sẻ kiến thức thông qua các bài viết kỹ thuật.',
    
    // Skills
    'skills.title': 'Kỹ Năng',
    'skills.frontend': 'Frontend',
    'skills.frontend.desc': 'Xây dựng giao diện người dùng hiện đại',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'Phát triển API và xử lý logic server',
    'skills.devops': 'DevOps & Tools',
    'skills.devops.desc': 'Triển khai và quản lý ứng dụng',
    'skills.mobile': 'Mobile',
    'skills.mobile.desc': 'Phát triển ứng dụng di động',
    
    // Education
    'education.title': 'Học Vấn',
    'education.dongguk': 'Trường Dongguk',
    'education.dongguk.major': 'Viện ngôn ngữ',
    'education.gachon': 'Trường Gachon',
    'education.gachon.major': 'Khoa máy tính',
    'education.present': 'Hiện tại',
    
    // Projects
    'projects.title': 'Dự Án Nổi Bật',
    'projects.ecommerce': 'E-Commerce Platform',
    'projects.ecommerce.desc': 'Nền tảng thương mại điện tử đầy đủ tính năng với giỏ hàng, thanh toán, quản lý đơn hàng và dashboard admin.',
    'projects.task': 'Task Management App',
    'projects.task.desc': 'Ứng dụng quản lý công việc theo phong cách Kanban với real-time collaboration và notifications.',
    'projects.social': 'Social Media Dashboard',
    'projects.social.desc': 'Dashboard phân tích và quản lý đa nền tảng mạng xã hội với biểu đồ trực quan và lập lịch đăng bài.',
    'projects.fitness': 'Mobile Fitness Tracker',
    'projects.fitness.desc': 'Ứng dụng mobile theo dõi sức khỏe và hoạt động thể chất với tích hợp thiết bị đeo.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    
    // Contact
    'contact.title': 'Liên Hệ',
    'contact.subtitle': 'Hãy kết nối với tôi',
    'contact.description': 'Tôi luôn sẵn sàng thảo luận về các dự án mới, ý tưởng sáng tạo hoặc cơ hội hợp tác. Đừng ngần ngại liên hệ!',
    'contact.form.title': 'Gửi tin nhắn',
    'contact.form.desc': 'Điền form bên dưới và tôi sẽ phản hồi sớm nhất có thể',
    'contact.form.name': 'Tên của bạn',
    'contact.form.email': 'Email của bạn',
    'contact.form.message': 'Tin nhắn của bạn',
    'contact.form.send': 'Gửi tin nhắn',
    
    // Footer
    'footer.description': 'Full Stack Developer đam mê tạo ra những sản phẩm công nghệ có giá trị và trải nghiệm người dùng tuyệt vời.',
    'footer.quicklinks': 'Liên kết nhanh',
    'footer.connect': 'Kết nối',
    'footer.rights': '© 2026 Nguyễn Văn A. All rights reserved.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.portfolio': 'Portfolio',
    'nav.language': 'Language',
    
    // Hero
    'hero.name': 'Nguyen Van A',
    'hero.title': 'Full Stack Developer',
    'hero.description': 'Specialized in building modern web applications with React, Node.js, and cutting-edge technologies. Passionate about creating valuable products and the best user experiences.',
    'hero.contact': 'Contact',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': "Let's connect",
    'about.p1': 'Hello! I am a Full Stack Developer with over 5 years of experience in web and mobile application development.',
    'about.p2': 'I have a strong passion for creating technology products that can bring real value to users. My expertise includes both frontend and backend development, with the ability to work flexibly across various technology stacks.',
    'about.p3': 'When not coding, I enjoy exploring new technologies, contributing to the open source community, and sharing knowledge through technical articles.',
    
    // Skills
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.frontend.desc': 'Building modern user interfaces',
    'skills.backend': 'Backend',
    'skills.backend.desc': 'API development and server logic',
    'skills.devops': 'DevOps & Tools',
    'skills.devops.desc': 'Application deployment and management',
    'skills.mobile': 'Mobile',
    'skills.mobile.desc': 'Mobile application development',
    
    // Education
    'education.title': 'Education',
    'education.dongguk': 'Dongguk University',
    'education.dongguk.major': 'Language Institute',
    'education.gachon': 'Gachon University',
    'education.gachon.major': 'Computer Science',
    'education.present': 'Present',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.ecommerce': 'E-Commerce Platform',
    'projects.ecommerce.desc': 'Full-featured e-commerce platform with shopping cart, payment, order management, and admin dashboard.',
    'projects.task': 'Task Management App',
    'projects.task.desc': 'Kanban-style task management application with real-time collaboration and notifications.',
    'projects.social': 'Social Media Dashboard',
    'projects.social.desc': 'Multi-platform social media analytics and management dashboard with visual charts and post scheduling.',
    'projects.fitness': 'Mobile Fitness Tracker',
    'projects.fitness.desc': 'Mobile application for tracking health and physical activities with wearable device integration.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': "Let's connect",
    'contact.description': 'I am always ready to discuss new projects, creative ideas, or collaboration opportunities. Don\'t hesitate to reach out!',
    'contact.form.title': 'Send a message',
    'contact.form.desc': 'Fill out the form below and I will respond as soon as possible',
    'contact.form.name': 'Your name',
    'contact.form.email': 'Your email',
    'contact.form.message': 'Your message',
    'contact.form.send': 'Send message',
    
    // Footer
    'footer.description': 'Full Stack Developer passionate about creating valuable technology products and excellent user experiences.',
    'footer.quicklinks': 'Quick Links',
    'footer.connect': 'Connect',
    'footer.rights': '© 2026 Nguyen Van A. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko'); // Mặc định là tiếng Hàn

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ko] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

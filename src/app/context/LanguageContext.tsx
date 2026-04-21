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
    'hero.name': '응우옌 민 투언',
    'hero.title': '풀스택 개발자가 되는 길',
    'hero.description': 'React 및 최신 기술로 현대적인 웹 애플리케이션을 구축하고 칩 프로그래밍과 같은 프로젝트를 수행할 수 있습니다. 가치 있는 제품과 최고의 사용자 경험을 만드는 것에 열정을 가지고 있습니다.',
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
    'projects.restaurant': '레스토랑 예약 시스템',
    'projects.restaurant.desc': '실시간 테이블 예약, 메뉴 관리 및 고객 리뷰 기능이 포함된 완전한 기능의 레스토랑 예약 플랫폼입니다.',
    'projects.video': '비디오 스트리밍 플랫폼',
    'projects.video.desc': '비디오 업로드, 스트리밍, 재생 목록 관리 및 사용자 상호작용 기능이 있는 비디오 스트리밍 서비스입니다.',
    'projects.music': '음악 앱',
    'projects.music.desc': 'Zing MP3와 같은 음악 스트리밍, 재생 목록 생성 및 음악 검색 기능이 있는 음악 플레이어 애플리케이션입니다.',
    'projects.viewdetails': '자세히 보기',
    
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
    'footer.rights': '© 2026 응우옌 민 투언. All rights reserved.',
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
    'hero.name': 'Nguyễn Minh Tuấn',
    'hero.title': 'Trên con đường trở thành Full Stack Developer',
    'hero.description': 'Chuyên xây dựng ứng dụng web hiện đại với React và các công nghệ tiên tiến, có thể làm các dự án như lập trình chip. Đam mê tạo ra những sản phẩm có giá trị và trải nghiệm người dùng tốt nhất.',
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
    'projects.restaurant': 'Restaurant Reservation System',
    'projects.restaurant.desc': 'Nền tảng đặt bàn nhà hàng đầy đủ tính năng với đặt bàn theo thời gian thực, quản lý thực đơn và đánh giá của khách hàng.',
    'projects.video': 'Video Streaming Platform',
    'projects.video.desc': 'Dịch vụ phát trực tuyến video với upload video, streaming, quản lý playlist và tương tác người dùng.',
    'projects.music': 'Music App',
    'projects.music.desc': 'Ứng dụng nghe nhạc với tính năng phát nhạc trực tuyến, tạo playlist và tìm kiếm nhạc như Zing MP3.',
    'projects.viewdetails': 'Xem chi tiết',
    
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
    'footer.rights': '© 2026 Nguyễn Minh Tuấn. All rights reserved.',
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
    'hero.name': 'Nguyen Minh Tuan',
    'hero.title': 'On the path to becoming a Full Stack Developer',
    'hero.description': 'Specialized in building modern web applications with React and cutting-edge technologies, capable of working on projects like chip programming. Passionate about creating valuable products and the best user experiences.',
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
    'projects.restaurant': 'Restaurant Reservation System',
    'projects.restaurant.desc': 'Full-featured restaurant reservation platform with real-time table booking, menu management, and customer reviews.',
    'projects.video': 'Video Streaming Platform',
    'projects.video.desc': 'Video streaming service with video upload, streaming, playlist management, and user interactions.',
    'projects.music': 'Music App',
    'projects.music.desc': 'Music player application with music streaming, playlist creation, and music search like Zing MP3.',
    'projects.viewdetails': 'View Details',
    
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
    'footer.rights': '© 2026 Nguyen Minh Tuan. All rights reserved.',
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

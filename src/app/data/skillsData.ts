export const skillsData = {
  frontend: {
    ko: {
      title: '프론트엔드',
      description: '현대적인 사용자 인터페이스 구축',
      overview: '프론트엔드 개발은 사용자가 직접 상호작용하는 웹 애플리케이션의 시각적 부분을 만드는 것입니다.',
      skills: [
        {
          name: 'JavaScript',
          level: 'Expert',
          description: 'JavaScript는 웹 개발의 핵심 프로그래밍 언어입니다.',
          topics: ['ES6+ 기능', '비동기 프로그래밍 (Promises, Async/Await)', '함수형 프로그래밍', 'DOM 조작', '이벤트 처리', '클로저와 스코프', '프로토타입과 상속', 'JavaScript 디자인 패턴']
        },
        {
          name: 'React',
          level: 'Expert',
          description: 'React는 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리입니다.',
          topics: ['컴포넌트 기반 아키텍처', 'Hooks (useState, useEffect, useContext)', '가상 DOM', 'State 관리', 'Props와 컴포넌트 통신', 'React Router', 'Context API', '성능 최적화']
        },
        {
          name: 'HTML/CSS',
          level: 'Expert',
          description: '웹 개발의 기초인 HTML과 CSS에 대한 깊은 이해.',
          topics: ['시맨틱 HTML', 'CSS Flexbox와 Grid', '반응형 디자인', 'CSS 애니메이션', 'SASS/SCSS', 'CSS 변수', '접근성 (Accessibility)', 'SEO 최적화']
        }
      ]
    },
    vi: {
      title: 'Frontend',
      description: 'Xây dựng giao diện người dùng hiện đại',
      overview: 'Phát triển Frontend là việc tạo ra phần giao diện trực quan mà người dùng tương tác trực tiếp trong ứng dụng web.',
      skills: [
        {
          name: 'JavaScript',
          level: 'Chuyên gia',
          description: 'JavaScript là ngôn ngữ lập trình cốt lõi của web development.',
          topics: ['Tính năng ES6+', 'Lập trình bất đồng bộ (Promises, Async/Await)', 'Lập trình hàm', 'Thao tác DOM', 'Xử lý sự kiện', 'Closure và Scope', 'Prototype và Kế thừa', 'JavaScript Design Patterns']
        },
        {
          name: 'React',
          level: 'Chuyên gia',
          description: 'React là thư viện JavaScript để xây dựng giao diện người dùng.',
          topics: ['Kiến trúc Component-based', 'Hooks (useState, useEffect, useContext)', 'Virtual DOM', 'Quản lý State', 'Props và Component Communication', 'React Router', 'Context API', 'Tối ưu hiệu suất']
        },
        {
          name: 'HTML/CSS',
          level: 'Chuyên gia',
          description: 'Hiểu biết sâu về HTML và CSS - nền tảng của web development.',
          topics: ['Semantic HTML', 'CSS Flexbox và Grid', 'Responsive Design', 'CSS Animation', 'SASS/SCSS', 'CSS Variables', 'Accessibility', 'SEO Optimization']
        }
      ]
    },
    en: {
      title: 'Frontend',
      description: 'Building modern user interfaces',
      overview: 'Frontend development is creating the visual part of web applications that users interact with directly.',
      skills: [
        {
          name: 'JavaScript',
          level: 'Expert',
          description: 'JavaScript is the core programming language of web development.',
          topics: ['ES6+ Features', 'Asynchronous Programming (Promises, Async/Await)', 'Functional Programming', 'DOM Manipulation', 'Event Handling', 'Closures and Scope', 'Prototypes and Inheritance', 'JavaScript Design Patterns']
        },
        {
          name: 'React',
          level: 'Expert',
          description: 'React is a JavaScript library for building user interfaces.',
          topics: ['Component-based Architecture', 'Hooks (useState, useEffect, useContext)', 'Virtual DOM', 'State Management', 'Props and Component Communication', 'React Router', 'Context API', 'Performance Optimization']
        },
        {
          name: 'HTML/CSS',
          level: 'Expert',
          description: 'Deep understanding of HTML and CSS - the foundation of web development.',
          topics: ['Semantic HTML', 'CSS Flexbox and Grid', 'Responsive Design', 'CSS Animation', 'SASS/SCSS', 'CSS Variables', 'Accessibility', 'SEO Optimization']
        }
      ]
    }
  },
  backend: {
    ko: {
      title: '백엔드',
      description: 'API 개발 및 서버 로직 처리',
      overview: '백엔드 개발은 서버, 데이터베이스 및 애플리케이션 로직을 구축하고 관리하는 것입니다.',
      skills: [
        {
          name: 'Java',
          level: 'Intermediate',
          description: 'Java는 엔터프라이즈급 애플리케이션 개발을 위한 강력한 객체 지향 프로그래밍 언어입니다.',
          topics: ['객체 지향 프로그래밍 (OOP)', '클래스와 객체', '상속과 다형성', '인터페이스와 추상 클래스', '컬렉션 프레임워크', '예외 처리', 'Java Stream API', '멀티스레딩', 'Spring Framework 기초']
        },
        {
          name: 'C',
          level: 'Advanced',
          description: 'C는 시스템 프로그래밍과 임베디드 시스템 개발을 위한 저수준 프로그래밍 언어입니다.',
          topics: ['포인터와 메모리 관리', '구조체와 공용체', '파일 입출력', '동적 메모리 할당', '데이터 구조 구현', '시스템 프로그래밍', '비트 연산', '전처리기']
        },
        {
          name: 'C++',
          level: 'Advanced',
          description: 'C++는 객체 지향과 시스템 프로그래밍을 결합한 강력한 프로그래밍 언어입니다.',
          topics: ['객체 지향 프로그래밍', '클래스와 객체', '템플릿', 'STL (Standard Template Library)', '연산자 오버로딩', '상속과 다형성', '스마트 포인터', '예외 처리', 'RAII 패턴']
        }
      ]
    },
    vi: {
      title: 'Backend',
      description: 'Phát triển API và xử lý logic server',
      overview: 'Phát triển Backend là xây dựng và quản lý server, database và logic ứng dụng.',
      skills: [
        {
          name: 'Java',
          level: 'Trung cấp',
          description: 'Java là ngôn ngữ lập trình hướng đối tượng mạnh mẽ cho phát triển ứng dụng cấp doanh nghiệp.',
          topics: ['Lập trình hướng đối tượng (OOP)', 'Class và Object', 'Kế thừa và Đa hình', 'Interface và Abstract Class', 'Collections Framework', 'Exception Handling', 'Java Stream API', 'Đa luồng (Multithreading)', 'Spring Framework cơ bản']
        },
        {
          name: 'C',
          level: 'Nâng cao',
          description: 'C là ngôn ngữ lập trình cấp thấp cho lập trình hệ thống và embedded systems.',
          topics: ['Con trỏ và quản lý bộ nhớ', 'Struct và Union', 'File I/O', 'Cấp phát bộ nhớ động', 'Cài đặt cấu trúc dữ liệu', 'System Programming', 'Bit Operations', 'Preprocessor']
        },
        {
          name: 'C++',
          level: 'Nâng cao',
          description: 'C++ là ngôn ngữ lập trình mạnh mẽ kết hợp OOP và system programming.',
          topics: ['Lập trình hướng đối tượng', 'Class và Object', 'Templates', 'STL (Standard Template Library)', 'Operator Overloading', 'Kế thừa và Đa hình', 'Smart Pointers', 'Exception Handling', 'RAII Pattern']
        }
      ]
    },
    en: {
      title: 'Backend',
      description: 'API development and server logic',
      overview: 'Backend development is building and managing servers, databases, and application logic.',
      skills: [
        {
          name: 'Java',
          level: 'Intermediate',
          description: 'Java is a powerful object-oriented programming language for enterprise-level application development.',
          topics: ['Object-Oriented Programming (OOP)', 'Classes and Objects', 'Inheritance and Polymorphism', 'Interfaces and Abstract Classes', 'Collections Framework', 'Exception Handling', 'Java Stream API', 'Multithreading', 'Spring Framework Basics']
        },
        {
          name: 'C',
          level: 'Advanced',
          description: 'C is a low-level programming language for system programming and embedded systems.',
          topics: ['Pointers and Memory Management', 'Structs and Unions', 'File I/O', 'Dynamic Memory Allocation', 'Data Structure Implementation', 'System Programming', 'Bit Operations', 'Preprocessor']
        },
        {
          name: 'C++',
          level: 'Advanced',
          description: 'C++ is a powerful programming language combining OOP and system programming.',
          topics: ['Object-Oriented Programming', 'Classes and Objects', 'Templates', 'STL (Standard Template Library)', 'Operator Overloading', 'Inheritance and Polymorphism', 'Smart Pointers', 'Exception Handling', 'RAII Pattern']
        }
      ]
    }
  },
  mobile: {
    ko: {
      title: '모바일',
      description: '모바일 애플리케이션 개발',
      overview: '모바일 개발은 iOS 및 Android 플랫폼을 위한 애플리케이션을 만드는 것입니다.',
      skills: [
        {
          name: 'React Native',
          level: 'Advanced',
          description: 'React Native는 JavaScript로 네이티브 모바일 앱을 개발할 수 있는 프레임워크입니다.',
          topics: ['컴포넌트 기반 개발', 'React Native Navigation', 'Native Modules', 'AsyncStorage', 'API 통합', '성능 최적화', 'Platform-specific Code', 'React Native CLI']
        },
        {
          name: 'Flutter',
          level: 'Intermediate',
          description: 'Flutter는 Google의 UI 툴킷으로 하나의 코드베이스로 모바일, 웹, 데스크톱 앱을 만들 수 있습니다.',
          topics: ['Dart 프로그래밍', 'Widget Tree', 'State Management (Provider, Riverpod)', 'Material Design', 'Flutter Navigation', 'Hot Reload', 'Platform Channels', 'Flutter Packages']
        },
        {
          name: 'iOS Development',
          level: 'Intermediate',
          description: 'Swift와 iOS SDK를 사용한 네이티브 iOS 앱 개발.',
          topics: ['Swift 프로그래밍', 'UIKit', 'SwiftUI', 'Auto Layout', 'Core Data', 'Networking', 'App Lifecycle', 'iOS Design Patterns']
        },
        {
          name: 'Android Development',
          level: 'Intermediate',
          description: 'Kotlin과 Android SDK를 사용한 네이티브 Android 앱 개발.',
          topics: ['Kotlin 프로그래밍', 'Android Components', 'Jetpack Compose', 'Material Design', 'Room Database', 'Networking', 'Android Lifecycle', 'MVVM Pattern']
        }
      ]
    },
    vi: {
      title: 'Mobile',
      description: 'Phát triển ứng dụng di động',
      overview: 'Phát triển Mobile là tạo ứng dụng cho các nền tảng iOS và Android.',
      skills: [
        {
          name: 'React Native',
          level: 'Nâng cao',
          description: 'React Native là framework cho phép phát triển ứng dụng mobile native bằng JavaScript.',
          topics: ['Component-based Development', 'React Native Navigation', 'Native Modules', 'AsyncStorage', 'API Integration', 'Performance Optimization', 'Platform-specific Code', 'React Native CLI']
        },
        {
          name: 'Flutter',
          level: 'Trung cấp',
          description: 'Flutter là bộ công cụ UI của Google cho phép tạo ứng dụng mobile, web và desktop từ một codebase.',
          topics: ['Dart Programming', 'Widget Tree', 'State Management (Provider, Riverpod)', 'Material Design', 'Flutter Navigation', 'Hot Reload', 'Platform Channels', 'Flutter Packages']
        },
        {
          name: 'iOS Development',
          level: 'Trung cấp',
          description: 'Phát triển ứng dụng iOS native sử dụng Swift và iOS SDK.',
          topics: ['Swift Programming', 'UIKit', 'SwiftUI', 'Auto Layout', 'Core Data', 'Networking', 'App Lifecycle', 'iOS Design Patterns']
        },
        {
          name: 'Android Development',
          level: 'Trung cấp',
          description: 'Phát triển ứng dụng Android native sử dụng Kotlin và Android SDK.',
          topics: ['Kotlin Programming', 'Android Components', 'Jetpack Compose', 'Material Design', 'Room Database', 'Networking', 'Android Lifecycle', 'MVVM Pattern']
        }
      ]
    },
    en: {
      title: 'Mobile',
      description: 'Mobile application development',
      overview: 'Mobile development is creating applications for iOS and Android platforms.',
      skills: [
        {
          name: 'React Native',
          level: 'Advanced',
          description: 'React Native is a framework for building native mobile apps using JavaScript.',
          topics: ['Component-based Development', 'React Native Navigation', 'Native Modules', 'AsyncStorage', 'API Integration', 'Performance Optimization', 'Platform-specific Code', 'React Native CLI']
        },
        {
          name: 'Flutter',
          level: 'Intermediate',
          description: 'Flutter is Google\'s UI toolkit for building mobile, web, and desktop apps from a single codebase.',
          topics: ['Dart Programming', 'Widget Tree', 'State Management (Provider, Riverpod)', 'Material Design', 'Flutter Navigation', 'Hot Reload', 'Platform Channels', 'Flutter Packages']
        },
        {
          name: 'iOS Development',
          level: 'Intermediate',
          description: 'Native iOS app development using Swift and iOS SDK.',
          topics: ['Swift Programming', 'UIKit', 'SwiftUI', 'Auto Layout', 'Core Data', 'Networking', 'App Lifecycle', 'iOS Design Patterns']
        },
        {
          name: 'Android Development',
          level: 'Intermediate',
          description: 'Native Android app development using Kotlin and Android SDK.',
          topics: ['Kotlin Programming', 'Android Components', 'Jetpack Compose', 'Material Design', 'Room Database', 'Networking', 'Android Lifecycle', 'MVVM Pattern']
        }
      ]
    }
  },
  devops: {
    ko: {
      title: 'DevOps & 도구',
      description: '애플리케이션 배포 및 관리',
      overview: 'DevOps는 개발과 운영을 결합하여 애플리케이션의 배포와 관리를 자동화하고 최적화합니다.',
      skills: [
        {
          name: 'Docker',
          level: 'Advanced',
          description: 'Docker는 컨테이너화를 통해 애플리케이션을 패키징하고 배포하는 플랫폼입니다.',
          topics: ['Docker 이미지 생성', 'Dockerfile 작성', '컨테이너 관리', 'Docker Compose', '볼륨 관리', '네트워크 설정', 'Docker Hub', '멀티스테이지 빌드']
        },
        {
          name: 'AWS',
          level: 'Advanced',
          description: 'Amazon Web Services를 사용한 클라우드 인프라 구축 및 관리.',
          topics: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudWatch', 'VPC', 'IAM', 'CloudFront']
        },
        {
          name: 'Git',
          level: 'Expert',
          description: 'Git은 분산 버전 관리 시스템으로 코드 협업의 핵심 도구입니다.',
          topics: ['버전 관리', '브랜치 전략', 'Merge와 Rebase', 'Git Flow', 'Pull Request', 'Conflict 해결', 'Git Hooks', 'Commit 관리']
        },
        {
          name: 'Linux',
          level: 'Advanced',
          description: 'Linux 서버 관리 및 쉘 스크립팅.',
          topics: ['Shell 명령어', 'Bash 스크립팅', '파일 시스템', '프로세스 관리', '사용자 관리', '네트워크 설정', '패키지 관리', '시스템 모니터링']
        }
      ]
    },
    vi: {
      title: 'DevOps & Tools',
      description: 'Triển khai và quản lý ứng dụng',
      overview: 'DevOps kết hợp phát triển và vận hành để tự động hóa và tối ưu hóa việc triển khai và quản lý ứng dụng.',
      skills: [
        {
          name: 'Docker',
          level: 'Nâng cao',
          description: 'Docker là nền tảng đóng gói và triển khai ứng dụng thông qua containerization.',
          topics: ['Tạo Docker Image', 'Viết Dockerfile', 'Quản lý Container', 'Docker Compose', 'Quản lý Volume', 'Network Configuration', 'Docker Hub', 'Multi-stage Build']
        },
        {
          name: 'AWS',
          level: 'Nâng cao',
          description: 'Xây dựng và quản lý hạ tầng cloud sử dụng Amazon Web Services.',
          topics: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudWatch', 'VPC', 'IAM', 'CloudFront']
        },
        {
          name: 'Git',
          level: 'Chuyên gia',
          description: 'Git là hệ thống quản lý phiên bản phân tán, công cụ cốt lõi cho cộng tác code.',
          topics: ['Version Control', 'Branching Strategy', 'Merge và Rebase', 'Git Flow', 'Pull Request', 'Conflict Resolution', 'Git Hooks', 'Commit Management']
        },
        {
          name: 'Linux',
          level: 'Nâng cao',
          description: 'Quản lý server Linux và shell scripting.',
          topics: ['Shell Commands', 'Bash Scripting', 'File System', 'Process Management', 'User Management', 'Network Configuration', 'Package Management', 'System Monitoring']
        }
      ]
    },
    en: {
      title: 'DevOps & Tools',
      description: 'Application deployment and management',
      overview: 'DevOps combines development and operations to automate and optimize application deployment and management.',
      skills: [
        {
          name: 'Docker',
          level: 'Advanced',
          description: 'Docker is a platform for packaging and deploying applications through containerization.',
          topics: ['Docker Image Creation', 'Dockerfile Writing', 'Container Management', 'Docker Compose', 'Volume Management', 'Network Configuration', 'Docker Hub', 'Multi-stage Build']
        },
        {
          name: 'AWS',
          level: 'Advanced',
          description: 'Building and managing cloud infrastructure using Amazon Web Services.',
          topics: ['EC2', 'S3', 'RDS', 'Lambda', 'CloudWatch', 'VPC', 'IAM', 'CloudFront']
        },
        {
          name: 'Git',
          level: 'Expert',
          description: 'Git is a distributed version control system, the core tool for code collaboration.',
          topics: ['Version Control', 'Branching Strategy', 'Merge and Rebase', 'Git Flow', 'Pull Request', 'Conflict Resolution', 'Git Hooks', 'Commit Management']
        },
        {
          name: 'Linux',
          level: 'Advanced',
          description: 'Linux server management and shell scripting.',
          topics: ['Shell Commands', 'Bash Scripting', 'File System', 'Process Management', 'User Management', 'Network Configuration', 'Package Management', 'System Monitoring']
        }
      ]
    }
  }
};

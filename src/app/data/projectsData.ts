export const projectsData = {
  restaurant: {
    ko: {
      title: '레스토랑 예약 시스템',
      description: '실시간 테이블 예약, 메뉴 관리 및 고객 리뷰 기능이 포함된 완전한 기능의 레스토랑 예약 플랫폼입니다.',
      overview: '이 프로젝트는 레스토랑의 예약 관리를 자동화하고 고객에게 원활한 예약 경험을 제공하는 웹 애플리케이션입니다.',
      features: [
        {
          title: '실시간 테이블 예약',
          description: '고객은 실시간으로 사용 가능한 테이블을 확인하고 예약할 수 있습니다.'
        },
        {
          title: '메뉴 관리',
          description: '레스토랑 관리자는 메뉴를 쉽게 추가, 수정, 삭제할 수 있습니다.'
        },
        {
          title: '고객 리뷰',
          description: '고객은 방문 후 리뷰를 남기고 평점을 매길 수 있습니다.'
        },
        {
          title: '예약 알림',
          description: '이메일 및 SMS를 통한 예약 확인 및 리마인더 알림.'
        },
        {
          title: '관리자 대시보드',
          description: '예약 현황, 테이블 상태, 고객 데이터를 한눈에 볼 수 있는 대시보드.'
        }
      ],
      technologies: ['React', 'Java Spring Boot', 'MySQL', 'AWS'],
      challenges: [
        '실시간 테이블 가용성을 정확하게 추적하고 동시 예약을 방지하는 것',
        '효율적인 알림 시스템 구현',
        '사용자 친화적인 예약 인터페이스 디자인'
      ],
      outcomes: [
        '레스토랑의 예약 관리 효율성 40% 향상',
        '고객 만족도 평가 4.8/5.0',
        '예약 노쇼율 30% 감소'
      ]
    },
    vi: {
      title: 'Restaurant Reservation System',
      description: 'Nền tảng đặt bàn nhà hàng đầy đủ tính năng với đặt bàn theo thời gian thực, quản lý thực đơn và đánh giá của khách hàng.',
      overview: 'Dự án này là một ứng dụng web tự động hóa quản lý đặt bàn cho nhà hàng và mang lại trải nghiệm đặt bàn mượt mà cho khách hàng.',
      features: [
        {
          title: 'Đặt bàn theo thời gian thực',
          description: 'Khách hàng có thể kiểm tra và đặt bàn trống theo thời gian thực.'
        },
        {
          title: 'Quản lý thực đơn',
          description: 'Quản trị viên nhà hàng có thể dễ dàng thêm, sửa, xóa món ăn trong thực đơn.'
        },
        {
          title: 'Đánh giá khách hàng',
          description: 'Khách hàng có thể để lại đánh giá và xếp hạng sau khi ghé thăm.'
        },
        {
          title: 'Thông báo đặt bàn',
          description: 'Xác nhận đặt bàn và nhắc nhở qua email và SMS.'
        },
        {
          title: 'Dashboard quản trị',
          description: 'Bảng điều khiển hiển thị tình trạng đặt bàn, trạng thái bàn và dữ liệu khách hàng.'
        }
      ],
      technologies: ['React', 'Java Spring Boot', 'MySQL', 'AWS'],
      challenges: [
        'Theo dõi chính xác tình trạng bàn trống và ngăn chặn đặt bàn trùng lặp',
        'Triển khai hệ thống thông báo hiệu quả',
        'Thiết kế giao diện đặt bàn thân thiện với người dùng'
      ],
      outcomes: [
        'Cải thiện hiệu quả quản lý đặt bàn của nhà hàng 40%',
        'Đánh giá hài lòng của khách hàng 4.8/5.0',
        'Giảm tỷ lệ khách không đến 30%'
      ]
    },
    en: {
      title: 'Restaurant Reservation System',
      description: 'Full-featured restaurant reservation platform with real-time table booking, menu management, and customer reviews.',
      overview: 'This project is a web application that automates reservation management for restaurants and provides a seamless booking experience for customers.',
      features: [
        {
          title: 'Real-time Table Booking',
          description: 'Customers can check and book available tables in real-time.'
        },
        {
          title: 'Menu Management',
          description: 'Restaurant administrators can easily add, edit, and remove menu items.'
        },
        {
          title: 'Customer Reviews',
          description: 'Customers can leave reviews and ratings after their visit.'
        },
        {
          title: 'Booking Notifications',
          description: 'Reservation confirmation and reminders via email and SMS.'
        },
        {
          title: 'Admin Dashboard',
          description: 'Dashboard displaying reservation status, table status, and customer data at a glance.'
        }
      ],
      technologies: ['React', 'Java Spring Boot', 'MySQL', 'AWS'],
      challenges: [
        'Accurately tracking table availability and preventing concurrent bookings',
        'Implementing an efficient notification system',
        'Designing a user-friendly booking interface'
      ],
      outcomes: [
        '40% improvement in restaurant reservation management efficiency',
        '4.8/5.0 customer satisfaction rating',
        '30% reduction in no-show rate'
      ]
    }
  },
  video: {
    ko: {
      title: '비디오 스트리밍 플랫폼',
      description: '비디오 업로드, 스트리밍, 재생 목록 관리 및 사용자 상호작용 기능이 있는 비디오 스트리밍 서비스입니다.',
      overview: 'YouTube와 유사한 비디오 공유 및 스트리밍 플랫폼으로, 사용자가 비디오를 업로드하고 시청하며 상호작용할 수 있습니다.',
      features: [
        {
          title: '비디오 업로드 및 인코딩',
          description: '다양한 형식의 비디오를 업로드하고 자동으로 최적화된 형식으로 인코딩합니다.'
        },
        {
          title: '적응형 스트리밍',
          description: '사용자의 네트워크 속도에 따라 자동으로 비디오 품질을 조정합니다.'
        },
        {
          title: '재생 목록 관리',
          description: '사용자는 자신만의 재생 목록을 만들고 관리할 수 있습니다.'
        },
        {
          title: '댓글 및 좋아요',
          description: '비디오에 댓글을 달고 좋아요를 표시할 수 있는 소셜 기능.'
        },
        {
          title: '검색 및 추천',
          description: '강력한 검색 기능과 AI 기반 비디오 추천 시스템.'
        }
      ],
      technologies: ['React', 'Java Spring Boot', 'FFmpeg', 'AWS S3', 'CloudFront'],
      challenges: [
        '대용량 비디오 파일의 효율적인 업로드 및 스토리지 관리',
        '적응형 비트레이트 스트리밍 구현',
        '확장 가능한 인코딩 파이프라인 구축'
      ],
      outcomes: [
        '월간 활성 사용자 10만 명 달성',
        '평균 비디오 로딩 시간 2초 이하',
        '99.9% 업타임 달성'
      ]
    },
    vi: {
      title: 'Video Streaming Platform',
      description: 'Dịch vụ phát trực tuyến video với upload video, streaming, quản lý playlist và tương tác người dùng.',
      overview: 'Nền tảng chia sẻ và phát trực tuyến video tương tự YouTube, cho phép người dùng tải lên, xem và tương tác với video.',
      features: [
        {
          title: 'Upload và Encode Video',
          description: 'Tải lên video nhiều định dạng và tự động encode sang định dạng tối ưu.'
        },
        {
          title: 'Adaptive Streaming',
          description: 'Tự động điều chỉnh chất lượng video theo tốc độ mạng của người dùng.'
        },
        {
          title: 'Quản lý Playlist',
          description: 'Người dùng có thể tạo và quản lý danh sách phát của riêng mình.'
        },
        {
          title: 'Comment và Like',
          description: 'Tính năng xã hội cho phép bình luận và thích video.'
        },
        {
          title: 'Tìm kiếm và Gợi ý',
          description: 'Tìm kiếm mạnh mẽ và hệ thống gợi ý video dựa trên AI.'
        }
      ],
      technologies: ['React', 'Java Spring Boot', 'FFmpeg', 'AWS S3', 'CloudFront'],
      challenges: [
        'Quản lý upload và lưu trữ hiệu quả cho file video dung lượng lớn',
        'Triển khai adaptive bitrate streaming',
        'Xây dựng pipeline encode có khả năng mở rộng'
      ],
      outcomes: [
        'Đạt 100,000 người dùng hoạt động hàng tháng',
        'Thời gian load video trung bình dưới 2 giây',
        'Đạt 99.9% uptime'
      ]
    },
    en: {
      title: 'Video Streaming Platform',
      description: 'Video streaming service with video upload, streaming, playlist management, and user interactions.',
      overview: 'A YouTube-like video sharing and streaming platform that allows users to upload, watch, and interact with videos.',
      features: [
        {
          title: 'Video Upload and Encoding',
          description: 'Upload videos in various formats and automatically encode them into optimized formats.'
        },
        {
          title: 'Adaptive Streaming',
          description: 'Automatically adjusts video quality based on user\'s network speed.'
        },
        {
          title: 'Playlist Management',
          description: 'Users can create and manage their own playlists.'
        },
        {
          title: 'Comments and Likes',
          description: 'Social features allowing users to comment and like videos.'
        },
        {
          title: 'Search and Recommendations',
          description: 'Powerful search functionality and AI-based video recommendation system.'
        }
      ],
      technologies: ['React', 'Java Spring Boot', 'FFmpeg', 'AWS S3', 'CloudFront'],
      challenges: [
        'Efficient upload and storage management for large video files',
        'Implementing adaptive bitrate streaming',
        'Building a scalable encoding pipeline'
      ],
      outcomes: [
        'Achieved 100,000 monthly active users',
        'Average video loading time under 2 seconds',
        'Achieved 99.9% uptime'
      ]
    }
  },
  music: {
    ko: {
      title: '음악 앱',
      description: 'Zing MP3와 같은 음악 스트리밍, 재생 목록 생성 및 음악 검색 기능이 있는 음악 플레이어 애플리케이션입니다.',
      overview: 'Zing MP3와 유사한 음악 스트리밍 서비스로, 사용자가 음악을 듣고 재생 목록을 만들며 좋아하는 아티스트를 팔로우할 수 있습니다.',
      features: [
        {
          title: '음악 스트리밍',
          description: '고품질 음악 스트리밍 서비스로 끊김 없는 재생을 제공합니다.'
        },
        {
          title: '재생 목록 생성',
          description: '사용자는 자신만의 재생 목록을 만들고 친구와 공유할 수 있습니다.'
        },
        {
          title: '음악 검색',
          description: '노래, 아티스트, 앨범으로 빠르게 검색할 수 있는 강력한 검색 기능.'
        },
        {
          title: '개인화된 추천',
          description: '사용자의 청취 습관을 분석하여 맞춤형 음악을 추천합니다.'
        },
        {
          title: '오프라인 모드',
          description: '좋아하는 노래를 다운로드하여 오프라인에서도 들을 수 있습니다.'
        },
        {
          title: '가사 표시',
          description: '노래를 들으면서 실시간으로 가사를 볼 수 있습니다.'
        }
      ],
      technologies: ['React', 'React Native', 'Java Spring Boot', 'MongoDB', 'AWS'],
      challenges: [
        '저지연 음악 스트리밍 구현',
        '효율적인 음악 라이브러리 관리',
        '개인화 추천 알고리즘 개발'
      ],
      outcomes: [
        '월간 활성 사용자 50만 명 달성',
        '평균 일일 청취 시간 2시간',
        '사용자 재방문율 85%'
      ]
    },
    vi: {
      title: 'Music App',
      description: 'Ứng dụng nghe nhạc với tính năng phát nhạc trực tuyến, tạo playlist và tìm kiếm nhạc như Zing MP3.',
      overview: 'Dịch vụ phát nhạc trực tuyến tương tự Zing MP3, cho phép người dùng nghe nhạc, tạo playlist và theo dõi nghệ sĩ yêu thích.',
      features: [
        {
          title: 'Phát nhạc trực tuyến',
          description: 'Dịch vụ phát nhạc chất lượng cao với trải nghiệm nghe nhạc mượt mà.'
        },
        {
          title: 'Tạo Playlist',
          description: 'Người dùng có thể tạo playlist riêng và chia sẻ với bạn bè.'
        },
        {
          title: 'Tìm kiếm nhạc',
          description: 'Tìm kiếm mạnh mẽ theo bài hát, nghệ sĩ, album.'
        },
        {
          title: 'Gợi ý cá nhân hóa',
          description: 'Phân tích thói quen nghe nhạc để gợi ý nhạc phù hợp.'
        },
        {
          title: 'Chế độ Offline',
          description: 'Tải nhạc yêu thích để nghe khi không có mạng.'
        },
        {
          title: 'Hiển thị lời bài hát',
          description: 'Xem lời bài hát theo thời gian thực khi nghe nhạc.'
        }
      ],
      technologies: ['React', 'React Native', 'Java Spring Boot', 'MongoDB', 'AWS'],
      challenges: [
        'Triển khai phát nhạc trực tuyến độ trễ thấp',
        'Quản lý thư viện nhạc hiệu quả',
        'Phát triển thuật toán gợi ý cá nhân hóa'
      ],
      outcomes: [
        'Đạt 500,000 người dùng hoạt động hàng tháng',
        'Thời gian nghe nhạc trung bình 2 giờ/ngày',
        'Tỷ lệ người dùng quay lại 85%'
      ]
    },
    en: {
      title: 'Music App',
      description: 'Music player application with music streaming, playlist creation, and music search like Zing MP3.',
      overview: 'A music streaming service similar to Zing MP3, allowing users to listen to music, create playlists, and follow favorite artists.',
      features: [
        {
          title: 'Music Streaming',
          description: 'High-quality music streaming service with seamless playback.'
        },
        {
          title: 'Playlist Creation',
          description: 'Users can create their own playlists and share them with friends.'
        },
        {
          title: 'Music Search',
          description: 'Powerful search functionality by song, artist, and album.'
        },
        {
          title: 'Personalized Recommendations',
          description: 'Analyzes listening habits to recommend tailored music.'
        },
        {
          title: 'Offline Mode',
          description: 'Download favorite songs to listen offline.'
        },
        {
          title: 'Lyrics Display',
          description: 'View lyrics in real-time while listening to music.'
        }
      ],
      technologies: ['React', 'React Native', 'Java Spring Boot', 'MongoDB', 'AWS'],
      challenges: [
        'Implementing low-latency music streaming',
        'Efficient music library management',
        'Developing personalized recommendation algorithms'
      ],
      outcomes: [
        'Achieved 500,000 monthly active users',
        'Average daily listening time of 2 hours',
        '85% user retention rate'
      ]
    }
  }
};

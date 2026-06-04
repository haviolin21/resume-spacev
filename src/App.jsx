import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Phone, 
  Mail, 
  MapPin, 
  Briefcase, 
  Users, 
  Database, 
  Sliders, 
  Shield, 
  ShoppingBag, 
  CheckCircle, 
  ExternalLink,
  ChevronUp,
  X,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Settings,
  Cpu
} from 'lucide-react';

// Decoded and customized resume database matching User's request
const resumeData = {
  personalInfo: {
    name: '하윤택',
    role: 'Platform Operations Specialist',
    phone: '010-4795-3330',
    email: 'yuntaek.ha@gmail.com',
    experienceYears: '총 경력 6년 5개월',
    location: '대한민국 서울',
    tags: ['SQL', 'Redshift', 'MySQL', 'Looker Studio', 'SuperSet', '자동화 프로세스']
  },
  about: {
    title: '자기 소개',
    paragraphs: [
      '저는 운영을 단순 실행 업무가 아닌 서비스의 안정성과 성장을 만드는 구조적 문제 해결 영역으로 바라보며 일해온 운영 전문가입니다.',
      '위메프, 쿠팡, 중고나라, 김캐디 등 다양한 플랫폼 환경에서 예약, 정산, CS, 결제, 운영 정책 등 서비스 운영 전반을 경험했으며, 운영 프로세스 개선, 자동화, 데이터 분석 프로젝트를 주도했습니다. SQL과 데이터 시각화 도구를 활용해 운영 지표를 분석하고 문제 원인을 구조화하여 실질적인 개선 과제를 도출해 왔습니다.',
      '특히 반복적으로 발생하는 운영 이슈를 구조적으로 해결하는 데 강점이 있습니다. 김캐디에서는 IVR 기반 예약 자동화 프로젝트를 통해 연간 약 2억 원 규모의 운영비를 절감했으며, 중고나라에서는 결제 퍼널 개선을 통해 결제액을 2.4배 성장시키는 성과를 만들었습니다.',
      '또한 개발, PO, 영업 등 다양한 조직과 협업하며 운영 자동화와 서비스 개선 과제를 추진해 왔으며, 데이터와 실행력을 기반으로 고객과 조직 모두가 신뢰할 수 있는 운영 환경을 만들어가고자 합니다.'
    ]
  },
  skills: [
    {
      id: 'ops-improvement',
      icon: Cpu,
      title: '운영 구조 개선 및 자동화',
      bullets: [
        '운영 병목 분석 및 프로세스 개선',
        '운영 자동화 프로젝트 기획 및 실행',
        '운영 효율화 및 비용 절감 설계'
      ],
      tools: ['프로세스 개선', '자동화 기획', '비용 최적화', 'Jira']
    },
    {
      id: 'data-solving',
      icon: Database,
      title: '데이터 기반 문제 해결',
      bullets: [
        'SQL 기반 데이터 추출 및 입체적 분석',
        '운영 KPI 설계 및 대시보드 구축',
        '퍼널 및 코호트 분석 기반 개선 과제 도출'
      ],
      tools: ['SQL', 'Redshift', 'MySQL', 'Looker Studio', 'Superset']
    },
    {
      id: 'policy-framework',
      icon: Shield,
      title: '운영 정책 및 체계 구축',
      bullets: [
        '운영 기준 및 핵심 프로세스 수립',
        '예외 케이스 정립 및 리스크 관리',
        '서비스 운영 안정화 및 품질 관리'
      ],
      tools: ['정책 설계', '리스크 조율', '이상 징후 탐지', 'QA']
    },
    {
      id: 'collaboration-leadership',
      icon: Users,
      title: '협업 및 프로젝트 리딩',
      bullets: [
        '개발·PO·영업·CS 등 유관 조직 협업 리딩',
        '요구사항 정의(PRD) 및 개선 과제 추진',
        '데이터에 기반한 합리적 의사결정 및 커뮤니케이션'
      ],
      tools: ['요구사항 정의', '프로젝트 관리', 'Cross-functional 협업']
    }
  ],
  experience: [
    {
      id: 'kimcaddie',
      period: '2025.06 – 2026.02 (9개월)',
      company: '김캐디',
      role: '리드 (운영팀)',
      achievements: [
        'IVR 기반 예약 자동화 프로젝트를 기획·도입하여 운영 인건비 연간 약 2억 원 절감 및 24시간 예약 대응 체계 구축',
        '운영 데이터 및 VOC 분석을 통한 서비스 운영 정책 및 개선 과제 도출',
        '운영 프로세스 개선 및 자동화를 통해 고객 응대 품질 향상과 운영 효율 증대',
        '운영 데이터 분석 기반 서비스 개선 과제를 발굴하고 개발 협업을 통해 고객 불편 감소 및 운영 리소스 절감',
        '운영 정책 및 프로세스 개선 과제를 직접 정의하고 기획–개발–적용 전 과정을 리드'
      ],
      tasks: [
        '운영팀·개발팀 협업을 통한 운영 프로세스 및 시스템 개선 기획',
        '반복 운영 업무 분석 및 자동화 기회 발굴',
        '운영 KPI 설계 및 대시보드 기반 모니터링 체계 구축',
        '고객센터 운영 정책 수립 및 상담 채널 운영 체계 개선'
      ],
      tools: ['Superset', 'Google Spreadsheet', 'Amazon Redshift', '채널톡', '센터플로우', 'Jira', 'Confluence']
    },
    {
      id: 'joonggonara',
      period: '2022.03 – 2024.04 (2년 2개월)',
      company: '중고나라',
      role: '매니저 (결제제휴사업팀)',
      achievements: [
        '결제 퍼널(탐색–채팅–결제) 분석 및 핵심 사용자 세그먼트 전략을 통해 중고나라 페이 결제액 2.4배 성장 및 2023년 결제 KPI 달성',
        '카페-앱 연동 프로젝트를 통해 NRU 1.6배 증가, 상품 등록 수 2배 증가 및 2022년 상품 등록 KPI 140% 초과 달성',
        '사기 채팅 키워드 탐지 정책을 도입하여 사기 피해 건수 60% 감소'
      ],
      tasks: [
        'SQL 기반 데이터 추출 및 분석, 주요 지표 리포트 작성',
        '운영 지표 모니터링 및 대시보드 구축',
        '중고나라 페이 서비스 운영 및 결제 데이터 분석',
        '결제 이벤트 기획 및 성과 분석',
        '결제 퍼널 분석을 통한 전환율 개선 과제 도출'
      ],
      tools: ['MySQL', 'PostgreSQL', 'Amazon Redshift', 'Looker Studio', 'QuickSight', 'GA4', 'AppsFlyer', 'Airbridge']
    },
    {
      id: 'brandscompany',
      period: '2021.05 – 2022.01 (9개월)',
      company: '브랜즈컴퍼니㈜ (전.스카이랩㈜)',
      role: '팀장 (마케팅기획)',
      achievements: [
        '쿠팡 로켓배송 채널 운영을 통해 월평균 10% 이상 매출 성장',
        '판매 데이터 기반 발주 프로세스 개선으로 재고 안정화 및 품절 리스크 감소',
        '상품 라인업 37% 확대를 통해 판매 상품 다양성 및 매출 규모 GMV 증대'
      ],
      tasks: [
        '쿠팡 로켓배송 채널 운영 총괄',
        '판매 데이터 분석 기반 발주 및 재고 운영 관리',
        '상품 라인업 확대 및 판매 전략 수립',
        '매출 데이터 분석 및 성과 모니터링'
      ],
      tools: ['Coupang Wing', 'Excel', 'Inventory Analysis']
    },
    {
      id: 'coupang',
      period: '2020.04 – 2020.08 (5개월)',
      company: '쿠팡(주)',
      role: 'L4 (Pricing Operation)',
      achievements: [
        'KF·덴탈 마스크 등 이슈 상품에 대한 가격 정책 및 운영 프로세스 수립',
        '가격 비교 예외 케이스 분석 및 개선을 통해 운영 안정성 향상',
        '가격 정책 운영 과정에서 발생하는 예외 프로세스를 정립하여 업무 효율 개선',
        'SQL 기반 데이터 추출 및 분석을 통해 운영 의사결정 지원'
      ],
      tasks: [
        '카테고리별 가격 정책 운영 및 모니터링',
        '가격 비교 예외 케이스 분석 및 운영 정책 관리',
        '가격 데이터 검수 및 품질 관리',
        '유관 부서 협업을 통한 운영 정책 개선'
      ],
      tools: ['SQL', 'Pricing Engines', 'Internal Admin System']
    },
    {
      id: 'wemake',
      period: '2017.12 – 2020.03 (2년 4개월)',
      company: '(주)위메프',
      role: '사원 (판촉운영팀)',
      achievements: [
        '거래액 상위 20% 핵심 SKU 중심 판촉 전략을 통해 판촉 효율 및 ROI 개선',
        '가격 비교 원부 구축 프로젝트를 수행하여 가격 비교 기능 운영 체계 마련',
        '식품 카테고리 가격 비교 판촉 운영을 통해 카테고리 1위 및 GMV·CM 목표 달성'
      ],
      tasks: [
        '식품 카테고리 가격 비교 판촉 운영',
        '판매 데이터 분석 및 성과 리포트 작성',
        '가격 경쟁력 및 판촉 효율 분석',
        '매출 상위 SKU 기반 판촉 전략 수립'
      ],
      tools: ['Excel', 'Price Matching Systems', 'Promotion Analytics']
    }
  ],
  education: [
    {
      period: '2010.03 ~ 2016.08',
      institution: '상명대학교(천안)',
      degree: '금융경영학과 | 학사 졸업',
      detail: null
    },
    {
      period: '2025.02 ~ 2025.03',
      institution: '코드잇 (Codeit)',
      degree: '빅데이터 분석 과정 수료',
      detail: 'Python 기반 데이터 분석 과정 수료, Pandas 기반 데이터 분석 및 시각화 실습, 데이터 기반 가설 검증 및 분석 리포트 작성'
    },
    {
      period: '2020.12 ~ 2021.04',
      institution: '코드스테이츠 (Code States)',
      degree: 'Software engineering 과정 수료',
      detail: 'JavaScript 기반 Full-Stack 과정 수료, React, Node.js, MySQL 기반 웹 서비스 개발 학습, DB 설계 및 Git 협업 경험, 개발 프로세스 및 협업 방식 이해'
    }
  ],
  projects: [
    {
      id: 'ivr-project',
      corp: '김캐디',
      period: '2025.07 ~ 2025.09',
      title: '예약 담당자 IVR 자동화 프로젝트',
      summaryBullets: [
        '미운영 시간대 예약 성공률 50% → 70% 개선',
        '연간 약 2억 원 규모 인건비를 월 200만 원 수준의 IVR 운영비로 대체',
        '24시간 예약 대응 체계 구축 및 도입 후 전체 예약 건수 약 5% 증가'
      ],
      modalData: {
        problem: '예약 담당자 미운영 시간대에는 전화 예약 대응이 불가능해 새벽 시간대 예약 누락, 운영 리스크, 인건비 비효율 문제가 발생하고 있었습니다.',
        hypothesis: '예약 응대 프로세스를 IVR 자동화 체계로 전환하여 24시간 실시간 예약 수락/거절 시나리오를 적용하면, 예약 누락 방지와 운영 인건비 감축이 가능할 것으로 가설 설정하였습니다.',
        experiment: '시간대별 예약 성공률 및 결제 데이터 분석, 예약 담당자의 기여도 분석, IVR 자동 수락/거절 시나리오 및 예외 케이스 처리 설계, 파일럿 테스트 및 사용자 인터뷰 검증.',
        result: '미운영 시간대 예약 성공률이 50%에서 70%로 개선되었으며, 인건비 연 약 2억 원을 월 200만 원대의 IVR 운영비로 최적화하고 24시간 예약 커버리지를 확보했습니다.',
        contribution: '데이터 분석 기반의 가설 검증 및 IVR 전환 기획 리딩, 시나리오 설계, 개발 및 외부 솔루션 협업 적용, 최종 대시보드 구축을 통한 효율성 모니터링을 달성했습니다.',
        detailParagraphs: [
          '기존에는 새벽 등 오프시간에 프리랜서 예약 담당자를 고용해 대응했으나, 잦은 이탈 리스크와 높은 비용이 수반되었습니다. 이에 고객 및 매장 거래 데이터를 면밀히 추출하여 거래액 대비 인력 비용의 효율성을 진단했고, 사람 중심의 구조를 자동화 구조로 완전히 전환하는 계획을 수립했습니다.',
          '매장의 예외 케이스(잘못된 예약 수락 등으로 인한 오작동 리스크)를 방지하기 위한 이중 확인 프로세스를 솔루션 연동 시나리오에 추가 설계했고, 점진적인 주 단위 릴리즈 배포를 통해 충격을 예방했습니다.',
          '외부 솔루션사의 일시 장애 상황 발생 시에도 운영팀이 즉시 매뉴얼 대응할 수 있도록 대체 프로세스를 구축해 예약 유실 리스크를 차단했습니다. 결과적으로 자동화를 통해 99% 수준의 예약 리소스 효율 향상과 동시에 비즈니스 볼륨 확대를 입증해냈습니다.'
        ]
      }
    },
    {
      id: 'pay-project',
      corp: '중고나라',
      period: '2023.04 ~ 2023.12',
      title: '중고나라 페이 결제액 2.4배 성장 프로젝트',
      summaryBullets: [
        '중고나라 페이 결제액 2.4배 상승 및 2023년 최고 결제액 달성',
        '결제 퍼널(탐색–채팅–결제) 분석 기반 \'카페 채팅 앱 유도\' 기능 기획',
        '상위 판/구매자 세그먼트 관리 및 수수료 감면 이벤트 성과 분석'
      ],
      modalData: {
        problem: '결제액 성장 정체 문제를 진단한 결과, 채팅 구간에서의 높은 유저 이탈과 상위 핵심 거래 고객에 대한 관리 및 타겟 기획 부재가 주요 원인으로 식별되었습니다.',
        hypothesis: '이탈이 발생하는 채팅 구간에 판매자 앱 유입용 알림/댓글 자동화를 적용하고, 고액 거래자 맞춤형 정산 혜택 제공 및 이벤트 정밀 타겟팅을 적용하면 결제액이 회복될 것이라 가설을 설정했습니다.',
        experiment: 'SQL 기반 결제 퍼널 및 유저 로그 데이터 심층 분석, 이탈 구간에 맞춰 네이버 카페 내 자동 댓글/채팅 리다이렉션 기능 협업 구현, VIP 그룹 추출 및 이벤트 성과 코호트 측정.',
        result: '연간 결제액이 2.4배 크게 늘었으며, 핵심 타겟 VIP 그룹 거래액이 약 20% 상승하여 당해 팀의 결제액 KPI를 완전 초과 달성했습니다.',
        contribution: 'SQL 데이터 추출 및 대시보드 구축, 결제 퍼널 병목 규명 및 앱 리다이렉션 기획, VIP 고객 타겟 관리 및 수수료 감면 이벤트 정량 성과 기여 타당성 분석 주도.',
        detailParagraphs: [
          '중고나라 페이 활성화를 목표로 하는 전사 목적 조직의 일원으로서, 결제 데이터 전반의 퍼널 분석을 담당했습니다. 데이터 상에서 채팅 단계로 넘어간 뒤 판매자의 확인 지연 및 이탈 비율이 높다는 점에 주목했습니다.',
          '이를 위해 네이버 카페와 앱의 상품 데이터 싱크 환경에서, 구매자가 채팅을 걸었을 때 판매자의 해당 네이버 카페 글에 자동으로 알림 댓글을 작성해 앱 실행을 유도하는 트리거 로직을 PO 및 개발 조직과 조율해 기획 반영했습니다.',
          '이와 동시에 대량 거래 유저들의 세그먼트를 DB에서 주기적으로 모니터링하여 VIP 맞춤 혜택과 수수료 감면 이벤트를 주 단위 효율 분석 기반으로 기획/조정하여, 매출의 정체를 해결하고 견고한 성장을 도출해냈습니다.'
        ]
      }
    },
    {
      id: 'sync-project',
      corp: '중고나라',
      period: '2022.03 ~ 2022.12',
      title: '중고나라 카페–앱 연동 프로젝트',
      summaryBullets: [
        '연동 후 앱 신규 등록 회원(NRU) 1.6배 증가',
        '전체 앱 내 신규 등록 상품 수 2배 증가',
        '연동 회원 상품 수가 전체 앱 상품의 약 60%를 차지하는 성과 도출'
      ],
      modalData: {
        problem: '중고나라 앱의 MAU 및 상품 거래 활성화를 위해, 1,900만 명에 이르는 거대 카페 유저 풀을 앱으로 효율적으로 전송하고 상품 등록 지표를 부스팅해야 했습니다.',
        hypothesis: '카페 ↔ 앱 연동 신청 과정을 간소화/자동화하고, 가입 부스팅 리워드 및 상품 등록 단계별 보상 게임화 요소를 도입하면 상품 공급 파이프라인이 앱 내로 안착할 것으로 기대했습니다.',
        experiment: '유저 LTV 분석 및 회원 매칭 지표 측정, 수기 신청 방식의 한계를 자동 시스템 연동 페이지 기획으로 전환, 스타벅스 기프티콘 및 롤링 마일리지 보상 프로모션 모니터링.',
        result: '연동 회원 수 1.6배, 상품 등록량 2배 증가를 달성했으며 연동 회원의 활동 지표가 기존 앱 순수 가입자 대비 20% 이상 높음을 관찰했습니다.',
        contribution: '네이버 카페-앱 연동 신청 자동화 프로세스 기획, 연동 이벤트 설계 및 보상 게임화 기획, 연동 이후의 회원 활동성 분석 리포트 작성을 주도했습니다.',
        detailParagraphs: [
          '카페 가입자가 원클릭으로 중고나라 앱 아이디를 생성/연동하고 상품을 연동 전송할 수 있는 시스템을 구축하기 위해 프로세스 기획에 착수했습니다. 기존의 불투명한 수동 승인 형식을 완전 자동 시스템으로 개선했습니다.',
          '연동 전환율을 올리기 위해 초기에 커피 리워드를 연동 신청 완료자에게 실시간 발송하는 이벤트를 기획하여, 일평균 두 자릿수 가입에 머물던 수치를 일 900명 이상으로 스케일업했습니다.',
          '나아가 연동 가입자들이 단순 이탈하지 않도록 상품 등록 1회, 3회, 5회 등 단계적으로 게이미피케이션 적립금을 지급하는 부스터 프로모션을 추가로 설계하여 전체 앱 등록 상품의 과반 이상이 네이버 카페 연동을 통해 지속 생산되는 강력한 순환 구조를 구축했습니다.'
        ]
      }
    }
  ]
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll events for active section and ScrollToTop button visibility
  useEffect(() => {
    const handleScroll = () => {
      // Toggle ScrollToTop button visibility
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Track active section based on position
      const scrollPosition = window.scrollY + 120;
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education'];
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for elements fade-in
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target); // Animates only once
        }
      });
    }, observerOptions);

    const animElements = document.querySelectorAll(
      '.skill-card, .timeline-item, .project-card, .about-box, .edu-card, .section-title'
    );
    animElements.forEach(el => {
      el.classList.add('fade-in-element');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="app-root">
      {/* Header */}
      <header id="main-header">
        <div className="header-container">
          <a href="#hero" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="logo-yuntaek">YUNTAEK</span>
            <span className="logo-jobs">JOBS</span>
          </a>
          <nav className="nav-menu">
            <ul>
              <li>
                <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>자기소개</a>
              </li>
              <li>
                <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>핵심역량</a>
              </li>
              <li>
                <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>경력사항</a>
              </li>
              <li>
                <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>주요프로젝트</a>
              </li>
              <li>
                <a href="#education" className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}>학력/교육</a>
              </li>
            </ul>
          </nav>
          <div className="header-actions">
            {/* The resume path matches the requested file name */}
            <a 
              href="/하윤택_이력서_스페이스브이.pdf" 
              download="하윤택_이력서_스페이스브이.pdf" 
              className="btn btn-primary btn-sm"
              title="하윤택 이력서 다운로드"
            >
              <Download size={15} />
              <span>이력서 다운로드</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="hero">
          <div className="container hero-container">
            <div className="hero-content">
              <span className="badge badge-accent">Operations Excellence</span>
              <h1>
                데이터와 자동화로<br />
                <span className="highlight">지속 가능한 운영 구조</span>를 만듭니다
              </h1>
              <p className="hero-lead">
                저는 운영을 단순 실행 업무가 아닌 서비스의 안정성과 성장을 만드는 구조적 문제 해결 영역으로 바라보며 일해온 운영 전문가입니다. 위메프, 쿠팡, 중고나라, 김캐디 등 다양한 플랫폼 환경에서 데이터 분석과 프로세스 개선 및 자동화를 주도했습니다.
              </p>
              <div className="hero-actions-group">
                <a href="#projects" className="btn btn-primary">
                  <span>프로젝트 보기</span>
                  <ArrowRight size={16} />
                </a>
                <a 
                  href="/하윤택_이력서_스페이스브이.pdf" 
                  download="하윤택_이력서_스페이스브이.pdf" 
                  className="btn btn-outline-primary"
                >
                  <Download size={16} />
                  <span>PDF 이력서 받기</span>
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="card-profile-info">
                <div className="profile-header">
                  <h2>{resumeData.personalInfo.name}</h2>
                  <p>{resumeData.personalInfo.role}</p>
                </div>
                <ul className="profile-contact-list">
                  <li>
                    <Phone size={16} />
                    <a href={`tel:${resumeData.personalInfo.phone}`}>{resumeData.personalInfo.phone}</a>
                  </li>
                  <li>
                    <Mail size={16} />
                    <a href={`mailto:${resumeData.personalInfo.email}`}>{resumeData.personalInfo.email}</a>
                  </li>
                  <li>
                    <Briefcase size={16} />
                    <span>{resumeData.personalInfo.experienceYears}</span>
                  </li>
                  <li>
                    <MapPin size={16} />
                    <span>{resumeData.personalInfo.location}</span>
                  </li>
                </ul>
                <div className="profile-footer">
                  {resumeData.personalInfo.tags.map((tag, idx) => (
                    <span key={idx} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding">
          <div className="container">
            <h2 className="section-title">자기소개</h2>
            <div className="about-box">
              <div className="about-icon-header">
                <CheckCircle size={28} className="logo-yuntaek" />
                <h3>{resumeData.about.title}</h3>
              </div>
              <div className="about-content">
                {resumeData.about.paragraphs.map((para, idx) => (
                  <p key={idx} className="about-paragraph">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding bg-alt">
          <div className="container">
            <h2 className="section-title">핵심 역량</h2>
            <div className="grid grid-2-col">
              {resumeData.skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.id} className="skill-card">
                    <div className="skill-icon-wrapper">
                      <IconComponent size={24} />
                    </div>
                    <div className="skill-content">
                      <h3>{skill.title}</h3>
                      <ul>
                        {skill.bullets.map((bullet, idx) => (
                          <li key={idx}>{bullet}</li>
                        ))}
                      </ul>
                      <div className="skill-badges">
                        {skill.tools.map((tool, idx) => (
                          <span key={idx} className="badge badge-tool">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding">
          <div className="container">
            <h2 className="section-title">
              경력 사항
              <span className="subtitle">(총 경력 6년 5개월)</span>
            </h2>
            <div className="timeline">
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-badge"></div>
                  <div className="timeline-panel">
                    <div className="timeline-header">
                      <span className="period">{exp.period}</span>
                      <h3>
                        {exp.company}
                        <span className="position"> | {exp.role}</span>
                      </h3>
                    </div>
                    <div className="timeline-body">
                      <h4>주요 성과</h4>
                      <ul className="achievement-list">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className={idx === 0 ? 'highlight-achievement' : ''}>{ach}</li>
                        ))}
                      </ul>
                      <h4>주요 업무</h4>
                      <ul className="task-list">
                        {exp.tasks.map((task, idx) => (
                          <li key={idx}>{task}</li>
                        ))}
                      </ul>
                      <div className="used-tools">
                        {exp.tools.map((tool, idx) => (
                          <span key={idx} className="tool-tag">{tool}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-alt">
          <div className="container">
            <h2 className="section-title">주요 프로젝트</h2>
            <div className="project-grid">
              {resumeData.projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-card-header">
                    <div className="project-corp-period">
                      <span className="project-corp">{project.corp}</span>
                      <span className="project-period">{project.period}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  <div className="project-card-body">
                    <ul className="project-summary-list">
                      {project.summaryBullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="project-card-footer">
                    <button 
                      onClick={() => openProjectModal(project)}
                      className="btn-detail-link"
                      aria-label={`${project.title} 프로젝트 상세 보기`}
                    >
                      <span>자세히 보기</span>
                      <span className="arrow">➔</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Training Section */}
        <section id="education" className="section-padding">
          <div className="container">
            <h2 className="section-title">학력 및 교육</h2>
            <div className="edu-grid">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="edu-card">
                  <span className="edu-period">{edu.period}</span>
                  <div className="edu-info">
                    <h3>{edu.institution}</h3>
                    <p>{edu.degree}</p>
                    {edu.detail && <p className="edu-detail">{edu.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="footer-cta">
            <h2>합리적이고 안정적인 운영 구조를 만듭니다</h2>
            <p>언제든지 연락해 주세요. 데이터 기반의 빠른 실행력과 문제 해결력으로 서비스의 효율적인 성장을 돕겠습니다.</p>
            <div className="cta-buttons">
              <a href={`mailto:${resumeData.personalInfo.email}`} className="btn btn-primary">
                <Mail size={18} />
                <span>이메일 보내기</span>
              </a>
              <a 
                href="/하윤택_이력서_스페이스브이.pdf" 
                download="하윤택_이력서_스페이스브이.pdf" 
                className="btn btn-outline-white"
              >
                <Download size={18} />
                <span>이력서 다운로드 (PDF)</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright-tech">
              <p className="copyright">© 2026 {resumeData.personalInfo.name}. All Rights Reserved.</p>
              <p className="tech-stack">Built with React · Vite · Vanilla CSS · JavaScript · Space V Style</p>
            </div>
            <div className="footer-contact-info">
              <span>
                <Phone size={14} className="footer-icon" />
                {resumeData.personalInfo.phone}
              </span>
              <span>
                <Mail size={14} className="footer-icon" />
                {resumeData.personalInfo.email}
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeProjectModal} />
      )}

      {/* Scroll to Top */}
      {showScrollTop && (
        <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="상단으로 스크롤">
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

// Subcomponent: Project Details Modal
function ProjectModal({ project, onClose }) {
  const { corp, period, title, modalData } = project;

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Lock scroll on body
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset'; // Unlock scroll
    };
  }, [onClose]);

  // Close modal if background is clicked
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose} aria-label="모달 닫기">
          <X size={20} />
        </button>
        <div className="modal-header">
          <div className="modal-corp-period">
            <span className="modal-corp">{corp}</span>
            <span className="modal-period">{period}</span>
          </div>
          <h2 className="modal-title">{title}</h2>
        </div>
        <div className="modal-content-scrollable">
          <div className="modal-content-wrapper">
            <div className="modal-pipeline-section">
              <h3 className="modal-section-title">문제 정의 및 실행 결과</h3>
              <div className="modal-pipeline-grid">
                <div className="modal-card problem">
                  <span className="card-badge">Problem</span>
                  <h4 className="card-title">문제 정의</h4>
                  <p className="card-text">{modalData.problem}</p>
                </div>
                <div className="modal-card hypothesis">
                  <span className="card-badge">Hypothesis</span>
                  <h4 className="card-title">가설 설정</h4>
                  <p className="card-text">{modalData.hypothesis}</p>
                </div>
                <div className="modal-card experiment">
                  <span className="card-badge">Experiment</span>
                  <h4 className="card-title">실험 및 검증</h4>
                  <p className="card-text">{modalData.experiment}</p>
                </div>
                <div className="modal-card result">
                  <span className="card-badge">Result</span>
                  <h4 className="card-title">실행 결과</h4>
                  <p className="card-text">{modalData.result}</p>
                </div>
                <div className="modal-card contribution">
                  <span className="card-badge">Contribution</span>
                  <h4 className="card-title">핵심 기여 내용</h4>
                  <p className="card-text">{modalData.contribution}</p>
                </div>
              </div>
            </div>

            <div className="modal-detail-section">
              <h3 className="modal-section-title">상세 실행 과정</h3>
              <div className="modal-detail-body">
                {modalData.detailParagraphs.map((para, idx) => (
                  <p key={idx} className="detail-paragraph">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

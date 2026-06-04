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
  ChevronUp,
  X,
  ArrowRight,
  Cpu
} from 'lucide-react';

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
      '저는 운영을 단순 실행 업무가 아닌 <strong>서비스의 안정성과 성장을 만드는 구조적 문제 해결 영역으로 바라보며 일해온 운영 전문가</strong>입니다.',
      '위메프, 쿠팡, 중고나라, 김캐디 등 다양한 플랫폼 환경에서 <strong>서비스 운영 전반을 경험했으며, 운영 프로세스 개선, 자동화, 데이터 분석 프로젝트를 주도</strong>했습니다. SQL과 데이터 시각화 도구를 활용해 운영 지표를 분석하고 문제 원인을 구조화하여 실질적인 개선 과제를 도출해 왔습니다.',
      '특히 반복적으로 발생하는 운영 이슈를 구조적으로 해결하는 데 강점이 있습니다. 김캐디에서는 IVR 기반 예약 자동화 프로젝트를 통해 <strong>연간 약 2억 원 규모의 운영비를 절감</strong>했으며, 중고나라에서는 결제 퍼널 개선을 통해 <strong>결제액을 2.4배 성장</strong>시키는 성과를 만들었습니다.',
      '또한 개발, PO, 영업 등 다양한 조직과 협업하며 운영 자동화와 서비스 개선 과제를 추진해 왔으며, <strong>데이터와 실행력</strong>을 기반으로 고객과 조직 모두가 신뢰할 수 있는 운영 환경을 만들어가고자 합니다.'
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
        '거래액 상위 20% 핵심 SKU 중심 상품 운영 전략을 통해 판촉 효율 및 ROI 개선',
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
      period: '25.07.29 ~ 25.09.21',
      title: '예약 담당자 IVR 대체',
      kpi: '연간 약 2억 원 비용 절감',
      summaryBullets: [
        '미운영 시간대 예약 성공률 50% → 70% 개선',
        '연간 약 2억 원 규모 인건비를 월 200만 원 수준의 IVR 운영비로 대체',
        '24시간 예약 대응 체계 구축 및 도입 후 전체 예약 건수 약 5% 증가'
      ],
      modalData: {
        problem: '예약 담당자 미운영 시간대에는 전화 예약 대응이 불가하여, 고객 예약 실패·매출 손실·운영 리소스 비효율이 동시에 발생하는 문제 확인',
        hypothesis: 'IVR 기반 예약 프로세스를 도입하면 24시간 예약 커버가 가능해지고, 운영 비용 절감과 함께 예약 성공률 및 플랫폼 운영 효율이 개선될 것이라는 가설 설정',
        experiment: '미운영 시간대 예약 성공률 분석, IVR 통화 방식에 대한 사용자 거부감 사전 조사, 도입 전·후 예약 성과 및 운영 비용 비교를 통한 효과 검증',
        result: '미운영 시간대 예약 성공률 50% → 70%로 개선, 인건비 연 약 2억 원 → 월 200만 원 수준(IVR 통화료)으로 운영 비용 대폭 절감',
        contribution: '예약 성공률·운영 시간대별 성과 지표 대시보드 구축, 예약 담당자 운영 기여도 및 결제 영향 분석, IVR 도입 효과에 대한 비용·효율성 검증을 통해 운영 자동화 체계 구축에 기여',
        detailParagraphs: [
          "기존 프리랜서 형태의 '예약 담당자' 전화 응대 구조는 새벽 시간대 예약 실패, 근무자 이탈 리스크, 높은 비용 부담 등 플랫폼 운영의 큰 비효율을 낳고 있었습니다. 실제 데이터를 분석한 결과 담당자들의 거래액 기여도는 1% 미만이었던 반면, 미운영 시간대 예약의 약 50%가 실패하고 있음을 확인하여 IVR 기반의 24시간 자동화 프로세스로의 전환 가설을 수립했습니다.",
          "매장 이탈과 매출 하락에 대한 내부 우려를 정량적 분석과 파일럿 테스트 인터뷰를 통해 설득하며 해소하였습니다. 배포 시에는 리스크를 예방하기 위해 주 단위 점진적 배포 전략을 적용하였고, '수락/거절' 시나리오 설계 중 발견한 잘못된 예약 확정 리스크(오작동 복구 불가)를 보완하기 위해 이중 확인 절차를 추가하여 시나리오의 안정성을 확보했습니다.",
          "도입 과정에서 발생한 일부 매장 내 IVR 미동작 이슈를 해결하기 위해 내부 시스템 로그 점검, 매장 개별 환경 정보 수집 및 현장 방문 테스트를 병행하며 원인이 외부 솔루션사 서버 처리 과정에 있음을 특정하고 함께 안정화했습니다. 또한 솔루션사 작업 중단으로 인한 일시적인 공백 상황에서도 운영팀의 대체 대응 체계를 마련해 예약 누락을 성공적으로 방어했습니다.",
          "최종 배포 및 안정화 결과, 미운영 시간대 예약 성공률이 50%에서 70%로 향상되었고, 연 2억 원의 인건비를 월 200만 원 수준으로 최적화하여 99%의 비용을 절감했습니다. 프로젝트를 통해 기획부터 시나리오 설계, 개발 협업, 파일럿 검증 및 성과 분석까지 End-to-End로 리딩하며, 예외 상황에 대처하고 비즈니스 운영 구조를 자동화로 끝까지 완결시키는 역량을 키웠습니다."
        ]
      }
    },
    {
      id: 'pay-project',
      corp: '중고나라',
      period: '23.04.07 ~ 23.12.31',
      title: '중고나라 페이 결제 2배 증가',
      kpi: '결제액 2.4배 성장',
      summaryBullets: [
        '중고나라 페이 결제액 2.4배 상승 및 2023년 최고 결제액 달성',
        '결제 퍼널(탐색–채팅–결제) 분석 기반 \'카페 채팅 앱 유도\' 기능 기획',
        '상위 판/구매자 세그먼트 관리 및 수수료 감면 이벤트 성과 분석'
      ],
      modalData: {
        problem: '결제액 저조 문제 해결을 위해 사용자 행동 데이터를 분석하여 결제 퍼널의 이탈률 개선 필요 확인',
        hypothesis: '결제 퍼널 중 이탈률이 발생하는 구간을 개선하고, 세그먼트 분석 및 이벤트 실행이 결제액 상승에 기여할 것이라는 가설 설정',
        experiment: 'SQL을 활용한 결제 퍼널 분석 및 이탈률 개선, 세그먼트 분석 및 타겟팅 이벤트 실행',
        result: '결제액 2.4배 상승, 2023년 최고 결제액 달성',
        contribution: '대시보드 생성, 퍼널 분석, 이탈률 개선, 이벤트 기획 및 타당성 분석, 상위 결제자 관리',
        detailParagraphs: [
          "2023년 중고나라 페이 결제액 상승 목표 달성을 위해 결제제휴사업팀이 신설되었습니다. 저는 본 목적 조직 내에서 데이터 분석, 대시보드 구축 및 데일리 푸시 효율 분석, 타겟 고객 분류 등 운영 기획 및 데이터 분석 업무를 주도했습니다.",
          "결제 퍼널 데이터를 세분화하여 분석한 결과, 판매자가 앱 내 크롤링 된 카페 상품에 대한 채팅 응답을 제때 확인하지 않아 채팅 구간에서 가장 많은 이탈이 발생함을 발견했습니다. 이를 해결하고자 채팅 발생 시 판매자의 카페 게시글에 자동 댓글을 남겨 앱 유입을 유도하는 '카페 채팅 앱 유도' 기능을 구현하여 이탈을 최소화했습니다.",
          "거래 기여도가 높은 핵심 거래자 상위 10%(약 300명)를 SQL로 추출하여 밀착 관리(빠른 정산, 리워드 혜택)를 적용해 해당 그룹의 거래액을 20% 상승시켰습니다. 또한 결제 효율을 분석하여 결제가 가장 저조한 시간대를 타겟으로 수수료를 감면해주는 '중요일' 이벤트를 기획하여 결제 감소를 방지하고 복귀를 이끌어냈습니다.",
          "23년 12월 이벤트 기준 역대 최고 결제액을 달성했으며, 연간 결제액 2.4배 성장을 견인하며 팀 KPI를 달성했습니다. SQL 분석을 통한 퍼널 개선, VIP 타겟 세그먼트 관리, 타당성 분석에 기반한 이벤트 기획 등 데이터 기반 비즈니스 운영 프로세스를 리딩한 경험입니다."
        ]
      }
    },
    {
      id: 'sync-project',
      corp: '중고나라',
      period: '22.03.15 ~ 22.12.31',
      title: '중고나라 카페-앱 연동',
      kpi: '회원 1.6배 / 상품 등록 2배 증가',
      summaryBullets: [
        '연동 후 앱 신규 등록 회원(NRU) 1.6배 증가',
        '전체 앱 내 신규 등록 상품 수 2배 증가',
        '연동 회원 상품 수가 전체 앱 상품의 약 60%를 차지하는 성과 도출'
      ],
      modalData: {
        problem: '중고나라 앱 활성화 및 MAU 증대를 위해 회원수 및 상품 등록수 증가 필요성 확인',
        hypothesis: '네이버 카페(중고나라)와 중고나라 앱의 연동을 통해, 기존 카페 회원의 앱 유입 증가 및 상품 등록 활성화가 가능할 것이라는 가설 설정',
        experiment: 'LTV 분석, 회원 활동 지표 추출, 카페-앱 연동 기능 개발, 회원수 및 상품 등록수 모니터링을 통해 효율성 검증',
        result: '회원수 1.6배 증가, 상품 등록수 2배 증가, LTV 상승 및 회원 활동 지표 개선',
        contribution: '카페to앱 연동 기획, 데이터 분석 및 수치 증대, 연동 신청 기능 자동화, 이벤트 기획&실행',
        detailParagraphs: [
          "1,900만 회원 규모의 네이버 카페 인프라를 활용해 저비용 고효율 of 앱 MAU 성장을 기획했습니다. 기존의 비효율적인 수기 연동 프로세스를 개선하고자 연동 신청 페이지 자동화를 기획해 도입하고, 시스템 구축 전 구글 폼을 이용한 수기 모객 효율도 프로세스 최적화를 통해 리스크를 차단했습니다.",
          "연동 모객을 부스팅하기 위해 사전 사용자 반응 조사를 실시하여 '스타벅스 커피 리워드' 이벤트를 기획했습니다. 이를 통해 일평균 70명에 불과하던 가입 연동 수가 일 900명대로 급증하였고, 연동된 회원의 활동 지표가 일반 회원 대비 20% 높음을 LTV 및 이탈률 분석으로 검증하여 비즈니스 가치를 입증했습니다.",
          "유입 유저의 잔존률과 상품 등록 수를 증대시키기 위해 단계적 마일리지 이벤트를 설계했습니다. 단순 적립에서 '구간별 마일리지 획득 참여형 게임 구조'로 전환 기획한 결과, 연동 회원의 일평균 상품 등록 수가 5,500건에서 10,400건으로 2배 증가하였고 앱 전체 등록 상품의 60%를 연동 회원이 차지하며 플랫폼 내 핵심 상품 공급 채널로 안착시켰습니다.",
          "결과적으로 회원수 1.6배 및 상품 등록수 2배 증가를 달성했습니다. 플랫폼 간의 유기적인 연동 전략을 수립하고, 정량적인 성과 측정과 게임화 설계를 결합하여 서비스의 유기적 성장을 입증해 낸 비즈니스 운영 기획 경험입니다."
        ]
      }
    }
  ]
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle ScrollToTop button visibility
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
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
          obs.unobserve(entry.target);
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
    // Micro delay to trigger soft scale transition
    setTimeout(() => setModalActive(true), 20);
  };

  const closeProjectModal = () => {
    setModalActive(false);
    // Wait for the transition to finish before unmounting the modal component
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedProject(null);
    }, 280);
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
            <a 
              href="/yuntaek_resume.pdf" 
              download="yuntaek_resume.pdf" 
              className="btn btn-primary btn-sm"
              title="하윤택 이력서 다운로드"
            >
              <Download size={15} />
              <span>이력서 다운로드</span>
            </a>
          </div>
        </div>
        {/* Scroll Progress Bar Element */}
        <div className="scroll-progress-container">
          <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
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
                  href={`mailto:${resumeData.personalInfo.email}`} 
                  className="btn btn-outline-primary"
                >
                  <Mail size={16} />
                  <span>이메일 보내기</span>
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
                  <p key={idx} className="about-paragraph" dangerouslySetInnerHTML={{ __html: para }}></p>
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
                    {/* Big Number KPI Highlight Emblem */}
                    <div className="project-kpi-highlight">
                      <span className="kpi-label">핵심 성과</span>
                      <span className="kpi-value">{project.kpi}</span>
                    </div>
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
                href="/yuntaek_resume.pdf" 
                download="yuntaek_resume.pdf" 
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

      {/* Project Detail Modal with soft transition logic */}
      {isModalOpen && selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isActive={modalActive} 
          onClose={closeProjectModal} 
        />
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

// Subcomponent: Project Details Modal with animation class mapping
function ProjectModal({ project, isActive, onClose }) {
  const { corp, period, title, modalData } = project;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className={`modal-overlay ${isActive ? 'active' : ''}`} onClick={handleOverlayClick}>
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
                  <h4 className="card-title">실험 설계 및 검증</h4>
                  <p className="card-text">{modalData.experiment}</p>
                </div>
                
                <div className="modal-card result">
                  <span className="card-badge">Result</span>
                  <h4 className="card-title">결과</h4>
                  <p className="card-text">{modalData.result}</p>
                </div>
                
                <div className="modal-card contribution">
                  <span className="card-badge">Contribution</span>
                  <h4 className="card-title">기여 내용</h4>
                  <p className="card-text">{modalData.contribution}</p>
                </div>
                
              </div>
            </div>

            <div className="modal-detail-section">
              <h3 className="modal-section-title">상세 내용</h3>
              <div className="modal-detail-card">
                {modalData.detailParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

# Studio Horizon Portfolio

Studio Horizon의 브랜드 전략, 웹 디자인, 반응형 개발 역량을 소개하는 정적 포트폴리오 웹사이트입니다.

프리랜서 웹사이트 제작을 위한 첫 번째 포트폴리오 프로젝트로, 실제 의뢰 상담부터 프로젝트 사례 확인까지 이어지는 흐름을 기준으로 제작했습니다. 사이트에 소개된 Maison de Vert, Layer Coffee, Onda Stay는 학습과 포트폴리오 구성을 위한 가상 프로젝트입니다.

## 공개 사이트

- [Studio Horizon 포트폴리오](https://grow-mindset.github.io/studio-horizon-portfolio/)
- 연락처: 010-7173-3214
- 이메일: studiohorizon.help@gmail.com

## 주요 기능

- 데스크톱·태블릿·모바일 반응형 레이아웃
- 브랜드별 프로젝트 상세 페이지 3개
- 모바일 메뉴와 스크롤 반응형 헤더
- 키보드 탐색, 본문 바로가기, 포커스 표시 지원
- 사용자의 움직임 줄이기 설정 지원
- 입력값 검증과 개인정보 처리 동의가 포함된 문의 폼
- FormSubmit을 이용한 이메일 문의 전달
- 검색엔진 및 소셜 공유용 메타데이터
- Google Search Console 등록을 위한 사이트맵과 robots 설정

## 사용 기술

- HTML5: 의미에 맞는 문서 구조와 접근성 속성
- CSS3: 공통 색상 변수, Grid, Flexbox, 반응형 미디어 쿼리
- JavaScript: 모바일 메뉴, 스크롤 헤더, 문의 폼 검증
- GitHub Pages: 정적 사이트 배포
- FormSubmit: 별도의 서버 없이 이메일 문의 전달

프레임워크나 빌드 도구 없이 HTML, CSS, JavaScript의 기본 동작을 이해하는 데 초점을 맞췄습니다.

## 프로젝트 구조

```text
Project_1st/
├─ index.html                 # 메인 포트폴리오 페이지
├─ css/
│  └─ style.css              # 공통 디자인과 반응형 스타일
├─ js/
│  └─ main.js                # 메뉴, 헤더, 문의 폼 동작
├─ projects/
│  ├─ maison-de-vert.html    # 식물 라이프스타일 프로젝트
│  ├─ layer-coffee.html      # 스페셜티 커피 프로젝트
│  └─ onda-stay.html         # 숙박 브랜드 프로젝트
├─ assets/
│  ├─ icons/favicon.svg
│  └─ images/
│     ├─ IMAGE_CREDITS.md    # 이미지 원본과 라이선스 안내
│     └─ optimized/          # 웹용으로 최적화한 이미지
├─ robots.txt
└─ sitemap.xml
```

## 로컬에서 확인하기

이 프로젝트는 정적 사이트이므로 별도의 패키지 설치가 필요하지 않습니다.

프로젝트 폴더에서 아래 명령을 실행합니다.

```powershell
python -m http.server 4173
```

브라우저에서 `http://localhost:4173`으로 접속합니다. 서버를 종료할 때는 실행 중인 터미널에서 `Ctrl+C`를 누릅니다.

## 반응형 기준

- 데스크톱: 901px 이상
- 태블릿: 900px 이하에서 주요 그리드 재배치
- 모바일: 640px 이하에서 메뉴와 콘텐츠를 단일 열로 전환

정확한 조건과 화면별 값은 `css/style.css`의 미디어 쿼리에서 관리합니다.

## 접근성과 품질

- 모든 페이지에 하나의 주 제목(`h1`) 사용
- `header`, `nav`, `main`, `section`, `footer` 구조 적용
- 키보드만으로 메뉴, 링크, 문의 폼 이용 가능
- 입력 오류를 `aria-invalid`, `aria-describedby`, `aria-live`로 안내
- 의미를 전달하는 이미지와 장식용 이미지를 구분
- 밝은 배경의 작은 글자도 WCAG 권장 명암 대비 4.5:1 이상 확보

2026년 9월 모바일 PageSpeed Insights 검사 결과:

- 성능: 100
- 접근성: 100
- 권장사항: 100
- 검색엔진 최적화: 100

측정 결과는 네트워크와 측정 환경에 따라 달라질 수 있습니다.

## 문의 폼 운영 안내

문의 폼은 FormSubmit을 통해 `studiohorizon.help@gmail.com`으로 전달됩니다.

배포 주소나 수신 이메일을 변경한 경우 다음 항목을 확인해야 합니다.

1. 새 배포 주소에서 테스트 문의를 한 번 보냅니다.
2. 수신 이메일로 도착한 FormSubmit 활성화 메일을 승인합니다.
3. 필수 항목 검증과 실제 이메일 수신 여부를 다시 확인합니다.

문의 정보는 외부 서비스인 FormSubmit을 통해 처리되므로 실제 고객 프로젝트에서는 고객에게 처리 방식과 개인정보 안내 문구를 확인받아야 합니다.

## 이미지 출처

사용한 사진의 원본 주소와 제공자는 [IMAGE_CREDITS.md](assets/images/IMAGE_CREDITS.md)에 정리되어 있습니다. 이미지를 교체하거나 상업 프로젝트에 재사용하기 전에는 각 제공 사이트의 최신 라이선스를 다시 확인해야 합니다.

## 유지보수 위치

- 브랜드 공통 색상과 글꼴: `css/style.css`의 `:root`
- 메인 페이지 내용: `index.html`
- 프로젝트 내용: `projects/` 폴더의 각 HTML 파일
- 메뉴와 문의 폼 동작: `js/main.js`
- 검색에 공개되는 주소: `sitemap.xml`, `robots.txt`, 각 페이지의 canonical 메타 태그

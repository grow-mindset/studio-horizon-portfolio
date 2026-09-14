# Studio Horizon Portfolio

브랜드 전략, 웹 디자인, 반응형 개발 역량을 보여주기 위해 제작한 정적 포트폴리오 웹사이트입니다.

## 주요 기능

- 데스크톱·태블릿·모바일 반응형 레이아웃
- 프로젝트 상세 페이지 3개
- 키보드 접근성과 움직임 줄이기 설정 지원
- 모바일 메뉴와 스크롤 헤더
- 입력값 검증이 포함된 프로젝트 문의 폼
- FormSubmit을 이용한 이메일 문의 전달

## 프로젝트 구조

```text
Project_1st/
├─ index.html
├─ css/style.css
├─ js/main.js
├─ projects/
│  ├─ maison-de-vert.html
│  ├─ layer-coffee.html
│  └─ onda-stay.html
└─ assets/
   ├─ icons/favicon.svg
   └─ images/optimized/
```

## 로컬에서 확인하기

프로젝트 폴더에서 아래 명령을 실행한 뒤 `http://localhost:4173`에 접속합니다.

```powershell
python -m http.server 4173
```

## 배포 후 확인할 사항

1. 배포된 사이트에서 문의 폼을 한 번 제출합니다.
2. `studiohorizon.help@gmail.com`으로 받은 FormSubmit 활성화 메일을 승인합니다.
3. 문의가 정상적으로 수신되는지 다시 시험합니다.

이미지 출처는 `assets/images/IMAGE_CREDITS.md`에서 확인할 수 있습니다.


# onda-stay

여행지의 분위기 속에서 편안한 휴식을 제안하는 가상 스테이 브랜드의 반응형 소개 웹사이트입니다.

## 구성

- 브랜드 소개, 스테이·객실 안내, 로컬 가이드, 예약 문의 영역
- 모바일 메뉴와 키보드 조작 지원
- 필수 입력값 및 체크인 날짜를 확인하는 데모 예약 폼
- 시맨틱 HTML, 대체 텍스트, 건너뛰기 링크, 포커스 표시 적용

## 공개 주소

- [onda-stay](https://grow-mindset.github.io/studio-horizon-portfolio/onda-stay/index.html)

## 실행 방법

`index.html`을 브라우저에서 열거나, 로컬 개발 서버의 `onda-stay/index.html` 경로로 접속합니다.

## 폴더 구조

```text
onda-stay/
├─ assets/images/    # 페이지에 사용하는 이미지
├─ css/style.css     # 반응형 스타일과 디자인 변수
├─ js/main.js        # 메뉴와 문의 폼 상호작용
├─ index.html        # 페이지 구조와 SEO 기본 메타 정보
└─ IMAGE_CREDITS.md  # 이미지 출처
```

## 배포 전 확인 사항

1. `hello@onda-stay.example`과 전화번호를 실제 고객 문의 채널로 교체합니다.
2. 현재 문의 폼은 데모입니다. Formspree, 자체 API 등 실제 수신 서비스를 연결한 뒤 테스트합니다.
3. 이미지 원본의 최신 라이선스 조건을 다시 확인합니다.
4. 실제 휴대폰과 데스크톱 브라우저에서 최종 화면과 문의 흐름을 점검합니다.

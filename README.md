## Cheon Seol Hee PORTFOLIO

![image](https://github.com/seolhee313/PORTFOLIO/assets/125417882/2e513356-257e-485f-930c-e27330f8440c)

- Live Demo : https://portfolio-313.web.app/
- 작업 기간 : 15일

## 정보
-

## 사용 스택
- vite(https://ko.vitejs.dev/) 를 사용하여 사이트를 번들링하고 관리합니다.
- gsap(https://greensock.com/gsap) 를 이용하여 패럴랙스 효과를 줍니다.
- lenis(https://lenis.studiofreight.com/) 를 이용하여 스므스 효과를 구현합니다.
- Firebase(https://firebase.google.com/?hl=ko/) 를 통해 사이트를 배포합니다.
- git(https://github.com/) 을 사용하여 파일을 관리합니다.
- HTML, SCSS 기반으로 웹사이트의 기본 레이아웃 설계합니다.
- 웹 표준 및 웹 접근성을 준수합니다. ARIA(Accessible Rich Internet Applications)

## 특징
-

## Screenshots

## 개발 환경 프로젝트 실행 방법
1. **레포지토리 클론 :** `git clone https://github.com/seolhee313/PORTFOLIO/tree/main`
- vite를 설치 후 환경 설정을 합니다. vite.config.js파일을 만들고 다음과 같이 작성합니다.
export default {
  root: "src",
  build: {
    outDir: "../public",
  },
};
2. **vite 설치 :** `npm create vite@latest`
3. **gsap 설치 :** `npm install gsap`
4. **lenis 설치 :** `npm install @studio-freight/lenis`
5. **프로젝트 시작 :** `npm run dev`
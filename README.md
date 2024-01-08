# React + Vite

<h1>날씨에 따른 옷뭐입지? 프로젝트입니다.</h1>

<img width="365" alt="날씨프로젝트사진" src="https://github.com/leechengwon/weet/assets/141094801/f94932e0-9c81-43c3-a781-5617aee3fcc0">

- Period

- 20240108 ~ 20240000

- 토탈 웹 개발

* 반응형 적용

  <br> - 날씨정보를 확인할수있습니다.
  <br> - 날씨정보를 통해 날씨에 맞는 옷을 추천 받을수 있으며 유저에 개인차에 따라 선택도 가능 합니다.
  <br> - 유저들이 커뮤니케이션 공간을 만들어 소통 할수 있는 홈페이지입니다.

* ### 데모 영상(url 클릭)

  url 기입하기

  - ### 백엔드 깃허브 레포지토리 url 클릭
  - <a href="https://github.com/team0102/weather-backend" target="_blank">백엔드 깃허브 URL</a>

- Developers & parts

  - <a href="https://github.com/leechengwon" target="_blank">이청원</a>
    - 컴포넌트:
    - 페이지:
  - <a href="https://github.com/JISUlicious" target="_blank">홍지수</a>
    - 컴포넌트:
    - 페이지:
  - <a href="https://github.com/Jaylogg" target="_blank">박민재</a>
    - 컴포넌트:
    - 페이지:

- Tech stacks

  - <img src="https://img.shields.io/badge/React-%2320232a?style=flat-square&amp;logo=React&amp;logoColor=%2361DAFB">
  - <img src="https://img.shields.io/badge/Sass-DB7093?style=flat-square&amp;logo=sass&amp;logoColor=white">
  - <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&amp;logo=JavaScript&amp;logoColor=black">
  - <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&amp;logo=Redux&amp;logoColor=white">
  - <img src="https://img.shields.io/badge/Soket.Io-black?style=flat-square&amp;logo=Soket.io&amp;logoColor=black">
  - <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&amp;logo=Axios&amp;logoColor=white">
  - <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&amp;logo=Vite&amp;logoColor=white">

- Tools

  - <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&amp;logo=VisualStudioCode&amp;logoColor=white">
  - <img src="https://img.shields.io/badge/Github-181717?style=flat-square&amp;logo=Github&amp;logoColor=white">

- Communication

  - <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&amp;logo=slack&amp;logoColor=white">
  - <img src="https://img.shields.io/badge/Notion-000000?style=flat-square&amp;logo=notion&amp;logoColor=white">
  - <img src="https://img.shields.io/badge/Trello-brown?style=flat-square&amp;logo=Trello&amp;logoColor=white">

  # Folder Tree

```
// 폴더 트리 구조는 아래를 참고합니다.

📦 project
├─ .vscode
├─ node_modules
├─ public
│  ├─ data
│  ├─ favicon
│  ├─ fonts
│  ├─ images
│  └─ svg
├─ src
│  ├─ API
│  ├─ components
│  ├─ data
│  │     ├─ API.jsx
│  │     └─ TEST_API.js
│  ├─ pages
│  │  └─ Main
│  │     ├─ Main.js
│  │     └─ Main.scss
│  ├─ styles
│  │  └─ Base
│  │     ├─ common.js
│  │     └─ reset.scss
│  │  └─ partials
│  │     ├─ mixin.js
│  │     └─ variables.scss
│  ├─ svg
│  ├─ App.js
│  ├─ index.js
│  └─ Router.js
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc
├─ conpig.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```

# Naming & Rules

## CSS / Scss

```scss
// CSS 또는 Scss 클래스 네이밍은 기본적으로 camelCase를 따릅니다.
.postList {
	...
}
```

## React

```jsx
// import 순서는 아래와 같이 정렬합니다.
import React from 'react';                 // 1. React + hook
import Button from 'url';                  // 2. Components
import './Button.scss'                     // 3. Scss

// 변수와 함수의 이름은 camelCase를 따릅니다.
const userInfo;
const submitComment = () => {
	...
}

// 상수는 UPPER_SNAKE_CASE를 따릅니다.
const USER_DATA;

// 변수와 조합해 문자열을 생성하는 경우에는 템플릿 리터럴을 사용합니다.
const message = `hello, ${name}!`;         // good
const message = 'hello' + name + "!";      // bad
```

## Files

```
// 파일명은 camelCase를 따릅니다.
PostList.js                                // good
postlist.js                                // bad
```

## Branch

```
// 브랜치 이름은 기능 // 페이지UI // 컴포넌트별로 명명합니다.
ui/login      //UI브렌치
feature/login //기능브렌치
component/button //컴포넌트브렌치

// 긴급한 오류를 수정하기 위해 아래와 같은 브랜치를 생성할 수도 있습니다.
hotfix/[브랜치명]
```

# PR & commit

```
깃모지를 활용합니다.
```

<a href="https://gitmoji.dev/" target="깃모지">깃모지 URL</a>

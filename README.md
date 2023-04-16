# 코인 모의 투자 사이트 (코인왕)

https://coin-king.vercel.app/

### 자세한 내용은 [Notion 정리](https://puzzle-musician-212.notion.site/Coin-King-2b13de3735de4a05a82e801f35d5b65b)

### 폴더 관리
```bash
./src
|-- api         axios 인스턴스 및 외부 api 정의
|-- app         Nextjs의 page,layout 및 routing 폴더
|-- atoms       Recoil atom 관리
|-- components  app의 page, layout에서 사용될 컴포넌트 관리
|    |-- common 공통 컴포넌트 관리
|    |-- icons  Next/Image로 최적화된 이미지 컴포넌트 관리
|-- constants   상수 값 관리 ex) Tailwind에서 사용할 color
|-- context     Provider 관리 ex) Recoil, NextAuth
|-- hooks       Custom Hook 관리
|-- queries     react-query custom hook 관리
|-- services    백엔드 api 로직 관리 
|-- types       Type 관리 ex) upbit Coin type
|-- pages       NextAuth에서 아직 Next 13버전 최적화되지 않아 pages아래에 Nextaut 파일 설정
|-- utils       util 함수 관리
```

### ver 1 디자인 
<div align="center">
<img width="800" alt="스크린샷 2023-04-12 오전 3 30 39" src="https://user-images.githubusercontent.com/48472989/231256522-94f9bd1c-e85a-432d-bf99-aaff8d6e53e1.png">
</div>
<div align="center">
<img width="800" alt="스크린샷 2023-04-12 오전 3 31 13" src="https://user-images.githubusercontent.com/48472989/231256651-531ed246-ce74-4c04-9ab7-a64ef4478b81.png">
</div>


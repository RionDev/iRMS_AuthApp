# iRMS Auth App

인증 부가기능 앱 (비밀번호 변경 등). 로그인은 common 모듈에서 처리.

## 기술 스택

- React 18 + TypeScript
- Vite (빌드 도구)
- Zustand (상태 관리 — common에서 제공)
- Axios (HTTP 클라이언트 — common에서 제공)
- Vitest + React Testing Library (테스트)

## 연동 BE API

| 엔드포인트                  | 메서드 | 설명          | 권한        |
| --------------------------- | ------ | ------------- | ----------- |
| `/api/auth/change-password` | POST   | 비밀번호 변경 | 인증 사용자 |
| `/api/auth/me`              | GET    | 내 정보 조회  | 인증 사용자 |

## 라우트

| 경로             | 페이지               | 설명          |
| ---------------- | -------------------- | ------------- |
| `/login`         | `LoginPage` (common) | 로그인        |
| `/auth/password` | `ChangePasswordPage` | 비밀번호 변경 |

## 사전 준비

```bash
# submodule 초기화
git submodule update --init --recursive

# 환경 변수 설정
cp .env.example .env
```

## 실행

```bash
npm install
npm run dev        # http://localhost:3001/auth/
```

## 테스트

```bash
npm test           # 단일 실행
npm run test:watch # watch 모드
```

## 빌드

```bash
npm run build      # dist/ 생성
npm run preview    # 빌드 결과 미리보기
```

## Docker

```bash
docker compose up -d    # http://localhost:3001/auth/
docker compose down
```

루트 gateway를 함께 띄운 경우 권장 진입점은 `http://localhost:3000/auth/`다.

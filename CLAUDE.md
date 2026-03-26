# iRMS Auth App

인증 부가기능 앱. 로그인/로그아웃/토큰갱신은 common 모듈이 담당하며, 이 앱은 비밀번호 변경 등 인증 부가 기능만 담당한다.

## 책임

- 비밀번호 변경 UI (`POST /api/auth/change-password`)
- 내 정보 조회 (`GET /api/auth/me`)
- 향후 계정 관리 기능 추가 시 이 앱에 포함

## 공통 규칙

- 계층 분리: pages / components / services / types
- common 모듈은 `@common/` alias로 import
- API 호출은 services 파일에서만
- 인증 상태는 `useAuth` 훅으로만 접근
- 컴포넌트는 props 기반 순수 UI

## 고유 규칙

- 로그인 페이지를 이 앱에 구현하지 않는다 — common의 `LoginPage` 사용
- BE `auth-service` (포트 8001)의 부가 기능 엔드포인트만 대응
- 독립 실행 시 Vite dev server 포트 3001 사용

## 상세 정책

| 정책 | 경로 | 내용 |
|------|------|------|
| 컴포넌트 | `common/docs/components.md` | 공통 UI 컴포넌트 사용법 |
| 인증 | `common/docs/auth.md` | 토큰 관리, 인증 훅 사용법 |
| API 클라이언트 | `common/docs/api-client.md` | Axios 인스턴스, 인터셉터 |
| 상태 관리 | `common/docs/stores.md` | Zustand store 규칙 |

## BE API 대응

| 서비스 함수 | 엔드포인트 | 메서드 | BE 대응 |
|-------------|-----------|--------|---------|
| `changePassword` | `/api/auth/change-password` | POST | `service.py → change_user_password` |
| `getMe` | `/api/auth/me` | GET | `service.py → get_vuser_by_idx` |

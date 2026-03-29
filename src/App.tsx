import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '@common/pages/LoginPage';
import { useAuthStore } from '@common/stores/authStore';
import { authRoutes } from './routes';

function AuthEntryRedirect() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return (
    <Navigate
      to={isAuthenticated ? '/password' : '/login?redirect=/auth/password'}
      replace
    />
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<AuthEntryRedirect />} />
      <Route path="/*" element={authRoutes} />
      <Route path="*" element={<Navigate to="/password" replace />} />
    </Routes>
  );
}

import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '@common/pages/LoginPage';
import { SignupPage } from '@common/pages/SignupPage';
import { useAuthStore } from '@common/stores/authStore';
import { ChangePasswordPage } from './pages/ChangePasswordPage';

function RequireAuth({ children }: { children: React.ReactElement }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  if (!isAuthenticated) {
    window.location.href = '/auth/login?redirect=' + encodeURIComponent(window.location.pathname);
    return null;
  }
  return children;
}

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage signupUrl="/auth/signup" defaultRedirect="/auth/password" />} />
      <Route path="/signup" element={<SignupPage loginUrl="/auth/login" />} />
      <Route path="/password" element={<RequireAuth><ChangePasswordPage /></RequireAuth>} />
      <Route path="*" element={<Navigate to="/password" replace />} />
    </Routes>
  );
}

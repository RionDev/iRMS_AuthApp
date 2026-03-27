import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '@common/pages/LoginPage';
import { useAuthStore } from '@common/stores/authStore';
import { authRoutes } from './routes';

function AuthEntryRedirect() {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  return <Navigate to={isAuthenticated ? '/auth/password' : '/login'} replace />;
}

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth" element={<AuthEntryRedirect />} />
      <Route path="/auth/*" element={authRoutes} />
      <Route path="*" element={<Navigate to="/auth/password" replace />} />
    </Routes>
  );
}

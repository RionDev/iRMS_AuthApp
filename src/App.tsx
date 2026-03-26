import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '@common/pages/LoginPage';
import { authRoutes } from './routes';

export function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/auth/*" element={authRoutes} />
      <Route path="*" element={<Navigate to="/auth/password" replace />} />
    </Routes>
  );
}

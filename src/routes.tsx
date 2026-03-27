import { Routes, Route, Navigate } from 'react-router-dom';
import { ChangePasswordPage } from './pages/ChangePasswordPage';

export const authRoutes = (
  <Routes>
    <Route path="/auth/password" element={<ChangePasswordPage />} />
    <Route path="*" element={<Navigate to="/auth/password" replace />} />
  </Routes>
);

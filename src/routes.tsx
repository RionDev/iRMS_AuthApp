import { Routes, Route, Navigate } from 'react-router-dom';
import { ChangePasswordPage } from './pages/ChangePasswordPage';

export const authRoutes = (
  <Routes>
    <Route path="/password" element={<ChangePasswordPage />} />
    <Route path="*" element={<Navigate to="/password" replace />} />
  </Routes>
);

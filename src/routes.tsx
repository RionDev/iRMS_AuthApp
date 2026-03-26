import { Routes, Route } from 'react-router-dom';
import { ChangePasswordPage } from './pages/ChangePasswordPage';

export const authRoutes = (
  <Routes>
    <Route path="/password" element={<ChangePasswordPage />} />
  </Routes>
);

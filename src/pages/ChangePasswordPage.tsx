import { useState } from 'react';
import { Layout } from '@common/components/Layout';
import { useAuth } from '@common/hooks/useAuth';
import { PasswordForm } from '../components/PasswordForm';
import { changePassword } from '../services/authService';

export function ChangePasswordPage() {
  const { user } = useAuth();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (currentPassword: string, newPassword: string) => {
    setMessage(null);
    setError(null);
    try {
      await changePassword({ current_password: currentPassword, new_password: newPassword });
      setMessage('비밀번호가 변경되었습니다.');
    } catch {
      setError('비밀번호 변경에 실패했습니다.');
    }
  };

  if (!user) return null;

  return (
    <Layout title="비밀번호 변경">
      <div
        style={{
          backgroundColor: '#fff',
          padding: '24px',
          borderRadius: '8px',
          maxWidth: '400px',
        }}
      >
        <h2 style={{ marginTop: 0 }}>비밀번호 변경</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>
          현재 사용자: {user.name} ({user.id})
        </p>
        <PasswordForm onSubmit={handleSubmit} />
        {message && <p style={{ color: '#2e7d32', marginTop: '12px' }}>{message}</p>}
        {error && <p style={{ color: '#d32f2f', marginTop: '12px' }}>{error}</p>}
      </div>
    </Layout>
  );
}

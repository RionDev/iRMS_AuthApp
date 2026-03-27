import { useState } from 'react';
import type { FormEvent } from 'react';
import { Input } from '@common/components/Input';
import { Button } from '@common/components/Button';
import { theme } from '@common/styles/theme';

interface PasswordFormProps {
  onSubmit: (currentPassword: string, newPassword: string) => void;
}

export function PasswordForm({ onSubmit }: PasswordFormProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('새 비밀번호가 일치하지 않습니다.');
      return;
    }
    setError(null);
    onSubmit(currentPassword, newPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="현재 비밀번호"
        type="password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        required
      />
      <Input
        label="새 비밀번호"
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <Input
        label="새 비밀번호 확인"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={error ?? undefined}
        required
      />
      <Button type="submit" style={{ width: '100%' }}>
        변경하기
      </Button>
      {error && <p style={{ color: theme.colors.danger, marginTop: '12px' }}>{error}</p>}
    </form>
  );
}

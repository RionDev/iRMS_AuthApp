import apiClient from '@common/services/apiClient';
import type { ChangePasswordRequest } from '../types/auth';
import type { VUser } from '@common/types/auth';

export async function changePassword(data: ChangePasswordRequest): Promise<void> {
  await apiClient.post('/api/auth/change-password', data);
}

export async function getMe(): Promise<VUser> {
  const res = await apiClient.get<VUser>('/api/auth/me');
  return res.data;
}

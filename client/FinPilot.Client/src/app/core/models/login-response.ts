import { User } from './user';

export interface LoginResponse {

  accessToken: string;

  refreshToken: string;

  expiresAt: string;

  user: User;

}
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  roles: string[];
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
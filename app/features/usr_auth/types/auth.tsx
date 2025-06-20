export interface SignupValues {
  fullName: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
  receiveUpdates?: boolean;
};

export interface LoginValues {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  signupAt: Date;
  loginTime: string;
  // current account status
  status: 'pending' | 'active' | 'suspended';
  // permission level
  accessLevel: 'user' | 'organizer' | 'admin' | 'superadmin';
}

export interface AuthFormProps {
  mode: 'signup' | 'login';
}




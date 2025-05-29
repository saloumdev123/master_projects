export interface User {
  id?: number;
  username: string;
  email: string;
  fullName: string;
  phoneNumber: string;
  enabled: boolean;
  role: 'CANDIDAT' | 'RECRUITER'; 
}

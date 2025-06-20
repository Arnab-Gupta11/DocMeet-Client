export interface IUser{
  _id: string;
  fullName: string;
  email: string;
  profileImage: string;
  gender: 'male' | 'female' | 'other';
  isBlocked: boolean;
  isVerified?: boolean;
  role: 'PATIENT' | 'DOCTOR' | 'ADMIN';
}

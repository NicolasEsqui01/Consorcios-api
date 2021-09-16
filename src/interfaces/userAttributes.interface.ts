export interface UserAttributes {
  id: number;
  role: string;
  email: string;
  email_status: boolean;
  name: string;
  password: string;
  phone: string;
  dni: number;
  cuil?: string;
  isActive?: boolean;
}
export interface loginUser{
  email: string;
  password: string;

}
export interface userServices {
  role: string;
  email: string;
  name: string;
  password: string;
  phone: string;
  dni: number;
  cuil?: string;
}

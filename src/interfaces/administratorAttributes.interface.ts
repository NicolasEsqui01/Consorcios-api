export interface AdministratorAttributes {
  id: number;
  admin_code: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  dni: number;
  password: string;
  matric_num: string;
  cuil: string;
  accountStatus: boolean
}

export interface AdministratorServices{
  admin_code: number;
  name: string;
  role: string;
  email: string;
  phone: string;
  dni: number;
  password: string;
  matric_num:  string;
  cuil: string;
}

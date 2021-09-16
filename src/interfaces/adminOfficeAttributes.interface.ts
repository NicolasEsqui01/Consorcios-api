export interface AdminOfficeAttributes {
  id: number;
  cuit: string;
  fiscal_status: string;
  address: string;
  phone: string;
  payment_cbu: string;
  payment_alias: string;
  payment_account_num: string;
  payment_bank: string;
  payment_holder: string;
  //check check check
  active_consortiums: boolean;
  head_admin: boolean;
}

export interface CreateOfficeint {
  cuit: string;
  fiscal_status: string;
  address: string;
  phone: string;
  payment_cbu: string;
  payment_alias: string;
  payment_account_num: string;
  payment_bank: string;
  payment_holder: string;
  head_admin: boolean;
}

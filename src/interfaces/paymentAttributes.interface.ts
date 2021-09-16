export interface PaymentAttributes {
  id: number;
  status: string;
  date_payment: Date;
  date_confirmed: Date;
  //check
  administrator_id: number;
  user_id: number;
  consortium_id: number;
  unit_id: number;
}

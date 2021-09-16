export interface MessageAttributes {
  id: number;
  user_id: number;
  administrator_id: number;
  content: string;
  date: Date;
  status: string;
  previous_message: number;
}

export interface SubscriptionAttributes {
  id: number;
  type: string;
  status: string;
  price: number;
  description: string;

  //check check check
  active_buildings: number;
  buildings: number;
}

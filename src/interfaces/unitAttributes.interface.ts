export interface UnitAttributes {
  id: number;
  type: string;
  complementary_unit: number;
  unit_number: number;
  owner: number;
  tenant: number;
  floor: string;
  apt?: string;
}

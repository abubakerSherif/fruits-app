import { Nutritions } from "./nutritions.model";

export class Fruit {
  id!: string;
  name!: string;
  family!: string;
  order!: string;
  genus!: string;
  nutritions!: Nutritions;

  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.id = data.id;
    this.name = data.name;
    this.family = data.family;
    this.order = data.order;
    this.genus = data.genus;
    this.nutritions = data.nutritions;
  }

  public ID() {
    return this.id;
  }
}

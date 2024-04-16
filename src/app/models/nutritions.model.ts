export class Nutritions {
  calories!: number;
  fat!: number;
  sugar!: number;
  carbohydrates!: number;
  protein!: number;


  constructor(data?: any) {
    if (!data) {
      return;
    }
    this.calories = data.calories;
    this.fat = data.fat;
    this.sugar = data.sugar;
    this.carbohydrates = data.carbohydrates;
    this.protein = data.protein;
  }
}

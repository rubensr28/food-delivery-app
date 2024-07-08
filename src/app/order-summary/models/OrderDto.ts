import { FoodItem } from "../../shared/models/FoodItem";
import { Restaurant } from "../../shared/models/Restaurant";

export interface OrderDto {

    foodItemsList: FoodItem[];
    restaurant: Restaurant;
    userId: number;
}
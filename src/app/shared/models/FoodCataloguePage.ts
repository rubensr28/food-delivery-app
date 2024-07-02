import { Restaurant } from "./Restaurant";
import { FoodItem } from "./FoodItem";

export interface FoodCataloguePage{
    foodItemList?: FoodItem[];
    restaurant?: Restaurant | null;

}
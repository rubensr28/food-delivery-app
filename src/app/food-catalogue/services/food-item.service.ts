import { HttpClient } from "@angular/common/http";
import { API_URL_FC } from "../../constants/urls";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { error } from "console";

@Injectable({providedIn: 'root'})
export class FoodItemService {

    private apiUrl = API_URL_FC+'/foodCatalogue/fetchRestaurantAndFoodItemsById/';

    constructor(private http: HttpClient) {
        
    }

    getFoodItemsByRestaurant(id:number): Observable<any>{
        return this.http.get<any>(`${this.apiUrl+id}`).pipe(catchError(this.handleError));

    }

    private handleError(error: any) {
        console.error("An error occured: ", error);
        return throwError(error.message || error);
    }
}
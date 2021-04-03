import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Ihotel } from "../models/hotel";

@Injectable({
    providedIn: 'root'
    } )

export class HotelListService {

    private readonly HOTEL_API_URL='api/hotels.json';

    constructor(private http:HttpClient){

    }

    public getHotels(): Observable<Ihotel[]> {
        return this.http.get<Ihotel[]>(this.HOTEL_API_URL).pipe(
            tap(hotels => console.log('hotels: ', hotels)),
            catchError(this.handleError)
        );
    }


    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }

}
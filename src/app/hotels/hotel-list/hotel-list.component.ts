import { Component, OnInit } from '@angular/core';
import { Ihotel } from '../shared/models/hotel';
import { HotelListService } from '../shared/services/hotel-list.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  
  public title='Liste Hotels';

  public hotels:Ihotel[]=[];

   public showBadge: boolean=false;

   private _hotelFilter = "mot";

   public filteredHotels: Ihotel[]= [];

   public receivedRating: string="";
   public errMsg: string="";

   constructor(private hotelsListService: HotelListService){

   };
 
   ngOnInit(){
    this.hotelsListService.getHotels().subscribe({
      next: hotels => {
        this.hotels=hotels;
        this.filteredHotels = this.hotels;
      },
      error: err=> this.errMsg = err
    }); 
    /*this.filteredHotels = this.hotels;   on fait monter dans subscribe*/
    this.hotelFilter='';
  }
   
   public toggleIsNewBadge():void{
     this.showBadge= !this.showBadge;
     
   }

   public get hotelFilter():string {
     return this._hotelFilter;
   }

   public set hotelFilter(filter: string){
     this._hotelFilter=filter;

     this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter): this.hotels;
   }

   public receiveRatingClick(message: string): void {
    this.receivedRating = message;
    console.log(message);
  }

   private filterHotels(criteria: string): Ihotel[]{
     criteria=criteria.toLocaleLowerCase();  
     
      const res=this.hotels.filter(
       (hotel: Ihotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) != -1
      );

      return res;
   }
}

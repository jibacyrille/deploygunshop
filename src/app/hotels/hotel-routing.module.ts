import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailGuard } from './shared/guards/hotel-detail.guard';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { 
        path: 'hotels/:id', component: HotelDetailComponent,
        canActivate: [HotelDetailGuard]
      }, 
      { path: 'hotels', component: HotelListComponent},
    ])
  ], 
 exports: [RouterModule]
})
export class HotelRoutingModule { }

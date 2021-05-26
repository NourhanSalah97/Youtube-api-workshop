import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './Components/details-page/details-page.component';
import { HomePageComponent } from './Components/home-page/home-page.component';

const routes: Routes = [
  {path: 'Home',component:HomePageComponent},
{path:'Details',component:DetailsPageComponent},
{path:'',redirectTo:'/Home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

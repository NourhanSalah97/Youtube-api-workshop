import { Component, OnInit } from '@angular/core';
import {YoutubeApiService} from 'src/app/Services/youtube-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import{Router}from '@angular/router';
import { startWith } from 'rxjs/operators';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
videos: any[]=[];
vID:number=0;
Title:string='';
config:any;




inputTouched = false;
  loading = false;
  
  
  



constructor(private YoutubeApiService:YoutubeApiService,private spinner:NgxSpinnerService,
  private router:Router
  ){
    this.config = {
      itemsPerPage: 7,
      currentPage: 1,
     
    };
  }
  
ngOnInit():void {
  this.handleVideos();
  
}
handleVideos(){
  this.loading=true; 

  this.YoutubeApiService.getVideos('UCDPM_n1atn2ijUwHd0NNRQw',50).subscribe((list:any) =>{
    for (let element of list["items"]){
      this.videos.push(element)
    }
    console.log(list);

    
      
    });
    this.inputTouched = true;
        this.loading = false;
  };
  viewDetails(vID:number){
    this.router.navigate(['/Details',vID]);
  }
  Search(){
    if(this.Title!=""){
      this.videos=this.videos.filter(res=>{
        return res.snippet.title.toLowerCase().match(this.Title.toLowerCase());
      })
    }
    else if(this.Title===""){

      this.ngOnInit();
      
    }

  }
  

  pageChanged(event: any){
    this.config.currentPage = event;
    
  
}

}

  
  
  

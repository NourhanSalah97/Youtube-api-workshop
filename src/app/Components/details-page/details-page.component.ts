import { Component, OnInit } from '@angular/core';
import {YoutubeApiService} from 'src/app/Services/youtube-api.service';
import{Router,ActivatedRoute}from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  private subscriptionList: Subscription[]=[] ;
  vID:any;
  video:any;
  element:any;
  Rating=0;
  favorites: any;
  getFav:any;
  
  constructor(private YoutubeApiService:YoutubeApiService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVideoDetails();
   
    
  }

getVideoDetails(){
  
    this.activatedRoute.paramMap.subscribe((params)=>{
      let videoId:any=params.get('videoId');
      this.vID=videoId;
      this.YoutubeApiService.getVideoDetails(this.vID).subscribe((item)=>{
        this.video=item["items"][0]
        console.log(this.video);
      })
    })

}

    }
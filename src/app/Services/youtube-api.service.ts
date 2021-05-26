import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  
  API_KEY:string= 'AIzaSyD_5-WeBYOnjoiPWp9knUpX1HhJyrHmB4c';

  constructor(public http: HttpClient) {

   }
   getVideos(channel: string,maxResults: number): Observable <Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.API_KEY+ '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
    .pipe(map((response)=>{
      return response
    }))
  }
  getVideoDetails(vID:string): Observable<any>{
    let url = 'https://www.googleapis.com/youtube/v3/videos?id=' + vID + '&key=' + this.API_KEY + '&part=snippet,contentDetails,statistics,status'
    return this.http.get(url)
    .pipe((response)=>{
      console.log(response)
      return response
    },
    

    )

  }
}
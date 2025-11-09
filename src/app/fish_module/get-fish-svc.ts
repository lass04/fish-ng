import { Injectable } from '@angular/core';
import { fishList } from './fishlist-load';
import { FishUnity } from './fish-unity';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetFishSvc {

   constructor(private http: HttpClient){}
   

     getFishList() : Observable<FishUnity[]>{
        return this.http.get<FishUnity[]>('api/fishL');
     }
     
     getFishById(id:number) : Observable<FishUnity>{
      return this.http.get<FishUnity>(`api/fishL/${id}`);
     }

     getFishByTName(name :string): Observable<FishUnity[]>{
      return this.http.get<FishUnity[]>(`api/fisL/?tunisian_name=${name}`);
     }

     addFish(fish:FishUnity):Observable<FishUnity>{
         const httpOption = {
            headers : new HttpHeaders({'Content-Type':"application/json"})
         }
         return this.http.post<FishUnity>('api/fishL',fish,httpOption); 
     }

     removeFish(fish:FishUnity):Observable<any>{
        return this.http.delete<FishUnity>(`api/fishL/${fish.id}`);
     }

     updateFish(fishupd: FishUnity) : Observable<any>{
        return this.http.put<FishUnity>(`api/fishL/${fishupd.id}`,fishupd); 
     }

     getFishByKeyword(keyw : string): Observable<FishUnity[]>{
        return this.http.get<FishUnity[]>(`api/fishL/?tunisian_name=${keyw}`);
     } 


}

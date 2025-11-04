import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { fishList } from './fish_module/fishlist-load';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb(){
    let fishL=fishList;
    return { fishL };
  }
  
}

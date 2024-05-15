import { Injectable } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FilterdropdownService {

  constructor(private http:HttpClient) { }

   getAllBrands(type?:string){
    let params=new HttpParams();
    if(type){
      params=params.append('type',type);
    }

    return this.http.get<string[]>('https://localhost:44378/api/Inventory/brands',{params:params});

  }

  getAllTypes(brand?:string){
    let params=new HttpParams();
    if(brand){
      params=params.append('brand',brand);
    }

    return this.http.get<string[]>('https://localhost:44378/api/Inventory/types',{params:params});

  }

  getAllSpecifications(brand?:string,type?:string){
    let params=new HttpParams();
    if(brand){
      params=params.append('brand',brand);
    }
    if(type){
      params=params.append('type',type);
    }


    return this.http.get<number[]>('https://localhost:44378/api/Inventory/specifications',{params:params});

  }

  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDetails } from '../../models/EquipmentetailsModel'; // Import CategoryDetails model
import {  RequestWithUserDetailsDTO2 } from '../../models/GatepassDTO';
// import { environment } from '../../../environments/environment'; // Adjust the import path as needed
import { environment } from '../../../environments/environment.prod'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class GetequipmentService {

  private baseUrl = 'https://localhost:44378/api/Inventory/categories/details'; // Base URL of the API endpoint
  private apiUrl = environment.apiUrl; // Use the API base URL from environment
  constructor(private http: HttpClient) { }

 
  getCategoryDetails(office:string ,brand?: string,type?:string,specID?:string): Observable<CategoryDetails[]> {
  
    let params = new HttpParams();
    params=params.append('adoffice',office)
    if (brand) {
      params = params.append('brand', brand.toString());
    }
    if (type) {
      params = params.append('type', type);
    }
    if (specID) {
      params = params.append('specID', specID);
    }
  
 
  console.log(params);
    return this.http.get<CategoryDetails[]>(`${this.apiUrl}/Inventory/categories/details`, { params: params });
  }



  getCustomDetailsByRequestId(requestId: string): Observable<RequestWithUserDetailsDTO2[]> {
    return this.http.get<RequestWithUserDetailsDTO2[]>(`${this.apiUrl}/Gatepass/GetCustomDetailsByRequestId/${requestId}`);
  }

  requestProduct(item: any): Observable<any> {
    console.log('Request product:', item);
    return this.http.post<any>(`${this.apiUrl}/Request/fetchEquipmentIdsnew`, item);
  }


   deleteRequest(reqID:string):Observable<any>{
   return  this.http.delete(`${this.apiUrl}/Request/deleteRequest/${reqID}`, { responseType: 'text' });
   }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDetails } from '../../models/EquipmentetailsModel'; // Import CategoryDetails model
import { CustomDTO } from '../../models/GatepassDTO';

@Injectable({
  providedIn: 'root'
})
export class GetequipmentService {

  private baseUrl = 'https://localhost:44378/api/Inventory/categories/details'; // Base URL of the API endpoint

  constructor(private http: HttpClient) { }

 
  getCategoryDetails( brand?: string,type?:string,specID?:string): Observable<CategoryDetails[]> {
  
    let params = new HttpParams();
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
    return this.http.get<CategoryDetails[]>(this.baseUrl, { params: params });
  }


  getCustomDetailsByRequestId(requestId: string): Observable<CustomDTO> {
    return this.http.get<CustomDTO>(`https://localhost:44378/api/Gatepass/GetCustomDetailsByRequestId/${requestId}`);
  }
}

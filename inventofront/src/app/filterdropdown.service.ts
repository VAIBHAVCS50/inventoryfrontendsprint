import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { environment } from '../../environments/environment'; // Adjust the import path as needed
import { environment } from '../../environments/environment.prod'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class FilterdropdownService {
  private apiUrl = environment.apiUrl; // Use the API base URL from environment

  constructor(private http: HttpClient) { }

  getAllBrands(office: string, type?: string) {
    let params = new HttpParams().append('adoffice', office);
    if (type) {
      params = params.append('type', type);
    }
    return this.http.get<string[]>(`${this.apiUrl}/Inventory/brands`, { params: params });
  }

  getAllOffices() {
    return this.http.get<string[]>(`${this.apiUrl}/Inventory/adoffice`);
  }

  getAllTypes(office: string, brand?: string) {
    let params = new HttpParams().append('adoffice', office);
    if (brand) {
      params = params.append('brand', brand);
    }
    return this.http.get<string[]>(`${this.apiUrl}/Inventory/types`, { params: params });
  }

  getAllSpecifications(office: string, brand?: string, type?: string) {
    let params = new HttpParams().append('adoffice', office);
    if (brand) {
      params = params.append('brand', brand);
    }
    if (type) {
      params = params.append('type', type);
    }
    return this.http.get<number[]>(`${this.apiUrl}/Inventory/specifications`, { params: params });
  }
}

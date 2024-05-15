import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {RequestStatusDetailsDTO} from '../models/RequestS';
import {RequestWithUserDetailsDTO} from '../models/adminviewrequest';

@Injectable({
  providedIn: 'root'
})
export class RequestequipmentService {
  private apiUrl = 'https://localhost:44378/api/Request/fetchEquipmentIds'; 
  constructor(private http: HttpClient) { }

  fetchEquipmentIds(userId?: string, quantity?: number, specID?: number): Observable<string[]> {
    const requestModel = {
      userId: userId,
      specID: specID?.toString(),
      quantity: quantity
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<string[]>(this.apiUrl, requestModel, httpOptions);
  }

  getGatepassesBySpecId(specId: number): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:44378/api/Gatepass/GetGatepassesBySpecId/${specId}`);
  }

  getRequestStatus(userId: string): Observable<RequestStatusDetailsDTO[]> {
    return this.http.get<RequestStatusDetailsDTO[]>(`https://localhost:44378/api/Request/status/${userId}`);
  }

  getRequestsWithUserDetailsforadmin(): Observable<RequestWithUserDetailsDTO[]> {
    return this.http.get<RequestWithUserDetailsDTO[]>(`https://localhost:44378/api/Request`);
  }

  
  addInventory(location: string, equipmentId: string, specId: string, type: string, brand: string, description: string): Observable<any> {
    const url = `https://localhost:44378/api/Inventory?location=${location}&equipmentId=${equipmentId}&specId=${specId}&type=${type}&brand=${brand}&description=${description}`;
    return this.http.post<any>(url, {});
  }


  createGatepass(userId: string, equipmentId: string, requestId: string, approverId: string, issueDate: string, status: string): Observable<any> {
    const params = new HttpParams()
      .set('userId', userId)
      .set('equipmentId', equipmentId)
      .set('requestId', requestId)
      .set('approverId', approverId)
      .set('issueDate', issueDate)
      .set('status', status);
  
    return this.http.post<any>(`https://localhost:44378/api/Request/generategatepass`, {}, { params });
  }
  

  getIssuedGatepasses(userId: string): Observable<any> {
    const url = `https://localhost:44378/api/Gatepass/GetByUserId/${userId}`; // Replace 'gatepass' with your actual API endpoint
    return this.http.get(url);
  }




}

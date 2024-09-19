import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
// import { environment } from '../../environments/environment';
import { RequestStatusDetailsDTO } from '../models/RequestS';
import { RequestWithUserDetailsDTO } from '../models/adminviewrequest';
import { environment } from '../../environments/environment.prod'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class RequestequipmentService {
  private apiUrl = environment.apiUrl; // Use the API base URL from environment

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

    return this.http.post<string[]>(`${this.apiUrl}/Request/fetchEquipmentIds`, requestModel, httpOptions);
  }

  getGatepassesBySpecId(adoffice:string,specId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Gatepass/GetGatepassesBySpecId/${specId}/${adoffice}`);
  }

  getRequestsWithUserDetailsforadmin(userId: string, powerrole?: string): Observable<RequestWithUserDetailsDTO[]> {
    let url = `${this.apiUrl}/Request/${userId}`;
    if (powerrole) {
      url += `?powerrole=${powerrole}`;
    }
    return this.http.get<RequestWithUserDetailsDTO[]>(url);
  }

  getspecificuserrequestid(userId: string): Observable<any> {
    const url = `${this.apiUrl}/Request/getuserspecificrequest/${userId}`;
    return this.http.get(url).pipe(
      catchError(this.handleError)
    );
  }

  submitEquipmentRequest(equipmentData: any): Observable<any> {
    const url = `${this.apiUrl}/Request/requestsubmission`;
    return this.http.post(url, equipmentData, { responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }

  submitEquipment(gatepassId: number): Observable<any> {
    const url = `${this.apiUrl}/Request/SubmitEquipment?gatepassId=${gatepassId}`;
    return this.http.post(url, {}, { responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }

  getShelfLifeAnalysis(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/Inventory/shelf-life-analysis`);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  addBatchInventory(inventoryItems: any[]): Observable<any> {
    const url = `${this.apiUrl}/Inventory/AddInventory`;
    return this.http.post<any>(url, inventoryItems);
  }

  getQuantityBySpecification(adoffice: string, itemCode: string): Observable<any[]> {
    const params = new HttpParams().set('adoffice', adoffice).set('itemCode', itemCode);
    return this.http.get<any[]>(`${this.apiUrl}/Inventory/quantity-by-specification`, { params });
  }

  updateRequestStatus(requestId: string, userId: string, userRole: string, action: string, remark: string): Observable<any> {
    const requestBody = {
      requestId,
      userId,
      userRole,
      action,
      remark
    };

    return this.http.post(`${this.apiUrl}/Request/UpdateStatus`, requestBody);
  }

  getIssuedGatepasses(userId?: string): Observable<any> {
    const url = userId ? `${this.apiUrl}/Gatepass/GetByUserId/${userId}` : `${this.apiUrl}/Gatepass/GetByUserId`;
    return this.http.get(url);
  }

  getAllGatepasses(): Observable<any> {
    const url = `${this.apiUrl}/Gatepass/GetAllGatepass`;
    return this.http.get(url);
  }
}

import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:44378/invenhubs',{
      }).build();

    this.hubConnection
      .start()
      .then(() => console.log('Connected to SignalR hub'))
      .catch(err => console.error('Error connecting to SignalR hub:', err));
  
    this.hubConnection.on('EquipmentUpdateRequested', () => {
      console.log("i was called hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
      this.equipmentUpdateSubject.next();
    });
    
    this.hubConnection.on('EquipmentUpdateRequested2', (userId: string) => {
      console.log('EquipmentUpdateRequested2 called with userId:', userId);
      this.equipmentUpdateSubject2.next(userId); // Pass the userId directly
    });

    
    
  }

  private hubConnection!: signalR.HubConnection;
  private equipmentUpdateSubject = new Subject<void>();
  psc$= this.equipmentUpdateSubject.asObservable();

  private equipmentUpdateSubject2 = new Subject<string>(); // Change type to string
  psc2$ = this.equipmentUpdateSubject2.asObservable();


  requestEquipmentUpdate() {
    this.hubConnection.invoke('RequestEquipmentUpdate')
      .catch(err => console.error('Error requesting equipment update:', err));
  }
  
  requestEquipmentUpdate2(userId: string) {
    this.hubConnection.invoke('RequestEquipmentUpdate2', userId)
      .catch(err => console.error('Error requesting equipment update:', err));
  }
  

}

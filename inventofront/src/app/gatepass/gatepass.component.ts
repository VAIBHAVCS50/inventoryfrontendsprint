import { Component, OnInit } from '@angular/core';
import { RequestWithUserDetailsDTO2 } from '../../models/GatepassDTO';
import { GetequipmentService } from '../getEquipmentService/getequipment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gatepass',
  templateUrl: './gatepass.component.html',
  styleUrls: ['./gatepass.component.scss']
})
export class GatepassComponent implements OnInit {
  customDetails: RequestWithUserDetailsDTO2 | null = null;
  equipmentId: string = '';

  constructor(
    private route: ActivatedRoute,
    private gatepassService: GetequipmentService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.equipmentId = params['equipmentId'];
      this.fetchCustomDetails();
    });
  }

  fetchCustomDetails(): void {
    this.gatepassService.getCustomDetailsByRequestId(this.equipmentId)
      .subscribe(
        (data: RequestWithUserDetailsDTO2[]) => {
          if (data.length > 0) {
            this.customDetails = data[0];
          }
        },
        (error) => {
          console.error('Error fetching custom details:', error);
        }
      );
  }
}

import { Component } from '@angular/core';
import { CustomDTO } from '../../models/GatepassDTO';
import { GetequipmentService } from '../getEquipmentService/getequipment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gatepass',
  templateUrl: './gatepass.component.html',
  styleUrl: './gatepass.component.scss'
})
export class GatepassComponent {
  customDetails: CustomDTO | undefined;
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
        (data) => {
          this.customDetails = data;
        },
        (error) => {
          console.error('Error fetching custom details:', error);
        }
      );
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from '../settings.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-setting',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  multiFactorAuth!: boolean;
  loading:boolean=false;
  initial!: boolean;
  modalMessage!: string;
  @ViewChild('excelDataModal') excelDataModal!: ElementRef;
  constructor(private apiService: SettingsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.fetchSettings();
  }

  fetchSettings() {
    this.loading=true;
    this.apiService.getSetting().subscribe((setting: any) => {
      this.loading=false;
      this.multiFactorAuth = setting.doubleFactor;
      this.initial = this.multiFactorAuth; // Save initial value
    });
  }

  saveSettings() {
    this.loading=true;
    this.apiService.updateSetting(this.multiFactorAuth).subscribe(() => {
      console.log('Settings saved successfully');
      this.initial = this.multiFactorAuth; // Update initial value after saving
      this.loading=false;
      if (this.multiFactorAuth) {
        this.modalMessage = 'Multi-Factor Authentication enabled';
      } else {
        this.modalMessage = 'Multi-Factor Authentication disabled. Previous pending requests still need admin\'s approval if the manager has already approved, but for new requests, it is disabled.';
      }

      this.openModal();
    });
  }

  openModal() {
    this.modalService.open(this.excelDataModal);
  }


}

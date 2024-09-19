export interface EquipmentDetailsDTO {
  serialNumber: string;
  brand: string;
  type: string;
  specificationId: string;
 
  location: string;
}

export interface RequestStatusDetailsDTO {
  requestId: string;
  requestDate: Date;
  status: string;
  remark?:string;
  equipments: EquipmentDetailsDTO[];
}
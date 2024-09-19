export interface RequestWithUserDetailsDTO {
  requestId: string;
  userName: string;
  userEmail: string;
  userRole: string;
  requestDate: Date;
  equipments: EquipmentDetailsDTO[];
  status:string;
}

export interface EquipmentDetailsDTO {
  serialNumber: string;
  brand: string;
  type: string;
  specificationId: string;
  status: string;
  location: string;


}
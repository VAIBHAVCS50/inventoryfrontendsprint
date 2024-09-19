export interface EquipmentDetailsDTO {
  serialNumber: string;
  brand: string;
  type: string;
  specificationId: string;
  location: string;
}

export interface RequestWithUserDetailsDTO2 {
  gatepassIDD: number;
  requestId: string;
  approver1: string;
  approver2: string;
  userId: string;
  userName: string;
  userEmail: string;
  userRole: string;
  requestDate: Date;
  issueDate:Date;
  expiryDate?:Date;
  equipments: EquipmentDetailsDTO[];
}
export interface RequestWithUserDetailsDTO {
  userId: string;
  requestId: string;
  equipmentId: string;
  userName: string;
  userEmail: string;
  userRole: string;
  requestLocation: Location;
  requestDate: Date;
  brand: string;
  type: string;
  specificationId: string;
}

export interface Employee {
    userId: string;
    fname: string;
    lname: string;
    role: string;
    email: string;
    position: string;
    isDeleted: boolean;
    requests: any[]; // Update this to match your Request model
    gatepassesRequester: any[]; // Update this to match your Gatepass model
    gatepassesApprover: any[]; // Update this to match your Gatepass model
  }
  
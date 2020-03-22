export interface Contract {
 reedContractId: number;
 employerName: string;
 jobTitle: string;
 locationName: string;
 minimumSalary: number;
 maximumSalary: number;
 expirationDate: Date;
 date: Date;
 jobDescription: string;
 applications: number;
 jobUrl: string;
 isActive: boolean;
 externalUrl: string;
 fullTime?: boolean;
 jobDesciptionFull: string;
 salaryString: string;
 salaryType:string;
}

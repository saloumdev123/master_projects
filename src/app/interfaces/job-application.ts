export interface JobApplication {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  resume: string;
  country: string;
  city: string;
  jobTitle: string;
  jobDescription: string;
  jobApplicationStatus: string;
  dateCreated: string; 
  lettreMotivation: string;


  jobId: number;
  jobTitleFromJob: string;

  candidatId: number;
  candidatFullName: string;
}

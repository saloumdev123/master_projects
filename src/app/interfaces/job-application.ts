import { JobApplicationStatus } from "../enums/JobApplicationStatus";
import { Job } from "./job";

export interface JobApplication {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    country: string;
    city: string;
    jobTitle: string;
    jobDescription: string;
    phone: string;
    resume: string;
    jobId: number;
    message:string;
    jobApplicationStatus: JobApplicationStatus;
  
  }
  
import { Job } from "./job";
import { User } from "./user";

export interface RecruiterDto extends User {
  companyName: string;
  companyWebsite: string;
  companyAddress: string;
  jobsPosted: Job[];
}

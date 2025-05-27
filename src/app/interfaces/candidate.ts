import { JobApplication } from "./job-application";
import { User } from "./user";


export interface CandidatDto extends User {
  cvLink: string;
  applications: JobApplication[];
}

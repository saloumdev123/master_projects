import { JobApplication } from "./job-application";
import { User } from "./user";


export interface Candidat extends User {
  resume: string;
  emailVerified?: boolean;
}

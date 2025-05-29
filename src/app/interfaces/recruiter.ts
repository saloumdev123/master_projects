import { User } from "./user";

export interface Recruiter extends User {
  companyName: string;
  companyWebsite: string;
  companyAddress: string;
}

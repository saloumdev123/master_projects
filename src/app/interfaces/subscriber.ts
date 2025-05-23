import { Job } from "./job";

export interface Subscriber {
    id: number;
    job: Job;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    message: string;
    email: string;
    dateCreated: string;
}

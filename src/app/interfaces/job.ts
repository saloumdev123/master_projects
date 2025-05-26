export interface Job {
  id: number;
  title: string;
  description: string;
  employmentType: string;
  location: string;
  jobType: string;
  yearExperience: number;
  datePosted: string; 
  pay: string;
  requirements: string;

  categoryId: number;
  categoryName: string;

  recruiterId: number;
  recruteurCompanyName: string;
}

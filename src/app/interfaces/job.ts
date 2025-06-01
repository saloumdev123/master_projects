export interface Job {
  id: number;
  title: string;
  description: string;
  employmentType: string;
  location: string;
  jobType: string;
  yearExperience: number;
  datePosted: string; 
  pay: number;
  requirements: string;
  categoryId: number;
  categoryName: string;
  recruiterId: number;
  recruiterCompanyName: string;
  timeAgo?: string;
  bookmarked?: boolean;
  companyLogoUrl?: string;
  logoBgColor?: string;
  logoIcon?: string;
  logoIconColor?: string;
  categoryIcon?: string;
  typeIcon?: string;
  showDetails?: boolean;
}
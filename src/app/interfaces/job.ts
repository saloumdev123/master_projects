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
  recruiterCompanyName: string;
  timeAgo?: string; // généré côté client à partir de datePosted
  bookmarked?: boolean; // statut local
  companyLogoUrl?: string; // URL du logo à afficher
  logoBgColor?: string;
  logoIcon?: string;
  logoIconColor?: string;
  categoryIcon?: string;
  typeIcon?: string;
 showDetails?: boolean; 
}

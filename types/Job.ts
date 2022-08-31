interface Salary {
  average: number;
  high: number;
  low: number;
}

export interface JobType {
  jobId: string;
  source: string;
  jobTitle: string;
  location: string;
  estimatedSalary: string;
  salary: Salary;
  unifiedZippiaSalary: number;
  salaryPeriod: string;
  companyName: string;
  companyInitial: string;
  companyID: number;
  companyLogo: string;
  jobDescription: string;
  showNewJobBedge: boolean;
  jobURL: string;
  url: string;
  partnerName: string;
  iconSVG: string;
  iconClass: string;
  templateName: string;
  titleID: string;
  socode: string;
  socCodeName: boolean;
  listingHash: string;
  postedDate: string;
  postingDate: Date;
  actionDateSince: string;
  benefits: any[];
  jobTags: string[];
  jobLevels: string[];
  cpc: number;
  sponsorFlag: boolean;
  contactEmailsFlag: boolean;
  sponsoredDlp: boolean;
  easyApplyFlag: boolean;
  contactEmails: any[];
  bestCompaniesPageURLAtJobLocation: string;
  careerMainPageURL: string;
  skillsets: string[];
  OBJcountry: string;
  OBJcity: string;
  OBJstateCode: string;
  OBJstate: string;
  OBJcompanyID: number;
  OBJcompanyDisplay: string;
  OBJindustry: string;
  OBJpostingDate: Date;
  OBJtitle: string;
  OBJtitleDisplay: string;
  OBJurl: string;
  OBJzipcode: string;
  OBJjobTags: string[];
  OBJdesc: string;
  jobMajor: boolean;
  requiredDegree: string;
  preferredDegrees: any[];
  formattedOriginalCompanyName: string;
  originalCPC: string;
  companyZippiaOverallScore: number;
  isSpammyCompany: boolean;
  nearbyTo0: string[];
  snippets: string[];
}



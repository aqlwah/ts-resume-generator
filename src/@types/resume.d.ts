export interface HistoryItem {
  year: number;
  month: number;
  header: string;
  subheader?: string;
  detail?: string;
}

export interface Skill {
  skill: string;
  level: string;
}

declare module "personal-info/resume.json" {
  interface Resume {
    name: string;
    name_kana: string;
    birthday: {
      year: number;
      month: number;
      day: number;
    };
    postal_code: string;
    address: string;
    address_kana: string;
    phone: string;
    email: string;
    summary: string;
    education: HistoryItem[];
    work_experience: HistoryItem[];
    certification: HistoryItem[];
    skills: Skill[];
  }

  const resume: Resume;
  export default resume;
}

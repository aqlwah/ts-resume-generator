declare module 'personal-info/resume.json' {
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
    education: [
      {
        order: number;
        year: number;
        month: number;
        detail: string;
      }
    ];
    work_experience: [
      {
        order: number;
        year: number;
        month: number;
        detail: string;
        role?: string;
      }
    ];
    certification: [
      {
        order: number;
        year: number;
        month: number;
        detail: string;
      }
    ];
    skills: string[];
  }

  const resume: Resume;
  export default resume;
}

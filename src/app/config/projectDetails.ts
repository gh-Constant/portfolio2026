export interface TeamMember {
  name: string;
  role: string;
  link?: string;
}

export interface ProjectDetails {
  teamSize: number;
  teamMembers: TeamMember[];
  duration: string;
  status?: string;
  projectType: string;
}

export const projectDetails: Record<string, ProjectDetails> = {
  chronosync: {
    teamSize: 2,
    teamMembers: [
      {
        name: "Constant Suchet",
        role: "Database, Web (Frontend/Backend) & PowerShell Developer",
        link: "" // You can update this link
      },
      {
        name: "Timothee Sandt",
        role: "C++ Software Developer",
        link: "" // You can add Timothee's link here
      }
    ],
    duration: "4 months",
    status: "Paused",
    projectType: "Personal Project"
  },
  pauvocoder: {
    teamSize: 1,
    teamMembers: [
      {
        name: "Constant Suchet",
        role: "Lead Developer & Audio Engineer",
        link: "https://github.com/gh-Constant" // You can update this link
      }
    ],
    duration: "3 months",
    projectType: "Personal/Academic Project"
  },
  puissancex: {
    teamSize: 1,
    teamMembers: [
      {
        name: "Constant Suchet",
        role: "Game Developer & AI Programmer",
        link: "https://github.com/gh-Constant" // You can update this link
      }
    ],
    duration: "4 months",
    projectType: "Academic Project"
  }
};
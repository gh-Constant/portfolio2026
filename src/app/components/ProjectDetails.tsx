'use client';

import { FiUsers, FiBriefcase } from 'react-icons/fi';
import { ProjectDetails as ProjectDetailsType } from '../config/projectDetails';

interface ProjectDetailsProps {
  details: ProjectDetailsType;
}

export default function ProjectDetails({ details }: ProjectDetailsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8 not-prose">
      <div className="bg-foreground/5 p-4 rounded-lg border border-foreground/20">
        <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <FiUsers className="w-5 h-5" />
          Team Members ({details.teamMembers.length})
        </h3>
        <div className="space-y-2">
          {details.teamMembers.map((member, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="relative group">
                <FiBriefcase className="w-4 h-4 text-foreground/60 cursor-help" />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {member.role}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
                </div>
              </div>
              {member.link ? (
                <a 
                  href={member.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground transition-colors underline"
                >
                  {member.name}
                </a>
              ) : (
                <span className="text-foreground/80">{member.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-foreground/5 p-4 rounded-lg border border-foreground/20">
        <h3 className="text-lg font-semibold mb-2">Duration</h3>
        <p className="text-foreground/80">{details.duration}</p>
      </div>
      
      {details.status && (
        <div className="bg-foreground/5 p-4 rounded-lg border border-foreground/20">
          <h3 className="text-lg font-semibold mb-2">Status</h3>
          <p className="text-foreground/80">{details.status}</p>
        </div>
      )}
      
      <div className="bg-foreground/5 p-4 rounded-lg border border-foreground/20">
        <h3 className="text-lg font-semibold mb-2">Project Type</h3>
        <p className="text-foreground/80">{details.projectType}</p>
      </div>
    </div>
  );
}